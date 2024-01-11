import Image from 'next/image'
import { FC } from 'react'
import { Instrument_Serif } from 'next/font/google'

interface ProductFirstPanelProps {
    title: string,
    descriptionList: string[],
    ordered: boolean,
    imageUrl: string
}

const ISerif = Instrument_Serif({weight:'400', subsets:['latin']})

const ProductFirstPanel: FC<ProductFirstPanelProps> = ({ title, descriptionList, ordered, imageUrl }) => {
    return <div className={`flex ${ISerif.className}`}>
        <div className='basis-2/5'>
            <h2 className='text-5xl my-5'>{title}</h2>
            {descriptionList.map((description, i) => {
                return (
                    <div key={description} className='flex gap-20 items-start my-5'>
                        {ordered &&
                            <div className='text-sm rounded-full border-[1px] px-[0.65rem] py-1 border-black'>{i + 1}</div>
                        }
                        <p className='text-lg'>{description}</p>
                    </div>
                )
            })}
        </div>
        <div className='basis-3/5 h-[30rem] relative overflow-hidden'>
            <Image src={imageUrl} fill={true} sizes='33vw' alt='' className='object-cover'/>
        </div>
    </div>
}

export default ProductFirstPanel