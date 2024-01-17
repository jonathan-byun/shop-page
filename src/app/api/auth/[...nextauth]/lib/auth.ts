import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import Google from "next-auth/providers/google";
import Stripe from "stripe";

function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length == 0) {
        throw new Error('Missing client Id')
    }
    if (!clientSecret || clientSecret.length == 0) {
        throw new Error('Missing client Secret')
    }
    return { clientId, clientSecret }
}

function getStripeCredentials() {
    const secret = process.env.STRIPE_SECRET_KEY
    if (!secret) {
        throw new Error('Missing Stripe Secret')
    }
    return secret
}

const prisma = new PrismaClient()
export const authOptions: NextAuthOptions = {
    secret: process.env.GOOGLE_CLIENT_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            profile(profile) {
                const userRole = 'user'
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    emailVerified: profile.email_verified,
                    image: profile.picture,
                    role: userRole,
                    stripeCustomerId: null,
                    isActive: false
                }
            },
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret
        })
    ],
    session: { strategy: 'jwt' },
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }) {

            const tokenId = (token.id ? token.id : token.sub) as string
            let dbUserResult = await prisma.user.findUnique({
                where: {
                    id: tokenId
                }
            })
            if (!dbUserResult) {
                token.id = user.id
                token.stripeCustomerId = null
                token.isActive = false
                return token
            }
            return (dbUserResult)
        },
        async session({ session, token }) {

            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.stripeCustomerId = token.stripeCustomerId
            }
            return session
        },
        redirect() {
            return '/homepage'
        }
    },
    events: {
        createUser: async ({ user }) => {
            if (!user) {
                throw new Error('user required')
            }
            const stripe = new Stripe(getStripeCredentials())
            const params: Stripe.CustomerCreateParams = {
                name: user.name!,
                email: user.email!,
            }
            const customer = await stripe.customers.create(params)
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    stripeCustomerId: customer.id
                }
            })
        }
    }
}