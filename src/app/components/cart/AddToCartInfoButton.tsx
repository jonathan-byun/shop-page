'use client'
import { FC, useContext } from 'react'
import { CartContext, CartSidebarVisibility } from '../ui/Providers'
import { getCart, incrementProductInCart, redirectToPage } from '@/app/actions'

interface AddToCartInfoButtonProps {
    price: number,
    productId: string,
    productPrice: number
}

const AddToCartInfoButton: FC<AddToCartInfoButtonProps> = ({ price, productId, productPrice }) => {
    const { cart, setCart } = useContext(CartContext)
    const { setShowCart } = useContext(CartSidebarVisibility)

    async function handleClick() {
        if (!cart) {
            redirectToPage('login')
            return
        }
        await incrementProductInCart(productId, cart!.id, productPrice)
        const updatedCart = await getCart(cart!.id)
        await setCart(updatedCart)
        await setShowCart(true)
    }


    return <button onClick={() => handleClick()} className='w-full bg-gray-900 text-white py-5 my-3 hover:bg-blue-200 transition-colors hover:text-black duration-500'>
        ADD TO BAG | {price}
    </button>
}

export default AddToCartInfoButton