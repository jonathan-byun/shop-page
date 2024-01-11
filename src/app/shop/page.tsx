import { FC, useRef } from 'react'
import ProductCard from '../components/product/ProductCard'
import prisma from '../api/prisma/prisma'
import { Prisma, Product } from '@prisma/client'
import ShopNavigator from '../components/ShopNavigator'
import ShopSection from '../components/ShopSection'

interface pageProps {

}

const page: FC<pageProps> = async ({ }) => {
    // const bestSellersRef = useRef(null)
    return (
        <div className='max-w-7xl mx-auto w-full'>
            <div className='mt-20 flex flex-col items-center'>
                <p className='my-5 text-5xl font-bold'>Shop the new wave of Sound</p>
            </div>
            <ShopNavigator />
            <ShopSection take={4} category='best-seller' title='BEST SELLERS'/>
            <ShopSection take={4} category='headphone' title='HEADPHONES'/>
            <ShopSection take={4} category='earbud' title='EARBUDS'/>
            <ShopSection take={8} category='accessory' title='ACCESSORIES' />
        </div>
    )


}

export default page