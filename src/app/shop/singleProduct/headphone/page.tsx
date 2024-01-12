import prisma from '@/app/api/prisma/prisma'
import ProductCarousel from '@/app/components/product/ProductCarousel'
import ProductFirstPanel from '@/app/components/product/ProductFirstPanel'
import ProductFullWidthPanel from '@/app/components/product/ProductFullWidthPanel'
import ProductInfo from '@/app/components/product/ProductInfo'
import ProductReviewPanel from '@/app/components/product/ProductReviewPanel'
import ProductSecondPanel from '@/app/components/product/ProductSecondPanel'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = async ({ }) => {
    const product = await prisma.product.findUnique({
        where: {
            name: 'StudyPhones'
        },
    })


    const panelDetails = await prisma.fullWidthPanel.findFirst({
        where: {
            productId: product?.id
        },
        include: {
            PanelOptions: true
        }
    })

    return (
        product ?
            <div className='bg-slate-100 pt-20'>
                <div className='border-black border-b-[1px] w-full'>
                    <div className='pt-5 flex max-w-7xl mx-auto'>
                        <div className='basis-2/3'>
                            <ProductCarousel productImages={product.images} />
                        </div>
                        <div className='basis-1/3'>
                            <ProductInfo name={product.name} description={product.description} productId={product.id} price={Number(product.price)}/>
                        </div>
                    </div>
                </div>

                <div className='border-black border-b-[1px] w-full'>
                    <div className='py-10 max-w-7xl mx-auto'>
                        <ProductFirstPanel productId={product.id} />
                    </div>
                </div>

                <div className='border-black border-b-[1px] w-full'>
                    <div className='py-16 max-w-7xl mx-auto flex'>
                        <ProductSecondPanel productId={product.id} />
                    </div>
                </div>

                {panelDetails && <ProductFullWidthPanel
                    title={panelDetails.title}
                    photoUrl={panelDetails.imageUrl}
                    listItems={panelDetails.PanelOptions}
                />}
                <ProductReviewPanel productId={product?.id} />
            </div>
            : <div></div>
    )
}

export default page