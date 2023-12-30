import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Index from "./components/Index"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-zinc-400 py-12 px-6 md:px-8">
      <Index />
      <div>
        <About />
        <Projects />
        <Education />
        <Technologies />
        <Contact />
      </div>
    </div>
  )
}

export default App
