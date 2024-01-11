import prisma from '@/app/api/prisma/prisma'
import ProductCard from '@/app/components/product/ProductCard'
import ProductCarousel from '@/app/components/product/ProductCarousel'
import ProductFirstPanel from '@/app/components/product/ProductFirstPanel'
import ProductFullWidthPanel from '@/app/components/product/ProductFullWidthPanel'
import ProductInfo from '@/app/components/product/ProductInfo'
import ProductReviewPanel from '@/app/components/product/ProductReviewPanel'
import ProductSecondPanel from '@/app/components/product/ProductSecondPanel'
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
    return (<div className='bg-slate-100 pt-20'>
        <div className='border-black border-b-[1px] w-full'>
            <div className='pt-5 flex max-w-7xl mx-auto'>
                <div className='basis-2/3'>
                    {productPictures && <ProductCarousel productImages={productPictures?.images} />}
                </div>
                <div className='basis-1/3'>
                    <ProductInfo />
                </div>
            </div>
        </div>

        <div className='border-black border-b-[1px] w-full'>
            <div className='py-10 max-w-7xl mx-auto'>
                <ProductFirstPanel title='How to Use' descriptionList={['hi', 'hello', 'how are ']} ordered={true} imageUrl='https://firebasestorage.googleapis.com/v0/b/shop-page-409423.appspot.com/o/products%2Fimages%2Fclose-up-person-with-headphones-on-smiling-product-upscaled.png?alt=media&token=ec97bb81-92f3-4a78-af32-926a6ca7acfc' />
            </div>
        </div>

        <div className='border-black border-b-[1px] w-full'>
            <div className='py-16 max-w-7xl mx-auto flex'>
                <ProductSecondPanel panelDetails={[{ imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shop-page-409423.appspot.com/o/products%2Fimages%2Fclose-up-person-with-headphones-on-smiling-product-upscaled.png?alt=media&token=ec97bb81-92f3-4a78-af32-926a6ca7acfc', caption: 'Caption', description: 'hsodfasodifasodifoasifdoaifd' }]} />
                <ProductSecondPanel panelDetails={[{ imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shop-page-409423.appspot.com/o/products%2Fimages%2Fclose-up-person-with-headphones-on-smiling-product-upscaled.png?alt=media&token=ec97bb81-92f3-4a78-af32-926a6ca7acfc', caption: 'Caption', description: 'hsodfasodifasodifoasifdoaifd' }]} />
                <ProductSecondPanel panelDetails={[{ imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shop-page-409423.appspot.com/o/products%2Fimages%2Fclose-up-person-with-headphones-on-smiling-product-upscaled.png?alt=media&token=ec97bb81-92f3-4a78-af32-926a6ca7acfc', caption: 'Caption', description: 'hsodfasodifasodifoasifdoaifd' }]} />
            </div>
        </div>

        <ProductFullWidthPanel
            title='Better for you'
            listItems={[{ name: 'nanohy', description: 'bonds to something to do something' }, { name: 'hello', description: '2nd one for sure' }]}
            photoUrl='https://firebasestorage.googleapis.com/v0/b/shop-page-409423.appspot.com/o/products%2Fimages%2Fclose-up-person-with-headphones-on-smiling-product-upscaled.png?alt=media&token=ec97bb81-92f3-4a78-af32-926a6ca7acfc'
        />

        <ProductReviewPanel productName='test' />

    </div>
    )
}

export default page