import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Globe, Shield, Zap, CheckCircle2, Calendar } from 'lucide-react'

const journey = [
  {
    title: 'Product Engineering',
    period: 'The Foundation',
    year: '2021',
    description: 'Specialized in building high-performance web applications from the ground up, focusing on user experience and scalability.',
    items: [
      'Built full-stack startup products from zero to one',
      'Engineered high-performance React frontends with PWA capabilities',
      'Designed secure RBAC APIs for enterprise-grade applications'
    ],
    icon: Rocket,
    color: 'indigo',
    image: '/cip.png'
  },
  {
    title: 'Infrastructure & Ops',
    period: 'Systems & Scale',
    year: '2022',
    description: 'Managing complex deployments and optimizing system reliability through automation and robust architecture.',
    items: [
      'Managed AWS + CI/CD deployments for seamless updates',
      'Built responsive UI systems with consistent design language',
      'Optimized database performance and data modeling'
    ],
    icon: Globe,
    color: 'violet',
    image: '/gym.png'
  },
  {
    title: 'Tech Stack Focus',
    period: 'Deep Expertise',
    year: '2023 - Present',
    description: 'Mastering modern backend technologies and security protocols to ensure data integrity and system speed.',
    items: [
      'Worked extensively with Spring Boot + MySQL backends',
      'Implemented secure JWT-based authentication flows',
      'Reduced manual work through system automation'
    ],
    icon: Shield,
    color: 'emerald',
    image: '/land.png'
  }
]

const Timeline = () => {
  return (
    <section className="relative py-12">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="section-title mb-0">Career Journey</h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-accent-primary/50 to-transparent rounded-full hidden md:block"></div>
      </div>

      <div className="relative">
        {/* Animated Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-accent-primary to-transparent h-40"
            animate={{ 
              top: ['-10%', '110%'] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        <div className="space-y-12 md:space-y-24">
          {journey.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-center w-full"
            >
              {/* Center Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-background-light dark:bg-background-dark border-4 border-accent-primary flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                  <phase.icon size={16} className="text-accent-primary" />
                </div>
              </div>

              {/* Content Card (Left Side) */}
              <div className="w-full md:w-1/2 ml-12 md:ml-0 md:pr-16 flex md:justify-end">
                <div className="glass-card p-6 md:p-8 hover:border-accent-primary/50 transition-all group relative overflow-hidden hover:shadow-2xl hover:shadow-accent-primary/10 w-full max-w-xl">
                  {/* Background Glow */}
                  <div className={`absolute -right-20 -top-20 w-40 h-40 bg-accent-primary/10 blur-[80px] rounded-full group-hover:bg-accent-primary/20 transition-colors`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-primary px-3 py-1 bg-accent-primary/10 rounded-full">{phase.period}</span>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
                        <Calendar size={14} />
                        {phase.year}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors">{phase.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3">
                      {phase.items.map((item, iIndex) => (
                        <div key={iIndex} className="flex items-start gap-3 p-3 rounded-xl bg-slate-500/5 dark:bg-white/5 border border-transparent hover:border-accent-primary/10 transition-all">
                          <CheckCircle2 size={18} className="text-accent-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Side (Right Side - Desktop only) */}
              <div className="hidden md:flex md:w-1/2 justify-center md:pl-16">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer w-full max-w-md"
                >
                  <div className="absolute inset-0 bg-accent-primary/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <img 
                      src={phase.image} 
                      alt={phase.title}
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <p className="text-white text-sm font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {phase.title} Visualization
                      </p>
                    </div>
                  </div>
                  {/* Decorative Number */}
                  <div className="absolute -bottom-10 -right-6 text-8xl font-black opacity-10 dark:opacity-20 select-none font-['Outfit'] pointer-events-none">
                    0{index + 1}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
