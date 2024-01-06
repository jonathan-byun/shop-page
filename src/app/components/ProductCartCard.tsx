import { Product } from '@prisma/client'
import Image from 'next/image'
import { FC } from 'react'
import CartQuantityButtons from './CartQuantityButtons'

interface ProductCartCardProps {
    //   product:Product
}

const ProductCartCard: FC<ProductCartCardProps> = ({ }) => {
    function increment() {

    }
    function decrement() {

    }
    return <div className='flex border-black border-b-[1px] px-4 py-4 w-full h-40 bg-slate-100'>
        <div className='basis-1/3 '>
            <div className='overflow-hidden relative h-full w-full'>
                <Image src='/culture.png' alt='tried' fill={true} className='object-cover' />
            </div>
        </div>
        <div className='basis-2/3 mx-4 flex flex-col'>
            <p className='text-xl font-bold'>Name</p>
            <p>description</p>
            <div className='flex items-center'>
                <div className='basis-2/3 justify-between '>
                    <CartQuantityButtons increment={increment} decrement={decrement} />
                    <button className='mt-2 text-sm'>Remove</button>
                </div>
                <div>
                    <p>$12.00</p>
                </div>
            </div>

        </div>
    </div>
}

export default ProductCartCard