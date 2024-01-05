'use client'
import { signIn, signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

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
      <div className='absolute top-0 left-0 bg-black opacity-35 w-full h-screen'>

      </div>
      <div className='bg-white max-w-96 w-full h-full right-0 top-0 fixed flex flex-col'>
        <div className='px-4 py-4 flex flex-col border-b-2'>
          <div className='flex justify-between items-center'>
            <p>YOUR BAG</p>
            <button className='border-[1px] border-black px-2 py-2'>
              <RxCross1 />
            </button>

          </div>
        </div>
      </div>
    </>

  )
}

export default UserOptions