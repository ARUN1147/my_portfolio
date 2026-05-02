import React, { useState, useEffect } from 'react'
import { Home, User, Code2, Briefcase, Mail, Github, Linkedin, Twitter, Download, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Systems', id: 'systems' },
  { label: 'Tech Stack', id: 'tech-stack' },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
]

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-10 h-10 bg-accent-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-accent-primary/20">
            <Code2 size={24} />
          </div>
          <span className="text-2xl font-bold font-['Outfit'] text-slate-900 dark:text-white">Arun R.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent-primary dark:hover:text-accent-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-slate-500 border-r border-slate-200 dark:border-slate-800 pr-6 mr-2">
            <a href="#" className="hover:text-accent-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-accent-primary transition-colors"><Linkedin size={20} /></a>
          </div>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button className="px-5 py-2.5 bg-accent-primary text-white rounded-xl text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent-primary/25 flex items-center gap-2">
            <Download size={18} />
            CV
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-accent-primary"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-6 text-slate-500">
                  <a href="#" className="hover:text-accent-primary transition-colors"><Github size={24} /></a>
                  <a href="#" className="hover:text-accent-primary transition-colors"><Linkedin size={24} /></a>
                  <a href="#" className="hover:text-accent-primary transition-colors"><Twitter size={24} /></a>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-accent-primary text-white rounded-xl font-semibold">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
