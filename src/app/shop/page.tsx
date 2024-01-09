import { FC } from 'react'
import ProductCard from '../components/ProductCard'
import prisma from '../api/prisma/prisma'
import { Prisma, Product } from '@prisma/client'
import ShopNavigator from '../components/ShopNavigator'
import ShopSection from '../components/ShopSection'

interface pageProps {

}

const page: FC<pageProps> = async ({ }) => {
    const bestSellers: Product[] = await prisma.product.findMany({
        take: 4,
        where: {
            category: {
                has: 'best-seller'
            }
        }
    })
    const headPhones: Product[] = await prisma.product.findMany({
        take: 4,
        where: {
            category: {
                has: 'headphone'
            }
        }
    })
    const earbuds: Product[] = await prisma.product.findMany({
        take: 4,
        where: {
            category: {
                has: 'earbud'
            }
        }
    })
    
    const accessories:Product[] = await prisma.product.findMany({
        take: 8,
        where:{
            category:{
                has:'accessory'
            }
        }
    })
    return (
        <div className='max-w-7xl mx-auto w-full'>
            <div className='mt-20 flex flex-col items-center'>
                <p className='my-5 text-5xl font-bold'>Shop the new wave of Sound</p>
            </div>
            <ShopNavigator />
            <ShopSection productList={bestSellers} title='Best Sellers'/>
            <ShopSection productList={headPhones} title='Headphones'/>
            <ShopSection productList={earbuds} title='Earbuds'/>
            <ShopSection productList={accessories} title='Accessories' />
        </div>
    )


}

export default page