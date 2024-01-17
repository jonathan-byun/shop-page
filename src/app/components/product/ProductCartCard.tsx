import { Product, ProductInCart } from '@prisma/client'
import Image from 'next/image'
import { FC, useContext, useEffect, useState } from 'react'
import CartQuantityButtons from '../cart/CartQuantityButtons'
import { decrementProductInCart, getCart, getProductDetails, incrementProductInCart, removeFromCart } from '@/app/actions'
import { CartContext } from '../ui/Providers'

interface ProductCartCardProps {
    productId: string,
    quantity: number
}

const ProductCartCard: FC<ProductCartCardProps> = ({ productId, quantity }) => {
    const [product, setProduct] = useState<Product | null>()
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        loadProduct()
    }, [loadProduct])

    async function loadProduct() {
        const product = await getProductDetails(productId)
        setProduct(product)
    }

    async function increment() {
        if (!cart || !product) return
        await incrementProductInCart(productId, cart?.id, Number(product.price))
        const updatedCart = await getCart(cart.id)
        console.log(updatedCart)
        setCart(updatedCart)
    }

    async function decrement() {
        if (!cart || !product) return
        await decrementProductInCart(productId, cart.id, Number(product.price))
        const updatedCart = await getCart(cart.id)
        setCart(updatedCart)
    }

    async function removeProduct() {
        if (!cart || !product) return
        await removeFromCart(productId, cart.id, Number(product.price))
        const updatedCart = await getCart(cart.id)
        setCart(updatedCart)
    }

    let total = Number(product?.price) * quantity
    total = Math.round((total + Number.EPSILON) * 100) / 100

    return product && <div className='flex border-black border-b-[1px] px-4 py-4 w-full bg-slate-100'>
        <div className='basis-1/3 '>
            <div className='overflow-hidden relative h-32 w-full'>
                <Image src={product.url} alt='tried' fill={true} className='object-cover' />
            </div>
        </div>
        <div className='basis-2/3 mx-4 flex flex-col'>
            <p className='text-xl font-bold'>{product.name}</p>
            <p>{product.description}</p>
            <div className='flex items-center'>
                <div className='basis-2/3 justify-between '>
                    <div className='flex w-24 border-gray-300 border-[1px] mt-4 justify-between items-center bg-white'>
                        <button className=' hover:bg-gray-200' onClick={() =>  decrement() }>
                            <div className='hover:-translate-y-1 px-3 py-1'>-</div>
                        </button>
                        <p >{quantity}</p>
                        <button className=' hover:bg-gray-200' onClick={() =>  increment() }>
                            <div className='hover:-translate-y-1 px-3 py-1'>+</div>
                        </button>
                    </div>
                    <button onClick={()=>removeProduct()} className='mt-2 text-sm'>Remove</button>
                </div>
                <div>
                    <p>{total}</p>
                </div>
            </div>

        </div>
    </div>
}

export default ProductCartCard