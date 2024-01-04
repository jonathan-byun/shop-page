import Link from 'next/link'
import { FC, ReactNode } from 'react'
import CategoryBar from '../components/CategoryBar'

interface layoutProps {
  children: ReactNode
}



const layout: FC<layoutProps> = ({ children }) => {
  return <>
    <div className='flex flex-col items-center mt-12 max-w-7xl m-auto'>
      <p className='text-6xl font-bold my-10'>SHOP</p>
      <div className='flex justify-around w-full mb-8'>
        <CategoryBar />
      </div>
      {children}</div>

  </>
}

export default layout