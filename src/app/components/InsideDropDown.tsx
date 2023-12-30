import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface InsideDropDownProps {

}

const dropdownItems = [
    {
        title: 'Our Mission',
        imageRef: '/mission.png',
        alt: 'mission picture',
        href: '/inside-shop/mission'
    },
    {
        title: 'Our Culture',
        imageRef: '/culture.png',
        alt: 'culture picture',
        href: '/inside-shop/culture'
    },
    {
        title: 'Sustainability',
        imageRef: '/sustain.png',
        alt: 'sustainability picture',
        href: '/inside-shop/sustainability'
    }
]

const InsideDropDown: FC<InsideDropDownProps> = ({ }) => {
    return <div className='peer-has-[.inside-shop:hover]:visible hover:visible scale-y-0 peer-has-[.inside-shop:hover]:scale-y-100 hover:scale-y-100 origin-top invisible flex w-full divide-x divide-gray-400 bg-gray-50 fixed transition-all duration-1000 z-10'>
        {dropdownItems.map((item) => {
            return (
                <Link href={item.href} key={item.title} className='flex flex-col divide-y divide-gray-400 basis-1/3 group'>
                    <div className='relative w-full h-96 overflow-hidden'>
                        <Image src={item.imageRef} alt={item.alt} fill={true} className='object-cover group-hover:scale-110 grayscale group-hover:grayscale-[60%] transition ease-in-out duration-1000' />
                    </div>
                    <div className='w-full text-4xl font-bold pt-5 pb-20 pl-3 flex-grow'>{item.title}</div>
                </Link>
            )
        })}
    </div>
}

export default InsideDropDown