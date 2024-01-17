'use client'
import { useSearchParams } from 'next/navigation'
import { FC, useRef, useState } from 'react'
import submitReview from '../actions'
import SubmitReviewButton from './SubmitReviewButton'
import toast from 'react-hot-toast'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    const [rating, setRating] = useState(5)
    const searchParams = useSearchParams()
    let productId = searchParams.get('productId')
    const productName = searchParams.get('productName')
    const ref = useRef<HTMLFormElement>(null)

    function handleRatingChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRating(Number(e.target.value))
    }
    if (!productId) productId = 'blank'
    const submitReviewWithProduct = submitReview.bind(null, productId)

    return <>
        <div className='w-full mt-14 border-b-[1px] border-purple-700 bg-slate-100'>
            <div className='text-center max-w-5xl mx-auto'>
                <h1 className='text-6xl font-bold'>Shop</h1>
                <p>{productName}</p>
                <p className='font-bold'>Review</p>
            </div>
        </div>
        <div className='w-full bg-blue-100'>
            <form ref={ref} className='flex flex-col max-w-2xl w-full mx-auto p-10' action={async(formData)=>{
                await submitReviewWithProduct(formData)
                ref.current?.reset()
                toast('posted')
                }}>
                <label htmlFor='rating' >Your Rating</label>
                <div className='flex py-3'>
                    <input onChange={(e) => handleRatingChange(e)} className='w-1/2' type="range" id='rating' name='rating' min={0} max={5} step={.1} value={rating} />
                    <p>{rating}</p>
                </div>
                <label htmlFor='title'>Review Title</label>
                <input type="text" id='title' name='title' required={true} className='border-gray-400 default:border-gray-400 border-[1px] rounded-md py-2 px-2 text-sm my-2 focus:outline-none focus:ring-blue-400 focus:ring-1 focus:border-transparent invalid:border-red-500 invalid:text-red-400' placeholder='Summary of your experience' />
                <label htmlFor="review">Your Review</label>
                <textarea id='review' name='review' required={true} className='border-gray-400 default:border-gray-400 h-60 border-[1px] rounded-md p-2 text-sm my-2 focus:outline-none focus:ring-blue-400 focus:ring-1 focus:border-transparent invalid:border-red-500 invalid:text-red-400' placeholder='Give us some detail about what you liked and disliked about the product' />
                <SubmitReviewButton />
            </form>
        </div>
    </>

}

export default page