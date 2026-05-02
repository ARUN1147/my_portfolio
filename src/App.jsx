import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SystemsGrid from './components/SystemsGrid'
import Principles from './components/Principles'
import TechStack from './components/TechStack'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-24 transition-all duration-300 ease-in-out p-6 md:p-12 max-w-7xl mx-auto w-full overflow-x-hidden">

        <section id="home">
          <Hero />
        </section>

        <section id="systems" className="mt-24">
          <SystemsGrid />
        </section>

        <section id="principles" className="mt-24">
          <Principles />
        </section>

        <section id="tech-stack" className="mt-24">
          <TechStack />
        </section>

        <section id="journey" className="mt-24">
          <Timeline />
        </section>

        <section id="contact" className="mt-24 mb-24">
          <Contact />
        </section>
        
        <footer className="text-center text-slate-500 text-sm mt-24 pb-12">
          © {new Date().getFullYear()} Arun R. Built with React & Tailwind.
        </footer>
      </main>
    </div>
  )
}

export default App
