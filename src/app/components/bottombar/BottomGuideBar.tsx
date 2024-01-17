import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface BottomGuideBarProps {

}

const linkOptions = [
    {
        title: 'Shop',
        options: [
            {
                option: 'All Products',
                link: '/shop#ALL'
            },
            {
                option: 'Best Sellers',
                link: '/shop#BEST%20SELLERS'
            },
            {
                option: 'Headphones',
                link: '/shop#HEADPHONES'
            },
            {
                option: 'Earbuds',
                link: '/shop#EARBUDS'
            }
        ]
    },
    {
        title: 'Pages',
        options: [
            {
                option: 'Home',
                link: '/homepage'
            },
            {
                option: 'Shop',
                link: '/shop'
            },
            {
                option: 'Starting Guide',
                link: '/guides/guide1'
            },
            {
                option: 'Advanced Guide',
                link: '/guides/guide2'
            }
        ]
    },

]

const socialMediaLinks =[
    {
        title:'Instagram',
        link:'https://www.instagram.com/'
    },
    {
        title:'Twitter',
        link:'https://twitter.com/home'
    },
    {
        title:'TikTok',
        link:'https://www.tiktok.com/'
    },
    {
        title:'Facebook',
        link:'https://www.facebook.com/'
    }
]

const BottomGuideBar: FC<BottomGuideBarProps> = ({ }) => {
    return <div className=' bg-gray-800'>
        <div className='max-w-7xl m-auto flex'>
            <div className='basis-1/3 border-r-[1px] border-white py-10'>
                <Image src='/shoplogo.png' width={200} height={200} alt='' />
                <p className='text-white mt-10'>Commitment to Excellence and Quality</p>
            </div>

            <div className='flex text-white py-10 pl-5 justify-evenly basis-2/3'>
                {linkOptions.map((option) => {
                    return (
                        <div key={option.title} className='flex flex-col gap-2'>
                            <h3 className='mb-5'>{option.title}</h3>
                            {option.options.map((listItem) => {
                                return (
                                    <Link key={listItem.option} href={listItem.link}>{listItem.option}</Link>
                                )
                            })}
                        </div>
                    )
                })}
                <div className='flex flex-col gap-2'>
                    <h3 className='mb-5'>Follow Us</h3>
                    {
                        socialMediaLinks.map((social)=>{
                            return(
                                <a key={social.title} href={social.link} target='_blank'>{social.title}</a>
                            )
                        })
                    }
                </div>
            </div>
        </div>



    </div>
}

export default BottomGuideBar