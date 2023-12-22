import { FC } from 'react'

const Education: FC = () => {
  return (
    <section className='pt-24'>
      <header className='h-12 flex items-center sticky top-0 backdrop-blur-sm mb-4'>
        <h4 className='text-sm tracking-widest font-bold text-white'>EDUCATION</h4>
      </header>
      <div className='grid gap-y-12'>
        <div className='space-y-2'>
          <div>
            <p className='text-xs'>DECEMBER 2022 - APRIL 2023</p>
          </div>
          <div className='space-y-2'>
            <p className='text-white'>Data Scientist: Machine Learning</p>
            <p className='text-sm'>CodeCademy</p>
            <p className='text-sm'><span className='text-white'>Relevant coursework: </span>Pandas, Scikit-Learn, Tensorflow, Matplotlib, Statistics, Exploratory Data Analysis, Data Visualization, Supervised Learning, Unsupervised Learning, Feature Engineering, Deep Learning</p>
          </div>
        </div>
        <div className='space-y-2'>
          <div>
            <p className='text-xs'>SEPTEMBER 2022 - OCTOBER 2023</p>
          </div>
          <div className='space-y-2'>
            <p className='text-white'>Software Engineering Programme</p>
            <p className='text-sm'>ALX</p>
            <p className='text-sm'><span className='text-white'>Relevant coursework: </span>Regular Expressions, Networking, Data Structures, DevOps, HTTPs, API Development, NoSQL, Caching, Authentication, Debugging</p>
          </div>
        </div>
        <div className='space-y-2'>
          <div>
            <p className='text-xs'>JULY 2017 - JULY 2021</p>
          </div>
          <div className='space-y-2'>
            <p className='text-white'>BSc. Telecommunications Engineering</p>
            <p className='text-sm'>KNUST</p>
            <p className='text-sm'><span className='text-white'>Relevant coursework: </span> Algebra, Calculus, Differential Equations, Microprocessors, Probability, Statistics, Computer Networking</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education