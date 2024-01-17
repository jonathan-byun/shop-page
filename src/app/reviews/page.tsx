'use client'
import { useSearchParams } from 'next/navigation'
import { FC, useState } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    const [rating, setRating] = useState(5)
    const searchParams = useSearchParams()
    const productId = searchParams.get('productId')
    const productName = searchParams.get('productName')

function handleRatingChange(e:React.ChangeEvent<HTMLInputElement>) {
    setRating(Number(e.target.value))
}

    return <>
        <div className='w-full mt-14 border-b-[1px] border-purple-700 bg-slate-100'>
            <div className='text-center max-w-5xl mx-auto'>
                <h1 className='text-6xl font-bold'>Shop</h1>
                <p>{productName}</p>
                <p className='font-bold'>Review</p>
            </div>
        </div>
        <div className='w-full bg-blue-100'>
            <div className='flex flex-col max-w-xl w-full mx-auto p-10'>
                <p>Your Rating</p>
                <div className='flex py-3'>
                    <input onChange={(e)=>handleRatingChange(e)} className='w-1/2' type="range" id='rating' name='rating' min={0} max={5} step={.1} value={rating} />
                    <p>{rating}</p>
                </div>
                <p>Review Title</p>
                <input type="text" className='border-gray-400 border-[1px] rounded-md py-2 px-2 text-sm my-2 focus:outline-none focus:ring-blue-400 focus:ring-1 invalid:border-red-500 invalid:text-red-400' placeholder='Summary of your experience'/>

            </div>
        </div>
    </>

}

export default page