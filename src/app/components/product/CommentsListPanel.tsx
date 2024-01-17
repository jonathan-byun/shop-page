'use client'

import { Prisma,} from '@prisma/client'
import { FC, useEffect, useState } from 'react'
import { MdVerifiedUser } from "react-icons/md";

import { getAllReviews, loadMore } from '@/app/actions';
import toast from 'react-hot-toast';

const reviewWithUser = Prisma.validator<Prisma.ReviewDefaultArgs>()({
    include: { user: true }
})

type ReviewsWithUser = Prisma.ReviewGetPayload<typeof reviewWithUser>[]

interface CommentsListPanelProps {
    productId: string
}

const CommentsListPanel: FC<CommentsListPanelProps> = ({ productId }) => {
    const [allReviews, setAllReviews] = useState<ReviewsWithUser>()
    useEffect(() => {
        const reviews = getReviews()
    }, [])

    async function getReviews() {
        const reviews = await getAllReviews(productId)
        setAllReviews(reviews)
    }

async function loadMoreReviews() {
    const reviews = await loadMore(allReviews?.length,productId)
    if (reviews=='end') {
        toast('All Reviews Loaded',{duration:2000})
        return
    }
    if (allReviews==undefined) {
        setAllReviews(reviews)
        return
    }
    setAllReviews(allReviews.concat(reviews))
}

    return <>
        <div className='max-w-4xl w-full flex flex-col'>
            {allReviews &&
                allReviews.map((review) => {
                    return (
                        <div key={review.id} className='flex p-8 border-b-[1px] border-gray-300 gap-10'>
                            <div className='flex flex-col text-sm basis-1/2 gap-1 max-w-20'>
                                <p>{review.user.name}</p>
                                <p>{review.date.toDateString()}</p>
                                {review.user.purchaseVerified &&
                                    <div className='flex items-center'>
                                        <p className='text-lg'><MdVerifiedUser /></p>
                                        <p>Verified purchase</p>
                                    </div>}
                            </div>
                            <div>
                                <p className='text-xl mb-5'>{review.title}</p>
                                <p className='text-sm'>{review.body}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
        <button onClick={()=>{loadMoreReviews()}} className=' px-20 py-3 border-[1px] border-black text-lg my-12'>
    Load More
  </button>
    </>

}

export default CommentsListPanel