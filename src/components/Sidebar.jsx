import React from 'react'
import { Home, User, Code2, Briefcase, Mail, Github, Linkedin, Twitter, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: User, label: 'Systems', id: 'systems' },
  { icon: Code2, label: 'Tech Stack', id: 'tech-stack' },
  { icon: Briefcase, label: 'Journey', id: 'journey' },
  { icon: Mail, label: 'Contact', id: 'contact' },
]

const Sidebar = ({ isOpen: isExpanded, setIsOpen: setIsExpanded }) => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    if (isMobile) setIsExpanded(false)
  }

  const collapsedWidth = isMobile ? 64 : 80

  return (
    <>
      <AnimatePresence>
        {isMobile && isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity"
          />
        )}
      </AnimatePresence>

      <motion.aside 
        initial={false}
        animate={{ 
          width: isExpanded ? 250 : (isMobile ? 0 : 80),
          x: isMobile && !isExpanded ? -80 : 0
        }}
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
        className={`flex flex-col h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300 overflow-hidden shadow-2xl ${isMobile ? 'fixed left-0 top-0' : 'sticky top-0'}`}
      >
      <div className="h-20 flex items-center px-4 overflow-hidden">
        <div className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
          <div className="w-10 h-10 bg-accent-primary rounded-xl flex items-center justify-center text-white shrink-0">
            <Code2 size={24} />
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="whitespace-nowrap"
              >
                DevFolio
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <nav className="flex-1 px-3 mt-8 space-y-2 overflow-y-auto overflow-x-hidden">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="w-full flex items-center gap-4 px-3 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent-primary dark:hover:text-accent-primary transition-all group relative"
          >
            <div className="min-w-[24px] flex items-center justify-center">
              <item.icon size={22} className="group-hover:scale-110 transition-transform" />
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
            {!isExpanded && (
              <div className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 md:block hidden">
                {item.label}
              </div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 space-y-6 overflow-hidden">
        <button className="w-full h-12 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all overflow-hidden shrink-0">
          <Download size={20} className="shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-sm font-semibold whitespace-nowrap"
              >
                Download CV
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        
        <div className={`flex ${isExpanded ? 'justify-center' : 'flex-col items-center'} gap-4 text-slate-500`}>
          <a href="#" className="hover:text-accent-primary transition-colors shrink-0"><Github size={20} /></a>
          <a href="#" className="hover:text-accent-primary transition-colors shrink-0"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-accent-primary transition-colors shrink-0"><Twitter size={20} /></a>
        </div>
      </div>
    </motion.aside>
    </>
  )
}

export default Sidebar
