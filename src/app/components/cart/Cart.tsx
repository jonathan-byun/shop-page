'use client'
import { FC } from 'react'
import { RxCross1 } from "react-icons/rx";
import ProductCartCard from '../product/ProductCartCard';

interface CartProps {
  
}



const Cart: FC<CartProps> = ({}) => {
  return (
    <div className='bg-white max-w-96 w-full h-full right-0 top-0 fixed flex flex-col'>
        <div className='px-4 py-4 flex flex-col border-b-[1px] border-black'>
          <div className='flex justify-between items-center'>
            <p>YOUR BAG</p>
            <button className='border-[1px] border-black px-2 py-2'>
              <RxCross1 />
            </button>
          </div>
          dskfjd
        </div>
        <div className='flex flex-row overflow-y-auto basis-3/5'>
            <ProductCartCard/>
        </div>
      </div>
  )
}

export default Cart