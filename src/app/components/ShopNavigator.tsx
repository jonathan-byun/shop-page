'use client'
import Link from 'next/link'
import { FC, useState } from 'react'


interface ShopNavigatorProps {

}

const pageSections = ['ALL', 'BEST SELLERS', 'HEADPHONES', 'EARBUDS', 'ACCESSORIES']

const ShopNavigator: FC<ShopNavigatorProps> = ({ }) => {
  const [current, setCurrent] = useState('ALL')

  function handleClick(e: React.MouseEvent) {
    setCurrent((e.target as HTMLButtonElement).value)
  }

  return <div className=' sticky top-16 bg-white border-b-[1px] border-black py-7 z-10'>
    <div className='flex justify-between max-w-3xl m-auto w-full'>
      {pageSections.map((section) => {
        return (
          <Link key={section} href={`#${section}`}>
            <button value={section} className={'py-2 w-32 border-[1px] border-black text-sm ' + (current == section ? 'bg-blue-200' : 'hover:bg-blue-200 hover:border-none transition-all duration-500')} onClick={(e) => handleClick(e)}>{section}</button>
          </Link>

        )
      })}
    </div>

  </div>
}

export default ShopNavigator