import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ShopDropDown from './ShopDropDown'
import InsideDropDown from './InsideDropDown'
import UserOptions from './UserOptions'

interface AppbarProps {

}


const Appbar: FC<AppbarProps> = ({ }) => {
    const numberOfMarquees = 7;
    return (
        <div className='fixed top-0 left-0 w-full'>
            <div className='bg-blue-200 flex overflow-x-hidden relative'>
                <div className='animate-marquee whitespace-nowrap'>
                    {[...Array(numberOfMarquees)].map((e, i) => {
                        return (
                            <span className='mx-8' key={i}>FREE SHIPPING OVER $50</span>
                        )
                    })}
                </div>
                <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                    {[...Array(numberOfMarquees)].map((e, i) => {
                        return (
                            <span className='mx-8' key={i}>FREE SHIPPING OVER $50</span>
                        )
                    })}
                </div>
            </div>
            <div className='peer flex justify-between px-32 w-full bg-black z-20'>
                <div className='flex justify-between basis-1/4 items-center'>
                    <Link href='/homepage'>
                        <div className='flex text-white text-3xl font-bold'>
                            <Image src='/shoplogo.png' width={30} height={10} alt='shoplogo' className='mx-2' />
                            ShopPage
                        </div>
                    </Link>
                    <Link className='text-white text-xs shop h-full' href='/shop'>
                        <div className='hover:border-b-gray-500 border-b-2 border-transparent p-2 my-2'>
                            SHOP
                        </div>
                    </Link>
                    <Link className='text-white text-xs inside-shop h-full' href='/inside-shop'>
                        <div className='hover:border-b-gray-500 border-b-2 border-transparent p-2 my-2'>
                            INSIDE SHOP
                        </div>
                    </Link>
                </div>
                <div className='flex justify-between items-center'>
                    <UserOptions />
                </div>
            </div>
            <ShopDropDown />
            <InsideDropDown />
        </div>

    )
}

export default Appbar