import { FC } from 'react'
import Appbar from '../components/Appbar'
import Image from 'next/image'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'

const dancing_Script = Dancing_Script({ subsets: ['latin'] })

interface pageProps {

}

const productLinks = [
  {
    title: 'Headphones',
    imgSrc: '/headphones.png',
    href: '',
  },
  {
    title: 'Earbuds',
    imgSrc: '/earbuds.png',
    href: ''
  },
  {
    title: 'Speakers',
    imgSrc: '/speaker.png',
    href: ''
  }
]

const page: FC<pageProps> = ({ }) => {
  return (<div className='bg-black mt-14'>
    <div className='w-full text-white flex flex-col text-center justify-center mb-2 text-sm'>
      <p>Welcome!</p>
      <p>Free shipping on orders above $75 with code &apos;This is a test page&apos;</p>
      <p>All images done with hotpot ai.</p>
    </div>
    <div className='w-full h-screen'>
      <div className='relative w-full h-full overflow-hidden'>
        <Image src='/banner.png' fill={true} alt='banner' className='object-cover' />
        <div className='absolute top-20 left-20 max-w-lg bg-red-300 px-3 py-4 rounded-lg'>
          <p className='text-7xl font-bold'>A better way to experience music.</p>
          <p className='text-2xl text-center mt-20'>New micro-beats technology that accentuates crisp,<em>clean</em> sound while also protecting hearing.</p>
        </div>
      </div>
    </div>
    <div className='border-t-2 border-b-2 border-black py-6 flex items-center bg-white justify-center'>
      <p>AS SEEN IN</p>
      <p className='font-bold text-xl'>Forbes</p>
    </div>
    <div className='flex w-full h-lvh'>
      <Link href='/' className='basis-2/3 overflow-hidden'>
        <div className="bg-[url('/product2.png')] w-full h-full bg-cover bg-no-repeat">
          <p className='text-white text-4xl font-bold pt-32 pl-44'>It's YOUR Time in '24</p>
          <p className='text-white text-xl pl-44 pt-5'>Count down in style with Shop</p>
        </div>
        <p className='text-4xl text-white'>hello</p>
      </Link>
      <div className='basis-1/3 flex flex-col'>
        <Link href='' className='basis-1/2 overflow-hidden'>
          <div className="bg-[url('/product1.png')] w-full h-full bg-cover">
            <p className='text-white text-center pt-14 font-bold text-2xl'>Style with Shop</p>
            <p className='text-white text-center'>shop accessories &gt;</p>
          </div>
        </Link>
        <Link href='' className='basis-1/2 overflow-hidden'>
          <div className="bg-[url('/product3.png')] w-full h-full bg-cover">
            <p className='text-white text-center pt-14 font-bold text-2xl'>Be the best</p>
            <p className='text-white text-center'>shop headphones &gt;</p>
          </div>
        </Link>
      </div>
    </div>
    <div className='w-full flex h-[40rem]'>
      {productLinks.map((product) => {
        const pClass = `font-bold top-3/4 absolute ${dancing_Script.className} text-4xl text-zinc-200 w-full text-center group-hover:opacity-0 transition-opacity duration-700`
        return (
          <Link key={'title'} href={product.href} className='basis-1/3 overflow-hidden relative group'>
            <Image src={product.imgSrc} fill={true} alt='shop picture' className='object-cover static' />
            <p className={pClass}>{product.title}</p>
            <div className='absolute w-full top-3/4 flex justify-center'>
              <div className='w-40 h-14 bg-gray-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700'>
                <p>Shop now</p>
              </div>
            </div>

          </Link>
        )
      })}
    </div>
    <div className='flex text-white py-10'>
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