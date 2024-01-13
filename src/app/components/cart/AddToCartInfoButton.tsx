'use client'
import { FC, useContext } from 'react'
import { CartContext } from '../ui/Providers'
import { addToCart, getCart, incrementProductInCart, redirectToPage } from '@/app/actions'

interface AddToCartInfoButtonProps {
price:number,
productId:string
}

const AddToCartInfoButton: FC<AddToCartInfoButtonProps> = ({price,productId }) => {
const {cart,setCart} = useContext(CartContext)

async function handleClick() {
    if (!cart) {
        redirectToPage('login')
    }
    const productIndex = cart?.products.map(product => product.productId).indexOf(productId)
    if (productIndex != -1) {
        await incrementProductInCart(productId, cart!.id)
        const updatedCart = await getCart(cart!.id)
        
        await setCart(updatedCart)
    } else {
        await addToCart(productId, cart!.id, 1)
        const updatedCart = await getCart(cart!.id)
        await setCart(updatedCart)
    }
}

    return <button onClick={()=>handleClick()} className='w-full bg-gray-900 text-white py-5 my-3 hover:bg-blue-200 transition-colors hover:text-black duration-500'>
        ADD TO BAG | {price}
    </button>
}

export default AddToCartInfoButton