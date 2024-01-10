import prisma from '@/app/api/prisma/prisma'
import ProductCard from '@/app/components/ProductCard'
import ProductCarousel from '@/app/components/ProductCarousel'
import ProductInfo from '@/app/components/ProductInfo'
import { Product } from '@prisma/client'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = async ({ }) => {
    const productPictures = await prisma.product.findUnique({
        where: {
            name: 'StudyPhones'
        },
        select: {
            images: true
        }
    })
    return (
        <div className='mt-20'>
            <div className='py-5 max-w-7xl mx-auto flex '>
                <div className='basis-2/3'>
                    {productPictures && <ProductCarousel productImages={productPictures?.images} />}
                </div>
                <div className='basis-1/3'>
                    <ProductInfo />
                </div>
            </div>
        </div>
    )
}

export default page