'use client'
import { PanelOptions } from '@prisma/client';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

interface ProductFullWidthPanelProps {
    title: string,
    listItems: PanelOptions[],
    photoUrl: string,
}

const ProductFullWidthPanel: FC<ProductFullWidthPanelProps> = ({ title,photoUrl,listItems }) => {
    const [currentSelection, setCurrentSelection] = useState(0)

    return <div className='border-black border-b-[1px] w-full flex'>
        <div className='basis-2/5 flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-8'>
                <p className='text-5xl font-bold'>{title}</p>
                {listItems.map((item,i) => {
                    return (
                        <button key={item.name} onClick={()=>setCurrentSelection(i)} className='flex group items-center gap-2 w-fit'>
                            <div className={'text-xl ' + (i == currentSelection ? 'scale-100' : 'scale-0 group-hover:scale-100 transition-transform duration-500 origin-left')}><FaArrowRight /></div>
                            <p className={'text-xl '+(i == currentSelection ? 'bg-blue-200' : '-translate-x-5 group-hover:translate-x-0 transition-transform duration-500')}>{item.name}</p>
                        </button>
                    )
                })}
            </div>
        </div>

        <div className='basis-3/5 relative overflow-hidden h-[45rem]'>
            <Image src={photoUrl} fill={true} sizes='66vw' alt=''/>
            <p className='absolute top-1/3 left-28 max-w-60'>{listItems[currentSelection].description}</p>
        </div>
    </div>
}

export default ProductFullWidthPanel