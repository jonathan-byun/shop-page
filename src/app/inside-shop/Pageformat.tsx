import Image from 'next/image'
import { FC } from 'react'

interface PageformatProps {
    pageDetails: {
        title: string,
        mainDescription: string,
        imageSrc: string,
        secondaryTitle: string,
        subjects: { title: string, description: string }[]
    }
}

const Pageformat: FC<PageformatProps> = ({ pageDetails }) => {
    return <div className='max-w-6xl mx-auto mt-12'>
        <div className='w-full flex mb-10'>
            <div className='basis-1/2 items-center py-20 pr-10'>
                <h1 className='text-7xl'>{pageDetails.title}</h1>
                <p className='my-10'>{pageDetails.mainDescription}</p>
            </div>
            <div className='relative basis-1/2'>
                <Image src={pageDetails.imageSrc} fill={true} sizes='40vw' alt='' className='object-cover' />
            </div>
        </div>

        <h2 className='text-5xl my-10'>{pageDetails.secondaryTitle}</h2>
        <div className='flex flex-wrap my-10 gap-5 justify-between'>
            {pageDetails.subjects.map((subject) => {
                return (
                    <div className='basis-[45%] my-10'>
                        <h3 className='text-3xl'>{subject.title}</h3>
                        <p>{subject.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
}

export default Pageformat