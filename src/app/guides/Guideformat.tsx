import Image from 'next/image'
import { FC } from 'react'

interface GuideformatProps {
    pageDetails:{
        title:string,
        paragraph1Heading:string,
        paragraph1:string,
        paragraph2Heading:string,
        paragraph2:string,
        imageSrc:string
    }
}

const Guideformat: FC<GuideformatProps> = ({pageDetails }) => {
    return <div className='max-w-7xl w-full mx-auto mt-14'>
        <div className='flex justify-center items-center py-32'>
            <h1 className='text-7xl'>{pageDetails.title}</h1>
        </div>

        <div className='flex border-y-[1px] border-black'>
            <div className='basis-1/2 py-20 pr-16'>
                <h2 className='text-3xl mb-4'>{pageDetails.paragraph1Heading}</h2>
                <p>{pageDetails.paragraph1}</p>
            </div>
            <div className='basis-1/2 relative overflow-hidden'>
                <Image src={pageDetails.imageSrc} fill={true} alt='' className='object-cover'/>
            </div>
        </div>

        <div>
            <h2 className='text-3xl border-b-[1px] border-black text-center py-20'>{pageDetails.paragraph2Heading}</h2>
            <p className='py-10'>{pageDetails.paragraph2}</p>
        </div>
    </div>
}

export default Guideformat