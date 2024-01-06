'use server'

import prisma from "@/app/api/prisma/prisma"

export default async function getCart(userId: string) {
    const cart = await prisma.cart.findUnique({
        where: {
            user: '8hklsjdfb'
        }
    })
}