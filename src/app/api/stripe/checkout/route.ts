import { getServerSession } from "next-auth"
import Stripe from "stripe"
import { authOptions } from "../../auth/[...nextauth]/lib/auth"
import { NextRequest, NextResponse } from "next/server"
import prisma from "../../prisma/prisma"
import { LineItem } from "@stripe/stripe-js"


export async function POST(req:NextRequest) {
    const cartId = await req.json()
    const stripeKey = process.env.STRIPE_SECRET_KEY
    if (!stripeKey) throw new Error('no stripe key')
    const stripe = new Stripe(stripeKey)

    const session = await getServerSession(authOptions)

    if (!session?.user||!session?.user.stripeCustomerId) {
        return NextResponse.json(
            {
                error: {
                    code: 'no-access',
                    message: 'Not signed in'
                }
            },
            { status: 401 }
        )
    }

    const itemsInCart = await prisma.productInCart.findMany({
        where:{
            cartId : cartId
        },
        include:{
            product:true
        }
    })

    const configuredItems=itemsInCart.map((product)=>{
        return(
            {
                price_data:{
                    currency:'usd',
                    product_data:{
                        name:product.product.name
                    },
                    unit_amount:Number(product.product.price)*100
                },
                quantity:product.quantity
            }
        )
    })
    

    const checkoutSession = await stripe.checkout.sessions.create({
        mode:'payment',
        customer:session.user.stripeCustomerId,
        line_items:configuredItems,
        success_url:'http://localhost:3000/homepage',
        cancel_url:'http://localhost:3000/shop'
    })
    if (!checkoutSession.url) {
        return NextResponse.json(
            {
                error: {
                    code: "stripe-error",
                    message: "Could not create checkout session",
                },
            },
            { status: 500 }
        );
    }
    return NextResponse.json({ session: checkoutSession }, { status: 200 });
}