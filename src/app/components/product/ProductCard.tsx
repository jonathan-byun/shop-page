import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@prisma/client'
import AddToCartButton from '../cart/AddToCartButton'


interface ProductCardProps {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const index = product.category.indexOf('best-seller')
    if (index!=-1) {
        product.category.splice(index)
    }
    const linkCategory = product.category[0]
    return (<div className='border-gray-400 border-[1px]'>
        <div className='px-6 py-3'>
            <p className='text-2xl'>{product.name}</p>
            <p className='text-sm'>${Number(product.price)}</p>
        </div>
        <div className='group'>
            {/* link here would be direct towards the product but they all go to the formatted one to show proof of concept 
            <Link href={`/shop/singleProduct/${linkCategory}`}> */}
            <Link href={`/shop/singleProduct/headphone`}>
                <div className='overflow-hidden relative h-96'>
                    <Image src={product.url} sizes='20vw' alt='product img' className='object-cover group-hover:scale-110 transition-transform duration-500' fill={true} />
                    <div className='p-2 absolute'>
                        <div className='flex justify-between'>
                        </div>
                    </div>
                </div>
            </Link>
            <AddToCartButton quantity={product.quantity} id={product.id} productPrice={Number(product.price)}/>
        </div>

    </div>


    )
}

export default ProductCard