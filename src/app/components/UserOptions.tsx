'use client'
import { signIn, signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import Cart from './Cart';


interface UserOptionsProps {

}

const UserOptions: FC<UserOptionsProps> = ({ }) => {
  const [cartVisible, setCartVisible] = useState(false)
  const freeShippingLimit = 40

  function showCart() {
    setCartVisible(true)
  }

  return (
    <>
      <div className='text-white text-sm'>
        <button className='mx-2' onClick={() => signIn()}>Sign In</button>
        <button className='mx-2' onClick={() => signOut()}>Sign Out</button>
        <button onClick={showCart}>
          <FaShoppingBag size={20} />
        </button>
      </div>
      {/* <div className='absolute top-0 left-0 bg-black opacity-35 w-full h-screen'>

      </div> */}
      {/* <Cart /> */}
    </>

  )
}

export default UserOptions