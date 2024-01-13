'use client'

import { addToCart, getCart, incrementProductInCart, redirectToPage } from '@/app/actions'
import { FC, useContext } from 'react'
import { CartContext } from '../ui/Providers'
import { redirect } from 'next/navigation'
import { CartWithProducts } from '@/app/api/auth/[...nextauth]/lib/types/prisma'

interface AddToCartButtonProps {
    quantity: number,
    id: string
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ quantity, id }) => {
    const { cart, setCart } = useContext(CartContext)
    
    async function handleClick() {
       
        if (!cart) {
            redirectToPage('login')
        }
        const productIndex = cart?.products.map(product => product.productId).indexOf(id)
        if (productIndex != -1) {
            await incrementProductInCart(id, cart!.id)
            const updatedCart = await getCart(cart!.id)
            
            await setCart(updatedCart)
        } else {
            await addToCart(id, cart!.id, 1)
            const updatedCart = await getCart(cart!.id)
            await setCart(updatedCart)
        }
    }
    return <button onClick={() => handleClick()} className='bg-black text-white text-center py-3 w-full group-hover:bg-white group-hover:text-black transition-all duration-500 group/button'>
        <p className='group-hover/button:scale-110 transition-transform duration-500'>ADD TO CART<span className='hidden group-hover:inline'> | {quantity} left</span></p>
    </button>
}

export default AddToCartButton