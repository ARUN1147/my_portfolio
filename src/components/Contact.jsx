import React from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div>
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Ready to build something amazing? Feel free to reach out for collaborations or just a friendly chat about systems and products.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:arun1147r@gmail.com" className="flex items-center gap-4 p-4 glass-card hover:border-accent-primary transition-all group">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center text-accent-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <div className="font-bold">arun1147r@gmail.com</div>
              </div>
            </a>
            
            <div className="flex gap-4">
              <a href="#" className="flex-1 flex items-center gap-4 p-4 glass-card hover:border-accent-primary transition-all group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-accent-primary transition-colors">
                  <Github size={24} />
                </div>
                <span className="font-bold">GitHub</span>
              </a>
              <a href="#" className="flex-1 flex items-center gap-4 p-4 glass-card hover:border-accent-primary transition-all group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-accent-primary transition-colors">
                  <Linkedin size={24} />
                </div>
                <span className="font-bold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 space-y-6"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-500">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-accent-primary outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-500">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-accent-primary outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-500">Message</label>
            <textarea 
              rows="4"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-accent-primary outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button className="w-full btn-primary flex items-center justify-center gap-2">
            Start Conversation <Send size={20} />
          </button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
