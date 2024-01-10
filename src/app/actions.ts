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