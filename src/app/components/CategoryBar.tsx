'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'

interface CategoryBarProps {
  
}

const options = [
    'headphones',
    'speakers',
    'earbuds',
    'accessories'
  ]

const CategoryBar: FC<CategoryBarProps> = ({}) => {
    const pathname= usePathname()
  return <>{options.map((option) => {
    const linkpath=`/shop/${option}`
    const buttonClass = 'rounded-sm w-40 h-12 hover:bg-gray-300 ' + (pathname == linkpath ? 'bg-blue-300':'bg-gray-400')
    return (
      <Link href={linkpath}>
        <button className={buttonClass} key={option}>{option.toUpperCase()}</button>
      </Link>

    )
  })}</>
}

export default CategoryBar