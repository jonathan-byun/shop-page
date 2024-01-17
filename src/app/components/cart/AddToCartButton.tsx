'use client'

import { getCart, incrementProductInCart, redirectToPage } from '@/app/actions'
import { FC, useContext } from 'react'
import { CartContext, CartSidebarVisibility } from '../ui/Providers'
import { redirect } from 'next/navigation'
import { CartWithProducts } from '@/app/api/auth/[...nextauth]/lib/types/prisma'

interface AddToCartButtonProps {
    quantity: number,
    id: string,
    productPrice: number

}

const AddToCartButton: FC<AddToCartButtonProps> = ({ quantity, id, productPrice }) => {
    const { cart, setCart } = useContext(CartContext)
    const { setShowCart } = useContext(CartSidebarVisibility)

    async function handleClick() {
        if (!cart) {
            redirectToPage('login')
            return
        }
        await incrementProductInCart(id, cart!.id, productPrice)
        const updatedCart = await getCart(cart!.id)
        await setCart(updatedCart)
        await setShowCart(true)
    }
    return <button onClick={() => handleClick()} className='bg-black text-white text-center py-3 w-full group-hover:bg-white group-hover:text-black transition-all duration-500 group/button'>
        <p className='group-hover/button:scale-110 transition-transform duration-500'>ADD TO CART<span className='hidden group-hover:inline'> | {quantity} left</span></p>
    </button>
}

export default AddToCartButton