import { FC } from 'react'
import UploadProductForm from '@/app/components/UploadAndDisplayImage';

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='bg-slate-800 flex justify-center items-center w-auto h-dvh'>
        <div className='w-1/2 h-1/2 flex bg-zinc-400'>
                <UploadProductForm />
        </div>
    </div>
}

export default page