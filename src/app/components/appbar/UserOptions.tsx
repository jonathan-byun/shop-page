'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FC, useContext, useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { CartSidebarVisibility } from '../ui/Providers';


interface UserOptionsProps {

}

const UserOptions: FC<UserOptionsProps> = ({ }) => {
  const {showCart, setShowCart} = useContext(CartSidebarVisibility)
  const freeShippingLimit = 40
  const { data: session, status } = useSession()

  return (
    <>
      <div className='text-white text-sm'>
        {status === 'authenticated'
          ? <button className='mx-2' onClick={() => signOut()}>Sign Out</button>
          : <button className='mx-2' onClick={() => signIn()}>Sign In</button>
        }
        <button onClick={()=>{setShowCart(true)}}>
          <FaShoppingBag size={20} />
        </button>
      </div>
    </>

  )
}

export default UserOptions