import { useState, useEffect } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import Home from './components/Home'
import Social from './components/Social'
import Profile from './components/Profile'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Languages from './components/Languages'
import Interests from './components/Interests'
import ScrollTop from './components/ScrollTop'

function App() {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem('selected-theme') === 'dark'
  )

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme')
      localStorage.setItem('selected-theme', 'dark')
    } else {
      document.body.classList.remove('dark-theme')
      localStorage.setItem('selected-theme', 'light')
    }
  }, [darkTheme])

  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="l-main bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Home darkTheme={darkTheme} onThemeToggle={() => setDarkTheme(d => !d)} />
            <Social />
            <Profile />
            <Education />
            <Skills />
          </div>
          <div className="resume__right">
            <Experience />
            <Certificates />
            <Languages />
            <Interests />
          </div>
        </div>
        <p className="updated">Updated: Apr 14, 2026</p>
      </main>
      <ScrollTop />
    </>
  )
}

export default App
