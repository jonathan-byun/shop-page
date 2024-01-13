import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'

interface LoginButtonProps {
  
}

const LoginButton: FC<LoginButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false)

  async function logIn() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      toast.error('Sign in error')
    } finally {
      setIsLoading(false)
    }
  }
  return <button className='rounded-md bg-white hover:bg-zinc-200 px-3 py-2 ' onClick={logIn}>Login with Google</button>
}

export default LoginButton