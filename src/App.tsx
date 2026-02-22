import { useEffect } from 'react'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './sections/LoadingScreen'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Toolkit from './sections/Toolkit'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal-section, .stagger-cards').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream-100">
      <CustomCursor />
      <LoadingScreen />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Toolkit />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
