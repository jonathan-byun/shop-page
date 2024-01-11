import prisma from '@/app/api/prisma/prisma'
import { FC } from 'react'
import { FaStar } from "react-icons/fa";
import { Instrument_Serif } from 'next/font/google';

interface ProductReviewPanelProps {
    productId: string
}

const instrumentSerif = Instrument_Serif({weight:'400',subsets:['latin']})

const ProductReviewPanel: FC<ProductReviewPanelProps> = async ({ productId }) => {
    const topReviews = [
        {
            productId: '8452nd82d8fhb',
            userId: 'clr8b5r9q00001jdbb1zq1s8x',
            id: 'kcv03rdf0dfnj',
            title: 'Best Headphones Ever',
            body: 'The headphones boast a sleek and modern design, combining a robust build with a comfortable fit. The adjustable headband ensures a secure yet comfortable grip, allowing for extended listening sessions without any discomfort. The ear cushions are soft and plush, providing excellent noise isolation.',
            rating: 5,
            user: {
                id: 'clr8b5r9q00001jdbb1zq1s8x',
                name: 'Zootos',
                email: 'zootosstream@gmail.com',
                emailVerified: null,
                image: 'https://lh3.googleusercontent.com/a/ACg8ocId87NK7BPqYwzhISHJ1lb-X90Oaly97ysNhn5OriZa=s96-c',
                role: 'user'
            }
        }
    ]

    // const allReviews = await prisma.review.findMany({
    //     take:10,
    //     where:{
    //         productId: productId
    //     },
    //     include:{
    //         user:true
    //     }
    // })
    // await prisma.review.findMany({
    //     take: 4,
    //     where: {
    //         AND: {
    //             productId: productId,
    //             rating:5
    //         }
    //     },
    //     include:{
    //         user: true
    //     }
    // })
    const reviewCount = 1
    const avgRating = 5
    console.log(topReviews)


    return <div className='py-10 flex flex-col items-center'>
        <h2 className='text-xl'>DON'T JUST TAKE OUR WORD FOR IT.</h2>
        <div className='flex gap-2 justify-center mt-10'>
            {topReviews.map((review) => {
                let starsArray: React.JSX.Element[] = []
                for (let i = 0; i < review.rating; i++) {
                    review.rating - i >= 1
                        ? starsArray.push(<div key={i} className='text-blue-200 text-2xl'><FaStar /></div>)
                        : starsArray.push(<div key={i} className={`text-blue-200 text-2xl overflow-hidden max-w-${Math.floor((review.rating - i) * 6)}`}><FaStar /></div>)
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
        <h2 className='text-xl'>Reviews</h2>
        <div className='max-w-3xl w-full m-auto flex justify-between'>
            <div className='flex items-end'>
                <p className={'text-5xl '+instrumentSerif.className}>{avgRating}</p>
                <div className='text-3xl ml-1 mr-3'><FaStar /></div>
                <p>Based on {reviewCount} reviews</p>
            </div>
        </div>
    </div>
}

export default ProductReviewPanel