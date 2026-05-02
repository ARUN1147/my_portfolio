import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const principles = [
  "Clean, readable code over clever one-liners",
  "Reusable components and modular architecture",
  "Scalable backend structure for future growth",
  "UX-driven features before complexity",
  "Security-first design from the ground up"
]

const Principles = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="section-title">Core Principles</h2>
        <div className="space-y-4">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 glass-card bg-opacity-50"
            >
              <CheckCircle2 className="text-accent-success" size={24} />
              <span className="font-medium text-slate-700 dark:text-slate-200">{principle}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-10 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 border-accent-primary/10"
      >
        <h2 className="text-2xl font-bold mb-6">What I Am Looking For</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
          "I am looking for product-focused teams working on real systems, dashboards, and scalable applications. My goal is to contribute to products that make a tangible difference in business efficiency and user experience."
        </p>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
            <span className="font-bold">AR</span>
          </div>
          <div>
            <div className="font-bold">Arun R.</div>
            <div className="text-sm text-slate-500">Product Engineer</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Principles
