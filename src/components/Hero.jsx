import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Terminal } from 'lucide-react'
import DevJson from './DevJson'

const stats = [
  { label: 'Years Experience', value: '1.5+' },
  { label: 'Production Builds', value: '10+' },
  { label: 'Code Quality', value: '99%' },
]

const Hero = () => {
  return (
    <div className="relative pt-8 md:pt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >


          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-accent-primary">Arun R</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-300 mb-6">
            Product Engineer
          </h2>

          <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            "I enjoy building systems that reduce manual work and scale with business growth."
          </p>

          <p className="text-slate-600 dark:text-slate-500 mb-10 max-w-lg">
            Product Engineer with 1.5+ years of experience building scalable, React-heavy web applications and startup products. Focus on real business problems, performance, and secure deployments.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </button>
            <a 
              href="mailto:arun1147r@gmail.com"
              className="btn-secondary flex items-center gap-2 border border-slate-200 dark:border-slate-700"
            >
              Contact Me <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Profile Image Container */}
          <div className="relative w-full aspect-square max-w-[450px] mx-auto rounded-3xl overflow-hidden border-none flex items-center justify-center bg-slate-100 dark:bg-slate-900 group">
            <video
              src="/vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Floating Code Snippet Card - Now inside the container */}
            <div className="absolute inset-0 p-6 sm:p-8 flex items-end justify-start pointer-events-none">
              <DevJson />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="glass-card p-6 text-center min-w-[240px]"
          >
            <div className="text-3xl font-bold text-accent-primary mb-1">{stat.value}</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Hero
