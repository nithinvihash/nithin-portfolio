import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WebSuiter from './components/WebSuiter'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* =====================================================
          ENTRANCE LOADER
      ====================================================== */}

      <AnimatePresence mode="wait">
        {loading && (
          <Loader
            onComplete={() => {
              setLoading(false)
            }}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN PORTFOLIO
      ====================================================== */}

      <div className="home-background">
        <Navbar />
        <Hero />
      </div>

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