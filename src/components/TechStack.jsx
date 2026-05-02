import React from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Server, 
  Database as DatabaseIcon, 
  Zap, 
  ShieldCheck, 
  Layout,
  Code2,
  Cpu
} from 'lucide-react'

const techStack = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', slug: 'react', icon: null },
      { name: 'Next.js', slug: 'nextdotjs', icon: null },
      { name: 'TypeScript', slug: 'typescript', icon: null },
      { name: 'Tailwind CSS', slug: 'tailwindcss', icon: null },
      { name: 'Vite', slug: 'vite', icon: null },
      { name: 'PWA', slug: 'pwa', icon: null },
      { name: 'HTML5', slug: 'html5', icon: null },
      { name: 'CSS3', slug: 'css3', icon: null },
      { name: 'JavaScript', slug: 'javascript', icon: null },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', slug: 'nodedotjs', icon: null },
      { name: 'Express.js', slug: 'express', icon: null },
      { name: 'REST APIs', slug: null, icon: Server },
      { name: 'Java', slug: 'java', icon: null },
      { name: 'Spring Boot', slug: 'springboot', icon: null },
      { name: 'JWT Auth', slug: 'jsonwebtokens', icon: null },
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', slug: 'mongodb', icon: null },
      { name: 'MySQL', slug: 'mysql', icon: null },
      { name: 'Mongoose', slug: 'mongoose', icon: null },
      { name: 'Data Modeling', slug: null, icon: DatabaseIcon },
      { name: 'Query Optimization', slug: null, icon: Zap },
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'AWS', slug: 'amazonaws', icon: null },
      { name: 'Vercel', slug: 'vercel', icon: null },
      { name: 'Netlify', slug: 'netlify', icon: null },
      { name: 'Git', slug: 'git', icon: null },
      { name: 'GitHub', slug: 'github', icon: null },
      { name: 'Postman', slug: 'postman', icon: null },
      { name: 'Docker', slug: 'docker', icon: null },
    ]
  }
]

const TechStack = () => {
  return (
    <div>
      <h2 className="section-title">Technical Expertise</h2>
      <div className="space-y-16">
        {techStack.map((group, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-accent-primary rounded-full"></span>
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {group.skills.map((skill, sIndex) => (
                <motion.div
                  key={sIndex}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIndex * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center gap-3 group transition-all cursor-default"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800/30 group-hover:bg-accent-primary/10 transition-all duration-500">
                    {skill.slug ? (
                      <img 
                        src={`https://cdn.simpleicons.org/${skill.slug}`} 
                        alt={skill.name}
                        className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <skill.icon size={32} className="text-slate-400 group-hover:text-accent-primary transition-colors" />
                    )}
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 group-hover:text-accent-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack


