import { FC } from 'react'

const Footer: FC = () => {
  const date = new Date()

  return (
    <footer className='h-12 px-6 flex items-center bg-black text-white'>
        <p className='text-sm'>&copy; Desmond Afari {date.getFullYear()} </p>
    </footer>
  )
}

export default Footer