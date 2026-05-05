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
            <button className="btn-secondary flex items-center gap-2 border border-slate-200 dark:border-slate-700">
              Contact Me <Mail size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Profile Image Container */}
          <div className="relative w-full aspect-square max-w-[450px] mx-auto rounded-3xl overflow-hidden glass-card border-none flex items-center justify-center p-8">
            <motion.svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Background Glow */}
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="url(#glow)" />

              {/* Animated Tech Elements */}
              <motion.path
                d="M60 70 L140 70 L140 130 L60 130 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent-primary"
                animate={{
                  strokeDasharray: ["0, 400", "400, 0"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <motion.circle
                cx="100"
                cy="100"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-400"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Central Icon */}
              <motion.g
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="85" y="85" width="30" height="30" rx="4" fill="currentColor" className="text-accent-primary" />
                <path d="M92 95 L98 100 L92 105" fill="none" stroke="white" strokeWidth="2" />
                <line x1="102" y1="105" x2="108" y2="105" stroke="white" strokeWidth="2" />
              </motion.g>

              {/* Floating Orbs */}
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="3"
                  fill="currentColor"
                  className="text-accent-primary"
                  animate={{
                    x: [Math.random() * 200, Math.random() * 200],
                    y: [Math.random() * 200, Math.random() * 200],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.svg>
          </div>

          {/* Floating Code Snippet Card */}
          <DevJson />
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="glass-card p-6 text-center"
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
