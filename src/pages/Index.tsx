import github from '@/assets/svg/github.svg'
import twitter from '@/assets/svg/twitter.svg'
import linkedin from '@/assets/svg/linkedin.svg'
import About from '@/components/About'

const Index = () => {
  return (
    <div className="min-h-screen bg-dark px-6 py-10">
      <div>
        <h1 className="font-bold text-4xl">Desmond Afari</h1>
        <p className="text-lg mt-3">Machine Learning Engineer</p>
        <p className="text-zinc-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum velit.</p>
        <div className="mt-10 flex gap-x-8">
          <a href="#">
            <img src={github} alt="github" />
          </a>
          <a href="#">
            <img src={linkedin} alt="github" />
          </a>
          <a href="#">
            <img src={twitter} alt="github" />
          </a>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Index