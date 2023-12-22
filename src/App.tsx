import About from "./components/About"
import Education from "./components/Education"
import Index from "./components/Index"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-zinc-400 py-12 px-6">
      <Index />
      <div>
        <About />
        <Projects />
        <Education />
        <Technologies />
      </div>
    </div>
  )
}

export default App
