import { FC } from 'react'
import ProductCard from '../components/ProductCard'
import prisma from '../api/prisma/prisma'
import { Product } from '../api/auth/[...nextauth]/lib/types/db'
import { Prisma } from '@prisma/client'

interface pageProps {

}



const page: FC<pageProps> = async ({ }) => {
    const products: Product[] = await prisma.product.findMany()
    return (
        <div className='flex w-full mb-5 justify-evenly flex-wrap'>
            {products.map((product) => {
                return (
                    <ProductCard product={product} key={product.id} />
                )
            })}

        </div>)
}

export default page