'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import LoginButton from '../components/appbar/LoginButton'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col bg-purple-100'>
      <div className='flex w-8/12'>
        <div className='basis-1/2 bg-gradient-to-r from-blue-300 to-green-900 rounded-l-md flex flex-col items-center justify-center px-3 py-20'>
          <Image src='/shoplogo.png' height={300} width={300} alt='logo' />
        </div>
        <div className='basis-1/2 flex flex-col justify-center items-center bg-orange-100'>
          <p className='text-black font-bold text-5xl'>Welcome</p>
          <p className='mb-7 text-2xl font-bold'>Sign in</p>
          <LoginButton />
        </div>
      </div>
    </div>
  )



}

export default page