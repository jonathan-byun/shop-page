
import prisma from '@/app/api/prisma/prisma'
import { FC } from 'react'
import { FaStar } from "react-icons/fa";
import { Instrument_Serif } from 'next/font/google';


import CommentsListPanel from './CommentsListPanel';

interface ProductReviewPanelProps {
    productId: string
}

const instrumentSerif = Instrument_Serif({ weight: '400', subsets: ['latin'] })

const ProductReviewPanel: FC<ProductReviewPanelProps> = async ({ productId }) => {
    const topReviews = await prisma.review.findMany({
        take: 4,
        where: {
            AND: {
                productId: productId,
                rating:5
            }
        },
        include:{
            user: true
        }
    })
    const reviewCount = await prisma.review.count({
        where:{
            productId:productId
        }
    })
    const avgRating = await prisma.review.aggregate({
        _avg:{
            rating:true
        },
        where:{
            productId:productId
        }
    })

    return <div className='py-10 flex flex-col items-center'>
        <h2 className='text-xl'>DON'T JUST TAKE OUR WORD FOR IT.</h2>
        <div className='flex gap-2 justify-center mt-10'>
            {topReviews.map((review) => {
                const rating = Number(review.rating)
                let starsArray: React.JSX.Element[] = []
                for (let i = 0; i < rating; i++) {
                    rating - i >= 1
                        ? starsArray.push(<div key={i} className='text-blue-200 text-2xl'><FaStar /></div>)
                        : starsArray.push(<div key={i} className={`text-blue-200 text-2xl overflow-hidden max-w-${Math.floor((rating - i) * 6)}`}><FaStar /></div>)
                }
                return (
                    <div key={review.id} className='basis-1/6 bg-black text-white'>
                        <div className='h-[20rem] border-b-[1px] border-white overflow-y-auto no-scrollbar px-6 py-8'>
                            <h2 className='text-xl'>"{review.title}"</h2>
                            <p className='text-sm'>{review.body}</p>
                        </div>
                        <div className='px-6 py-5'>
                            <h2>{review.user.name}</h2>
                            <div className='flex'>{starsArray}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        <h2 className='text-3xl my-10 font-bold'>Reviews</h2>
        <div className='max-w-4xl w-full m-auto flex justify-between border-b-[1px] border-gray-300 pb-10'>
            <div className='flex items-end'>
                <p className={'text-5xl ' + instrumentSerif.className}>{Number(avgRating._avg.rating)}</p>
                <div className='text-3xl ml-1 mr-3'><FaStar /></div>
                <p>Based on {reviewCount} reviews</p>
            </div>
            <button className='border-black border-[1px] px-5 hover:bg-black hover:text-white'>Add a Review</button>
        </div>
        <CommentsListPanel productId={productId} />
    </div>
}

export default ProductReviewPanel