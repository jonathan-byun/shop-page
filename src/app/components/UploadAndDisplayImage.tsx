'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { createProduct } from '../add/route'

interface UploadAndDisplayImageProps {

}

const UploadProductForm: FC<UploadAndDisplayImageProps> = ({ }) => {
    const [selectedImage, setSelectedImage] = useState<File>()
    return (
        <><form action={createProduct} className='flex w-full h-full'>
            <div className='basis-1/2'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <div className='basis-1/2 w-3/4 relative overflow-hidden my-3'>
                        {selectedImage ?
                            <Image src={URL.createObjectURL(selectedImage)} fill={true} alt='selected image' className='object-cover' />
                            : <div className='w-full h-full bg-white'></div>
                        }
                    </div>
                    <label className='bg-black text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-gray-900 w-1/3 text-center'>
                        {selectedImage ? 'Change' : 'Select'} Image
                        <input
                            type="file"
                            name='productImage'
                            className='hidden'
                            accept='.jpg, .jpeg, .png'
                            onChange={(e) => {
                                if (!e.target.files) {
                                    return
                                }
                                if (e.target.files[0]) setSelectedImage(e.target.files[0])
                            }}
                        /></label>
                    <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 my-2 w-1/3' onClick={() => { setSelectedImage(undefined) }}>
                        Clear
                    </button>
                </div>
            </div>
            <div className='basis-1/2'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <input type="text" placeholder='name' name='name' className='rounded-md py-2 px-4 my-1' />
                    <input type="number" placeholder='quantity' name='quantity' className='rounded-md py-2 px-4 my-1' />
                    <input type="number" step='.01' placeholder='price' name='price' className='rounded-md py-2 px-4 my-1' />
                    <input type="text" placeholder='category' name='category' className='rounded-md py-2 px-4 my-1' />
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
        </>)
}

export default UploadProductForm