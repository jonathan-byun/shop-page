import { FC } from 'react'
import Appbar from '../components/appbar/Appbar'
import Image from 'next/image'
import Link from 'next/link'
import { Oswald } from 'next/font/google'
import prisma from '../api/prisma/prisma'
import ProductCard from '../components/product/ProductCard'

import { TbAdjustmentsHeart } from "react-icons/tb";
import { MdHearing } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { PiSuitcaseRollingThin } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdCleanHands } from "react-icons/md";
import ReasonDisplay from '../components/ui/ReasonDisplay'
import { FaArrowRight } from "react-icons/fa6"
const oswald = Oswald({ subsets: ['latin'] })

interface pageProps {

}

const magazineSVGs = [
  {
    title: 'ELLE',
    src: '/logos/svg/ELLE_Magazine_Logo.svg'
  },
  {
    title: 'New York',
    src: '/logos/NewYork.png'
  },
  {
    title: 'Complex',
    src: '/logos/Complex.png'
  },
  {
    title: 'VOGUE',
    src: '/logos/svg/VOGUE_LOGO.svg'
  }
]

const reasonsToBuy = [
  {
    icon: <TbAdjustmentsHeart size={50} />,
    title: 'PERFECT FIT',
    description: 'A variety of sizes set for any and all shapes guaranteed'
  },
  {
    icon: <MdHearing size={50} />,
    title: 'BETTER FOR YOUR EARS',
    description: 'Better seals and noise cancelling lead to lower decibel levels and better hearing for the long term'
  },
  {
    icon: <FaInstagram size={50} />,
    title: 'NEW STYLE',
    description: 'From designers at the top fashion brands to fit with any look'
  },
  {
    icon: <PiSuitcaseRollingThin size={50} />,
    title: 'TRAVEL DURABLE',
    description: 'Bring revolutionary sound anywhere without worry'
  },
  {
    icon: <FaEarthAmericas size={50} />,
    title: 'EARTH FRIENDLY',
    description: 'Made from recycled material and a pledge for climate friendly production - shop and save the earth'
  },
  {
    icon: <MdCleanHands size={50} />,
    title: 'ANTI-BACTERIAL',
    description: 'Anti-germ material keeps the ears clean and infection free'
  }
]

const page: FC<pageProps> = async ({ }) => {
  const bestSellersProducts = await prisma.product.findMany({
    take: 4,
    where: {
      category: {
        has: 'best-seller'
      }
    }
  })
  return (<div className='mt-14'>
    <div className='w-full h-screen'>
      <div className='relative w-full h-full overflow-hidden'>
        <Image src='/banner.png' fill={true} alt='banner' className='object-cover' />
        <div className='absolute top-20 left-20 max-w-lg bg-red-300 px-3 py-4 rounded-lg flex flex-col items-center'>
          <p className='text-7xl font-bold'>A better way to experience music.</p>
          <p className='text-2xl text-center mt-20'>New micro-beats technology that accentuates crisp,<em>clean</em> sound while also protecting hearing.</p>
          <Link href='/shop' className='bg-black px-4 py-2 text-white mt-3 hover:text-black hover:bg-blue-200 transition-colors duration-500'>Shop now</Link>
        </div>
      </div>
    </div>

    <div className='border-y-[1px] border-black py-6 flex items-center bg-white justify-center'>
      <div className='max-w-7xl flex justify-evenly w-full h-full items-center'>
        <p className='text-center'>NOT ACTUALLY SEEN IN</p>
        {magazineSVGs.map((magazine) => {
          return (
            <div className='relative basis-1/5 mx-5 h-10' key={magazine.title}>
              <Image src={magazine.src} fill={true} alt={magazine.title} />
            </div>
          )
        })}
      </div>
    </div>

    <div className='my-4 flex flex-col items-center'>
      <h2 className={'text-5xl font-bold my-10 ' + oswald.className}>Shop Best Sellers</h2>
      <div className='flex max-w-7xl w-full'>
        {bestSellersProducts.map((product) => {
          return (<div key={product.id} className='basis-1/4 m-1'>
            <ProductCard product={product}  />
          </div>
            
          )
        })}
      </div>
    </div>

    <div className='my-5'>
      <p className='text-center text-5xl font-bold my-10'>What makes us different?</p>
      <div className='flex max-w-7xl w-full mx-auto'>
        <div className='basis-1/4 flex flex-col'>
          {(reasonsToBuy.slice(0, 3)).map((reason) => {
            return (
              <ReasonDisplay reason={reason} key={reason.title} />
            )
          })}
        </div>
        <div className='basis-1/2 relative overflow-hidden'>
          <Image src='/center-image.png' fill={true} sizes='700px' alt='headphones-white-background' className='object-cover top-3' />
        </div>
        <div className='basis-1/4 flex flex-col'>
          {(reasonsToBuy.slice(3)).map((reason) => {
            return (
              <ReasonDisplay reason={reason} key={reason.title} />
            )
          })}
        </div>
      </div>
    </div>

    <div className='relative h-[45rem] overflow-hidden'>
      <Image src='/twopeople.jpg' fill={true} alt='' className='object-cover' />
      <div className='absolute w-full h-full flex flex-col items-center justify-center'>
        <div>
          <p className='text-5xl font-semibold px-3'>Give the gift of music today</p>
          <div className='bg-blue-200 w-full h-5 -mt-4'></div>
        </div>
        <p className='text-xl mt-3 mb-20'>Every purchase this month gets a promo!</p>
        <div className='bg-white border-[1px] border-black flex justify-between items-center w-2/5 my-5'>
          <div className='px-4 py-2'>
            <p className='text-sm'>When you buy a pair of</p>
            <p className='text-2xl'>HEADPHONES 2.0</p>
          </div>
          <div className='px-10'>
            <FaArrowRight size={30}/>
          </div>
          <div className='px-4 py-2'>
            <p className='text-sm text-right'>Get free</p>
            <p className='text-2xl'>EARBUDS 2.0</p>
          </div>
        </div>
        <div className='bg-white border-[1px] border-black flex justify-between items-center w-2/5 my-5'>
          <div className='px-4 py-2'>
            <p className='text-sm'>When you buy a pair of</p>
            <p className='text-2xl'>HEADPHONES 2.0 <em>and</em> NECKLACE 2.0 </p>
          </div>
          <div className='px-10'>
            <FaArrowRight size={30}/>
          </div>
          <div className='px-4 py-2'>
            <p className='text-sm text-right'>Get free</p>
            <p className='text-2xl text-right'>EARBUDS 2.0 <em>and</em> SPEAKER 2.0</p>
          </div>
        </div>
      </div>
    </div>

    <div className='flex py-10'>
      <div className='basis-1/3 flex flex-col items-center'>
        <p className='text-3xl font-bold'>Hear it first</p>

      </div>
      <div className='basis-2/3 flex justify-center items-center flex-col'>
        <p className='text-3xl font-bold mb-5'>Follow us</p>
        <a href="instagram.com">Instagram</a>
        <a href="facebook.com">Facebook</a>
        <a href="twitter.com">Twitter</a>
      </div>
    </div>
  </div>)
}

export default page