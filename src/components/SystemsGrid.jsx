import React from 'react'
import { Layout, Server, Database, ShieldCheck, Cloud, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const systems = [
  {
    title: 'Architectural Mindset',
    desc: 'Component-driven React, Atomic Design principles for scalable frontends.',
    icon: Layout,
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    title: 'Clean REST APIs',
    desc: 'RBAC implementation, predictable endpoints, and thorough documentation.',
    icon: Server,
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    title: 'Performance-first DB',
    desc: 'Optimized schemas, indexing strategies, and query performance tuning.',
    icon: Database,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    title: 'Security-first Auth',
    desc: 'JWT management, secure role-based access control, and data encryption.',
    icon: ShieldCheck,
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20'
  },
  {
    title: 'Cloud-first Deployment',
    desc: 'CI/CD mindset, automated testing, and scalable cloud infrastructure.',
    icon: Cloud,
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-900/20'
  },
  {
    title: 'Business Growth Focus',
    desc: 'Building features that solve real problems and scale with the business.',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20'
  }
]

const SystemsGrid = () => {
  return (
    <div>
      <h2 className="section-title">How I Build Systems</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 hover:border-accent-primary/30 transition-colors group"
          >
            <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <item.icon className={`${item.color}`} size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SystemsGrid
