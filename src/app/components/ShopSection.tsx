'use server'
import { Product } from '@prisma/client'
import { FC } from 'react'
import ProductCard from './ProductCard'
import prisma from '../api/prisma/prisma'
import { getProducts } from '../actions'

interface ShopSectionProps {
  take: number,
  category: string,
  title: string
}

const ShopSection: FC<ShopSectionProps> = async ({ take, category, title }) => {

  const productList = await getProducts(take,category)

  return <div className='border-b-[1px] border-black pt-32 -mt-32' id={title}>
    <p className='font-bold text-3xl text-center my-10'>{title}</p>
    <div className='flex w-full mb-5 justify-start flex-wrap'>
      {productList.map((product) => {
        return (
          <div key={product.id} className='basis-[24%] m-auto mb-4'>
            <ProductCard product={product} />
          </div>
        )
      })}

    </div>
  </div>
}

export default ShopSection