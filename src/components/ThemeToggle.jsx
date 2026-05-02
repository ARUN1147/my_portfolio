import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 glass-card hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group overflow-hidden"
    >
      <motion.div
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        {darkMode ? (
          <Sun className="text-yellow-400 group-hover:scale-110 transition-transform" size={24} />
        ) : (
          <Moon className="text-slate-600 group-hover:scale-110 transition-transform" size={24} />
        )}
      </motion.div>
    </button>
  )
}

export default ThemeToggle
