import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Capstone from './components/Capstone'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { useSnapNavigation } from './hooks/useSnapNavigation'

export default function App() {
  useSnapNavigation()

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Capstone />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
