import { FC } from 'react'

interface ReasonDisplayProps {
    reason: {
        icon: React.ReactNode,
        title: string,
        description: string
    }
}

const ReasonDisplay: FC<ReasonDisplayProps> = ({ reason }) => {
    return <div className='flex flex-col my-8'>
        <div className='flex justify-center'>
            {reason.icon}
        </div>
        <p className='text-center text-2xl my-3'>{reason.title}</p>
        <p className='text-center text-sm'>{reason.description}</p>
    </div>
}

export default ReasonDisplay