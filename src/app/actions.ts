'use server'

import { Product } from "@prisma/client"
import prisma from "./api/prisma/prisma"
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

export async function getProductDetails(productId: string) {
  const product = await prisma.product.findUnique({
    where:{
      id:productId
    }
  })
  return product
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
      },
      total: 0
    },
    include: {
      products: true
    }
  })
  return createdCart
}

export async function removeFromCart(productId: string, cartId: string, productPrice: number) {
  const deletedProduct = await prisma.productInCart.delete({
    where: {
      cartProduct: {
        cartId: cartId,
        productId: productId
      }
    }
  })
  await prisma.cart.update({
    where: {
      id: cartId
    },
    data: {
      total: {decrement:(productPrice * deletedProduct.quantity)}
    }
  })
}

export async function incrementProductInCart(productId: string, cartId: string, productPrice: number) {
  await prisma.productInCart.upsert({
    where: {
      cartProduct: {
        cartId: cartId,
        productId: productId
      }
    },
    update: {
      quantity: {
        increment: 1
      }
    },
    create: {
      quantity: 1,
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
  await prisma.cart.update({
    where: {
      id: cartId
    },
    data: {
      total: {
        increment: productPrice
      }

    }
  })

}
export async function decrementProductInCart(productId: string, cartId: string, productPrice: number) {
   const updatedProduct = await prisma.productInCart.update({
    where: {
      cartProduct: {
        cartId: cartId,
        productId: productId
      }
    },
    data: {
      quantity: {
        decrement: 1
      }
    }
  })
  if (updatedProduct.quantity<1) {
    await prisma.productInCart.delete({
      where:{
        cartProduct:{
          cartId:cartId,
          productId:productId
        }
      }
    })
  }
  await prisma.cart.update({
    where: {
      id: cartId
    },
    data: {
      total: {
        decrement: productPrice
      }
    }
  })
}

export async function getCart(cartId: string) {
  const cart = await prisma.cart.findUnique({
    where: {
      id: cartId
    },
    include: {
      products: true
    }
  })
  return cart
}



export async function redirectToPage(page: string) {
  redirect(`/${page}`)
}

