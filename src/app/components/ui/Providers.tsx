'use client'

import { Cart, Product } from '@prisma/client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React, { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import getCart from './route'
import { CartWithProducts } from '@/app/api/auth/[...nextauth]/lib/types/prisma'


interface ProvidersProps {
  children: ReactNode,
  session: Session | null,
  dbCart: CartWithProducts|null
}

type CartContextType = {cart:CartWithProducts | null, setCart:React.Dispatch<React.SetStateAction<CartWithProducts | null>>}
const initialCartContext = {cart:null,setCart:()=>{}}

export const CartContext = createContext<CartContextType>(initialCartContext)

const Providers: FC<ProvidersProps> = ({ children, session,dbCart }) => {
  const [cart, setCart] = useState<CartWithProducts|null>(null)
  useEffect(()=>{
    if (dbCart) {
      setCart(dbCart)
    }
  },[])
  return <>
    <SessionProvider session={session}>
      <CartContext.Provider value={{cart,setCart}}>
        <Toaster position='top-center' reverseOrder={false} />
        {children}
      </CartContext.Provider>
    </SessionProvider>
  </>

}

export default Providers