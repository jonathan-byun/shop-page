'use client'
import { FC, useContext } from 'react'
import { RxCross1 } from "react-icons/rx";
import ProductCartCard from '../product/ProductCartCard';
import { CartSidebarVisibility } from '../ui/Providers';

interface CartProps {

}



const CartSidebar: FC<CartProps> = ({ }) => {
  const { showCart, setShowCart } = useContext(CartSidebarVisibility)

  return (<>
    <button onClick={() => setShowCart(false)} className='hover:cursor-default'>
      <div className={'fixed top-0 left-0 bg-black opacity-35 z-10 ' + (showCart ? 'w-full h-screen' : 'w-0 h-0')}>
      </div>
    </button>

    <div className={'bg-white max-w-96 w-full h-full right-0 top-0 fixed flex flex-col z-30 transition-transform duration-500 ' + (showCart ? 'translate-x-0' : 'translate-x-96')}>
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
        <ProductCartCard />
      </div>
    </div>
  </>

  )
}

export default CartSidebar