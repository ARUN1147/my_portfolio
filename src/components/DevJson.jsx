import React from 'react'
import { Terminal } from 'lucide-react'

const DevJson = () => {
  const data = [
    { key: '"name"', value: '"Arun R"', color: 'text-cyan-600 dark:text-cyan-400', shadow: 'shadow-cyan-500/50' },
    { key: '"role"', value: '"Product Engineer"', color: 'text-emerald-600 dark:text-emerald-400', shadow: 'shadow-emerald-500/50' },
    { key: '"passion"', value: '"Building Systems"', color: 'text-fuchsia-600 dark:text-fuchsia-400', shadow: 'shadow-fuchsia-500/50' },
    { key: '"code"', value: '"Scalable & Clean"', color: 'text-amber-600 dark:text-amber-400', shadow: 'shadow-amber-500/50' },
  ]

  return (
    <div 
      className="absolute -bottom-10 -right-6 md:right-0 glass-card p-6 hidden sm:block min-w-[320px] overflow-hidden border-indigo-500/30 group"
      style={{
        boxShadow: '0 0 40px rgba(99, 102, 241, 0.15), inset 0 0 20px rgba(99, 102, 241, 0.05)'
      }}
    >
      <div className="flex items-center justify-between mb-4 relative z-20">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-indigo-500/20">
            <Terminal size={14} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-600 dark:text-slate-500 uppercase">System Identity</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40 border border-rose-500/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/20"></div>
        </div>
      </div>
      
      <div className="font-mono text-sm leading-relaxed relative z-20">
        <span className="text-slate-600 dark:text-slate-500">{'{'}</span>
        <div className="pl-5 border-l border-slate-300 dark:border-slate-800/50 ml-1.5 my-1">
          {data.map((item, index) => (
            <div 
              key={index}
              className="py-0.5 group/line"
            >
              <span className="text-indigo-600/80 dark:text-indigo-300/80 group-hover/line:text-indigo-600 dark:group-hover/line:text-indigo-300 transition-colors">{item.key}</span>
              <span className="text-slate-700 dark:text-slate-600 mx-1">:</span>
              <span className={`${item.color} font-medium group-hover/line:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all`}>
                {item.value}
              </span>
              {index < data.length - 1 && <span className="text-slate-700 dark:text-slate-600">,</span>}
            </div>
          ))}
        </div>
        <span className="text-slate-600 dark:text-slate-500">{ '}' }</span>
      </div>

      {/* Background glow effects */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-600/10 blur-[60px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/10 blur-[60px] rounded-full pointer-events-none"></div>
    </div>
  )
}

export default DevJson
