import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Rocket, Shield, Globe } from 'lucide-react'

const journey = [
  {
    title: 'Product Engineering',
    items: [
      'Built full-stack startup products from zero to one',
      'Engineered high-performance React frontends with PWA capabilities',
      'Designed secure RBAC APIs for enterprise-grade applications'
    ],
    icon: Rocket
  },
  {
    title: 'Infrastructure & Ops',
    items: [
      'Managed AWS + CI/CD deployments for seamless updates',
      'Built responsive UI systems with consistent design language',
      'Optimized database performance and data modeling'
    ],
    icon: Globe
  },
  {
    title: 'Tech Stack Focus',
    items: [
      'Worked extensively with Spring Boot + MySQL backends',
      'Implemented secure JWT-based authentication flows',
      'Reduced manual work through system automation'
    ],
    icon: Shield
  }
]

const Timeline = () => {
  return (
    <div>
      <h2 className="section-title">Career Journey</h2>
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
        {journey.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] md:-left-[61px] top-0 w-8 h-8 rounded-full bg-accent-primary border-4 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-lg">
              <phase.icon size={14} />
            </div>
            
            <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
            <ul className="space-y-4">
              {phase.items.map((item, iIndex) => (
                <li key={iIndex} className="flex gap-4 text-slate-600 dark:text-slate-400">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
