'use client'
import { FC } from 'react'
import { useFormStatus } from 'react-dom'

interface SubmitReviewButtonProps {

}

const SubmitReviewButton: FC<SubmitReviewButtonProps> = ({ }) => {
    const { pending } = useFormStatus()
    return <button type='submit' aria-disabled={pending} className='bg-blue-950 hover:bg-blue-900 transition-colors duration-300 text-white rounded-full w-full py-2 mt-10'>Post Review</button>
}

export default SubmitReviewButton