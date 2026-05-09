import React from 'react'
import { Terminal } from 'lucide-react'

const DevJson = () => {
  const data = [
    { key: '"name"', value: '"Arun R"', color: 'text-cyan-400', shadow: 'shadow-cyan-500/50' },
    { key: '"role"', value: '"Product Engineer"', color: 'text-emerald-400', shadow: 'shadow-emerald-500/50' },
    { key: '"passion"', value: '"Building Systems"', color: 'text-fuchsia-400', shadow: 'shadow-fuchsia-500/50' },
    { key: '"code"', value: '"Scalable & Clean"', color: 'text-amber-400', shadow: 'shadow-amber-500/50' },
  ]

  return (
    <div 
      className="relative block w-full sm:min-w-[280px] max-w-[320px] overflow-hidden group pointer-events-auto scale-90 sm:scale-100 origin-bottom-left p-4 sm:p-5"
    >

      
      <div className="font-mono text-sm leading-relaxed relative z-20">
        <span className="text-slate-300 drop-shadow-md">{'{'}</span>
        <div className="pl-5 ml-1.5 my-1">
          {data.map((item, index) => (
            <div 
              key={index}
              className="py-0.5 group/line"
            >
              <span className="text-indigo-300/90 group-hover/line:text-indigo-200 transition-colors drop-shadow-md">{item.key}</span>
              <span className="text-slate-300 mx-1 drop-shadow-md">:</span>
              <span className={`${item.color} font-medium drop-shadow-md transition-all`}>
                {item.value}
              </span>
              {index < data.length - 1 && <span className="text-slate-300 drop-shadow-md">,</span>}
            </div>
          ))}
        </div>
        <span className="text-slate-300 drop-shadow-md">{ '}' }</span>
      </div>


    </div>
  )
}

export default DevJson
