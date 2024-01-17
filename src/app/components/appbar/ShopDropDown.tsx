import Link from 'next/link'
import { FC } from 'react'

interface ShopDropDownProps {

}

const dropdownColumnItems = [
    {
        name: 'Guide 1',
        href: '/guides/guide1'
    },
    {
        name: 'Guide 2',
        href: '/guides/guide2'
    },
    {
        name: 'Hot Accessories',
        href: '/shop#ACCESSORIES'
    },
    {
        name: 'Product of the month',
        href: '/shop/singleProduct/headphone'
    },
    {
        name: 'Products',
        href: '/shop'
    },
    {
        name: 'New Earbuds',
        href: '/shop#EARBUDS'
    }

]

const dropdownRowItems = [
    {
        title: 'Headphones',
        description: 'Shop All Headphones',
        href: '/shop#HEADPHONES'
    },
    {
        title: 'Earbuds',
        description: 'Shop All Earbuds',
        href: '/shop#EARBUDS'
    },
    {
        title: 'Best Sellers',
        description: 'Shop All Speakers',
        href: '/shop#BEST%20SELLERS'
    },
    {
        title: 'All',
        description: 'Shop All Gaming',
        href: '/shop#ALL'
    },
    {
        title: 'Accessories',
        description: 'Shop All Accessories',
        href: '/shop#ACCESSORIES'
    }
]


const ShopDropDown: FC<ShopDropDownProps> = ({ }) => {
    return (
        <>
            <div className='flex bg-black text-white w-full pt-8 pb-6 justify-between px-96 fixed peer-has-[.shop:hover]:visible invisible hover:visible scale-y-0 hover:scale-y-100 peer-has-[.shop:hover]:scale-y-100 origin-top -mt-1 transition-all ease-in-out duration-1000 z-10'>
                <ul className='flex flex-col border-r-2 basis-1/6'>
                    {dropdownColumnItems.map((item) => {
                        return <li key={item.name}>
                            <Link href={item.href} className='text-sm hover:text-gray-500'>{item.name}</Link>
                        </li>
                    })}
                </ul>
                {dropdownRowItems.map((category) => {
                    return <div key={category.title} className='flex flex-col'>
                        <Link href={category.href}>
                            <p className='font-bold text-md mb-1'>{category.title}</p>
                            <p className='text-xs text-gray-500'>{category.description}</p>
                        </Link>
                    </div>
                })}
            </div>
        </>



    )
}

export default ShopDropDown