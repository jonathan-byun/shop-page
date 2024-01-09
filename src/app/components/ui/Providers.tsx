'use client'

import { Product } from '@prisma/client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import getCart from './route'


interface ProvidersProps {
  children: ReactNode,
  session: Session | null
}

export const CartContext = createContext({})

const Providers: FC<ProvidersProps> = ({ children, session }) => {
  const [cart, setCart] = useState<Array<Product> | null>(null)
  useEffect(()=>{
    console.log('provider',session)
    // getCart()
  },[])
  return <>
    <SessionProvider session={session}>
      <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
        <Toaster position='top-center' reverseOrder={false} />
        {children}
      </CartContext.Provider>
    </SessionProvider>
  </>

}

export default Providers