import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ShopDropDown from './ShopDropDown'
import InsideDropDown from './InsideDropDown'
import UserOptions from './UserOptions'

interface AppbarProps {

}


const Appbar: FC<AppbarProps> = ({ }) => {
    return (
        <>
            <div className='peer flex justify-between px-32 -mb-4 fixed top-0 left-0 w-full bg-black z-20'>
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
                <div className='flex justify-between'>
                    <UserOptions />
                </div>
            </div>
            <ShopDropDown />
            <InsideDropDown />
        </>

    )
}

export default Appbar