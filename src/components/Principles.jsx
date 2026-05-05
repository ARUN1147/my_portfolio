import React from 'react'
import { CheckCircle2, Code2, Layout, Database, Smartphone, ShieldCheck, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const principles = [
  {
    title: "Clean Code",
    desc: "Readable code over clever one-liners",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Modularity",
    desc: "Reusable components and modular architecture",
    icon: Layout,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Scalability",
    desc: "Scalable backend structure for future growth",
    icon: Database,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "UX First",
    desc: "UX-driven features before complexity",
    icon: Smartphone,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Security",
    desc: "Security-first design from the ground up",
    icon: ShieldCheck,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  }
]

const Principles = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-accent-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-accent-secondary/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="section-title">Core Principles</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              My engineering philosophy focuses on long-term maintainability, security, and exceptional user experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-5 glass-card bg-opacity-40 border-slate-200/50 dark:border-slate-800/50 hover:border-accent-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${p.bg} ${p.color} group-hover:scale-110 transition-transform duration-300`}>
                    <p.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{p.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-full relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 rounded-3xl" />
            
            <div className="glass-card h-full p-8 md:p-10 bg-gradient-to-br from-white/50 to-white/10 dark:from-slate-900/50 dark:to-slate-900/10 border-white/40 dark:border-slate-800/40 relative z-10 flex flex-col justify-between overflow-hidden">
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-6 text-accent-primary/20 group-hover:text-accent-primary/40 transition-colors duration-500">
                <Quote size={80} strokeWidth={1} />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">What I Am Looking For</h2>
                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium relative italic">
                  <span className="text-3xl text-accent-primary font-serif absolute -left-4 -top-2 opacity-50">"</span>
                  I am looking for product-focused teams working on real systems, dashboards, and scalable applications. My goal is to contribute to products that make a tangible difference in business efficiency and user experience.
                  <span className="text-3xl text-accent-primary font-serif absolute -bottom-4 opacity-50">"</span>
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-slate-200/50 dark:border-slate-800/50 pt-8">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary p-[2px]">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-accent-primary font-bold text-lg">
                      AR
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-800 dark:text-white">Arun R.</div>
                  <div className="text-sm font-medium text-accent-primary">Product Engineer</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Principles
