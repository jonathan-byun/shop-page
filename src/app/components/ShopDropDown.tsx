import Link from 'next/link'
import { FC } from 'react'

interface ShopDropDownProps {

}

const dropdownColumnItems = [
    {
        name: 'Guide 1',
        href: '/shop/guide1'
    },
    {
        name: 'Guide 1',
        href: '/shop/guide2'
    },
    {
        name: 'New Arrivals',
        href: '/shop/new-arrivals'
    },
    {
        name: 'Limited Editions',
        href: '/shop/limited-editions'
    },
    {
        name: 'Products',
        href: '/shop/products'
    },
    {
        name: 'Sale',
        href: '/shop/sale'
    }

]

const ShopDropDown: FC<ShopDropDownProps> = ({ }) => {
    return (
        <>
            <div className='peer/shop h-full'>
                <div className='text-white h-full flex items-center'>Shop</div>
            </div>
            <div className='peer-hover/shop:block bg-gray-500 w-full absolute hidden left-0 top-0'>
                <div className='flex justify-center'>
                    <ul className='flex flex-col'>
                        {dropdownColumnItems.map((item) => {
                            return <li key={item.name}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default ShopDropDown