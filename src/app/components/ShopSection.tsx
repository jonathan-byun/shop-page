import { Product } from '@prisma/client'
import { FC } from 'react'
import ProductCard from './ProductCard'

interface ShopSectionProps {
  productList:Product[],
  title:string
}

const ShopSection: FC<ShopSectionProps> = ({productList, title}) => {
  return  <div className='border-b-[1px] border-black'>
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