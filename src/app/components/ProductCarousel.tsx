'use client'
import Image from 'next/image'
import { FC, useState } from 'react'

interface ProductCarouselProps {
    productImages: string[]
}

const ProductCarousel: FC<ProductCarouselProps> = ({ productImages }) => {
    const [currentImage, setCurrentImage] = useState(0)
    function handleClick(e:React.MouseEvent) {
        setCurrentImage(Number((e.currentTarget as HTMLButtonElement).value))
    }
    return <div className='flex'>
        <div className='basis-[15%] flex flex-col'>
            {productImages.map((image,i)=>{
                return(
                    <button onClick={(e)=>handleClick(e)} key={i} value={i} className={'w-full h-28 my-2 relative overflow-hidden ' + (i==currentImage ? 'border-[1px] border-black':'opacity-65')}>
                        <Image fill={true} sizes='25vw' src={image} alt='' className='object-cover'/>
                    </button>
                )
            })}
        </div>
        <div className='basis-[85%] h-[40rem] relative overflow-hidden m-2'>
            <Image src={productImages[currentImage]} fill={true} sizes='33vw' alt='' className='object-cover'/>
        </div>
    </div>
}

export default ProductCarousel