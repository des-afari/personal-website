import { FC } from 'react'

const Projects: FC = () => {
  return (
    <section className='pt-24'>
      <header className='h-12 flex items-center sticky top-0 backdrop-blur-sm mb-4'>
        <h4 className='text-sm tracking-widest font-bold text-white'>PROJECTS</h4>
      </header>
      <div className='grid gap-y-12'>
        <a href='/' className='grid grid-cols-8'>
          <div className='h-32 w-40 col-span-2 bg-red-500'></div>
          <div className='col-span-6'>
            <p className='text-white my-4 md:mt-0'>A Blogging Application</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor molestiae minus aut voluptatibus eius distinctio cupiditate animi! Minima, soluta.</p>
          </div>
        </a>
        <a href='/' className='grid grid-cols-8'>
          <div className='h-32 w-40 col-span-2 bg-blue-500'></div>
          <div className='col-span-6'>
            <p className='text-white my-4 md:mt-0'>A Stock Purchase Application</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor molestiae minus aut voluptatibus eius distinctio cupiditate animi! Minima, soluta.</p>
          </div>
        </a>
        <a href='/' className='grid grid-cols-8'>
          <div className='h-32 w-40 col-span-2 bg-green-500'></div>
          <div className='col-span-6'>
            <p className='text-white my-4 md:mt-0'>A Shopping Application</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor molestiae minus aut voluptatibus eius distinctio cupiditate animi! Minima, soluta.</p>
          </div>
        </a>
        <a href='/' className='grid grid-cols-8'>
          <div className='h-32 w-40 col-span-2 bg-yellow-500'></div>
          <div className='col-span-6'>
            <p className='text-white my-4 md:mt-0'>A Blogging Application</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor molestiae minus aut voluptatibus eius distinctio cupiditate animi! Minima, soluta.</p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Projects