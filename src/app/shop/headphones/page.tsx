import { Product } from '@/app/api/auth/[...nextauth]/lib/types/db'
import prisma from '@/app/api/prisma/prisma'
import ProductCard from '@/app/components/ProductCard'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = async({}) => {
    const products: Product[] = await prisma.product.findMany({
        where:{
            category: {
                has: 'headphones'
            }
    }})
  return <div className='flex w-full mb-5 justify-between flex-wrap'>
  {products.map((product) => {
      return (
          <ProductCard product={product} key={product.id}/>
      )
  })}

</div>
}

export default page