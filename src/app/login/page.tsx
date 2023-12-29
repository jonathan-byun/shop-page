'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  const [isLoading, setIsLoading] = useState(false)

  async function logIn() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      toast.error('Sign in error')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col bg-purple-100'>
      <div className='flex w-8/12'>
        <div className='basis-1/2 bg-gradient-to-r from-blue-300 to-green-900 rounded-l-md flex flex-col items-center justify-center px-3 py-20'>
          <Image src='/shoplogo.png' height={300} width={300} alt='logo' />
        </div>
        <div className='basis-1/2 flex flex-col justify-center items-center bg-orange-100'>
          <p className='text-black font-bold text-5xl'>Welcome</p>
          <p className='mb-7 text-2xl font-bold'>Sign in</p>
          <button className='rounded-md bg-white hover:bg-zinc-200 px-3 py-2 ' onClick={logIn}>Login with Google</button>
        </div>
      </div>
    </div>
  )



}

export default page