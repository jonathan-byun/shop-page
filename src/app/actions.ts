'use server'

import { Product } from "@prisma/client"
import prisma from "./api/prisma/prisma"
import { increment } from "firebase/database"
import { Decimal } from "@prisma/client/runtime/library"
import { redirect } from "next/navigation"


export async function getProducts(take: number, category: string,) {
  const productList: Product[] = await prisma.product.findMany({
    take: take,
    where: {
      category: {
        has: category
      }
    }
  })
  return productList
}

export async function loadMore(skip: number | undefined, productId: string) {
  'use server'
  if (!skip) skip = 0
  const moreResults = await prisma.review.findMany({
    skip: skip,
    take: 5,
    where: {
      productId: productId
    },
    include: {
      user: true
    }
  })
  if (!moreResults[0]) {
    return 'end'
  }
  return moreResults
}

export async function getAllReviews(productId: string) {
  const allReviews = await prisma.review.findMany({
    take: 5,
    where: {
      productId: productId
    },
    include: {
      user: true
    }
  })
  return (allReviews)
}

export async function createCart(userId: string) {
  const createdCart = await prisma.cart.create({
    data: {
      user: {
        connect: {
          id: userId
        }
      }
    },
    include:{
      products:true
    }
  })
  return createdCart
}

export async function addToCart(productId: string, cartId: string, quantity: number) {
  const updatedCart = await prisma.productInCart.create({
    data: {
      quantity: quantity,
      product: {
        connect: {
          id: productId
        }
      },
      cart: {
        connect: {
          id: cartId
        }
      }
    },
  })
  return updatedCart
}

export async function removeFromCart(productId:string, cartId:string) {
  const updatedCart = await prisma.productInCart.delete({
    where:{
      cartProduct:{
        cartId:cartId,
        productId:productId
      }
    }
  })
  return updatedCart
}

export async function incrementProductInCart(productId: string, cartId: string) {
  const updatedCart = await prisma.productInCart.update({
    where: {
      cartProduct:{
        cartId:cartId,
        productId:productId
      }
    },
    data: {
      quantity: {
        increment: 1
      }
    },
  })
  return updatedCart

}
export async function decrementProductInCart(productId: string, cartId: string) {
  const updatedCart = await prisma.productInCart.update({
    where: {
      cartProduct:{
        cartId:cartId,
        productId:productId
      }
    },
    data: {
      quantity: {
        decrement: 1
      }
    }
  })
  return updatedCart
}

export async function getCart(cartId:string) {
  const cart = await prisma.cart.findUnique({
    where:{
      id:cartId
    },
    include:{
      products:true
    }
  })
  return cart
}

export async function redirectToPage (page:string) {
  redirect(`/${page}`)
}