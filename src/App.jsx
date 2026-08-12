import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WebSuiter from './components/WebSuiter'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* HOME / HERO */}
      <div className="home-background">
        <Navbar />
        <Hero />
      </div>

      {/* REST OF PORTFOLIO */}
      <About />
      <Skills />
      <Projects />
      <WebSuiter />
      <Contact />
      <Footer />
    </>
  )
}

export default App