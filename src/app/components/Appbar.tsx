import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ShopDropDown from './ShopDropDown'

interface AppbarProps {

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


const Appbar: FC<AppbarProps> = ({ }) => {
    return (
        <div className='relative'>
            <div className='peer flex justify-between max-w-screen-2xl m-auto'>
                <div className='flex justify-between basis-1/3 items-center py-4'>
                    <Link href='/homepage'>
                        <div className='flex text-white text-4xl'>
                            <Image src='/shoplogo.png' width={50} height={10} alt='shoplogo' />
                            ShopPage
                        </div>
                    </Link>
                    <div className='text-white shop'>shop</div>
                    {/* <ShopDropDown /> */}
                </div>
            </div>
            <div className='peer-has-[.shop:hover]:bg-blue-500 bg-gray-500 w-full left-0 top-0'>
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
        </div>

    )
}

export default Appbar