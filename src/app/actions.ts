'use server'

import { Product } from "@prisma/client"
import prisma from "./api/prisma/prisma"

export async function getProducts(take:number, category:string,){
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

export async function loadMore(skip:number|undefined, productId:string) {
  'use server'
  if (!skip) skip=0
  const moreResults = await prisma.review.findMany({
      skip: skip,
      take: 5,
      where: {
          productId: productId
      },
      include:{
          user: true
      }
  })
  if (!moreResults[0]) {
    return 'end'
  }
  return moreResults
}

export async function getAllReviews(productId:string) {
  const allReviews = await prisma.review.findMany({
    take:5,
    where:{
        productId: productId
    },
    include:{
        user:true
    }
})
return(allReviews)
}