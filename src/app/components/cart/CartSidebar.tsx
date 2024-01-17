'use client'
import { FC, useContext } from 'react'
import { RxCross1 } from "react-icons/rx";
import ProductCartCard from '../product/ProductCartCard';
import { CartContext, CartSidebarVisibility } from '../ui/Providers';
import { ProductInCart } from '@prisma/client';
import getStripe from '@/app/api/stripe/getStripe';

interface CartProps {
}



const CartSidebar: FC<CartProps> = ({ }) => {
  const { showCart, setShowCart } = useContext(CartSidebarVisibility)
  const { cart } = useContext(CartContext)

  function compareCreatedAtDates(a: ProductInCart, b: ProductInCart) {
    if (a.createdAt < b.createdAt) {
      return -1
    }
    return 1
  }

  async function handleCheckout() {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      body: JSON.stringify(cart?.id),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const checkoutSession = await res.json().then((value) => {
      return value.session;
    });
    const stripe = await getStripe();
    console.log('stripe', stripe)
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    //If redirect fails then warning will display to console.
    console.warn(error.message);

  }

  return (<>
    <button onClick={() => setShowCart(false)} className='hover:cursor-default'>
      <div className={'fixed top-0 left-0 bg-black opacity-35 z-20 ' + (showCart ? 'w-full h-screen' : 'w-0 h-0')}>
      </div>
    </button>

    <div className={'bg-white max-w-96 w-full h-full right-0 top-0 fixed flex flex-col z-30 transition-transform duration-500 ' + (showCart ? 'translate-x-0' : 'translate-x-96')}>
      <div className='px-4 py-4 flex flex-col border-b-[1px] border-black'>
        <div className='flex justify-between items-center'>
          <p>YOUR BAG</p>
          <button onClick={() => setShowCart(false)} className='border-[1px] border-black px-2 py-2'>
            <RxCross1 />
          </button>
        </div>
        {cart && (Number(cart?.total) > 50 ? 'Qualified for Free Shipping!' : `Add $${Math.round((50 - Number(cart?.total)) * 100) / 100} more for free shipping!`)}
      </div>
      <div className='flex flex-col overflow-y-auto basis-4/5'>
        {cart?.products.sort(compareCreatedAtDates).map((product) => {
          return (
            <ProductCartCard productId={product.productId} key={product.productId} quantity={product.quantity} />
          )
        })}
      </div>
      <div className='px-4 py-4 flex items-center'>
        <h3>Total: {Number(cart?.total)}</h3>
        <button onClick={() => handleCheckout()}>Checkout</button>
      </div>
    </div>
  </>

  )
}

export default CartSidebar