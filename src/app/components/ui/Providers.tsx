'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React, { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { CartWithProducts } from '@/app/api/auth/[...nextauth]/lib/types/prisma'


interface ProvidersProps {
  children: ReactNode,
  session: Session | null,
  dbCart: CartWithProducts | null
}

type CartContextType = { cart: CartWithProducts | null, setCart: React.Dispatch<React.SetStateAction<CartWithProducts | null>> }
const initialCartContext = { cart: null, setCart: () => { } }

export const CartContext = createContext<CartContextType>(initialCartContext)

type CartSidebarContextType = { showCart: boolean, setShowCart: React.Dispatch<React.SetStateAction<boolean>> }
const initialCartSidebarContext = { showCart: false, setShowCart: () => { } }

export const CartSidebarVisibility = createContext<CartSidebarContextType>(initialCartSidebarContext)

const Providers: FC<ProvidersProps> = ({ children, session, dbCart }) => {
  const [cart, setCart] = useState<CartWithProducts | null>(null)
  const [showCart, setShowCart] = useState<boolean>(false)
  useEffect(() => {
    if (dbCart) {
      setCart(dbCart)
    }
  }, [])
  return <>
    <SessionProvider session={session}>
      <CartContext.Provider value={{ cart, setCart }}>
        <CartSidebarVisibility.Provider value={{ showCart, setShowCart }}>
          <Toaster position='top-center' reverseOrder={false} />
          {children}
        </CartSidebarVisibility.Provider>
      </CartContext.Provider>
    </SessionProvider>
  </>

}

export default Providers