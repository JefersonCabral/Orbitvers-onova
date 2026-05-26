import React from 'react';
import { User, Settings } from 'lucide-react';

const manualSlots = [
  { time: 'manhã', status: 'postando', active: true },
  { time: 'tarde', status: 'postando', active: true },
  { time: 'noite', status: 'cansado', active: false },
  { time: 'madrugada', status: 'dormindo', active: false },
  { time: 'final de semana', status: 'offline', active: false },
];

const systemSlots = [
  { time: '00h', delay: '0s' },
  { time: '06h', delay: '0.3s' },
  { time: '12h', delay: '0.6s' },
  { time: '18h', delay: '0.9s' },
  { time: '24h', delay: '1.2s' },
];

export default function BreakBlock() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">

          {/* System Side */}
          <div className="scroll-reveal-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-white mb-6 sm:mb-8 text-center md:text-left text-balance flex items-end justify-center md:justify-start md:min-h-[4.5rem] lg:min-h-[7rem]">
              <span>Porque quem escala <span className="gradient-text-static uppercase italic block">OPERA SISTEMA</span></span>
            </h2>

            <div className="flex-1 border-gradient bg-indigo-500/[0.07] ring-1 ring-indigo-500/30 rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col items-center gap-5 sm:gap-6 shadow-[0_0_60px_rgba(79,70,229,0.15)] group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-500/20 ring-1 ring-indigo-500/40 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/30 transition-colors">
                <Settings
                  className="text-indigo-400 animate-spin [animation-duration:10s] w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-lg sm:text-xl font-bold mb-1">Orbit System</p>
                <p className="text-indigo-400 text-[10px] uppercase tracking-[0.2em] font-bold">Roda 24h por dia</p>
              </div>
              <div className="w-full space-y-2.5 mt-auto">
                {systemSlots.map((slot, i) => (
                  <div
                    key={i}
                    className="h-10 rounded-xl bg-indigo-500/[0.12] border border-indigo-500/30 text-xs flex items-center justify-between gap-2 px-3 sm:px-4 transition-all hover:bg-indigo-500/20"
                  >
                    <span className="text-indigo-200 font-mono font-bold tracking-tight truncate">{slot.time}</span>
                    <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                      <span
                        className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] animate-pulse"
                        style={{ animationDelay: slot.delay }}
                      />
                      <span className="text-emerald-400 font-black uppercase text-[10px] tracking-widest">AUTOMÁTICO</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Manual Side */}
          <div className="scroll-reveal-right flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-neutral-600 line-through decoration-red-500/40 mb-6 sm:mb-8 text-center md:text-left text-balance flex items-end justify-center md:justify-start md:min-h-[4.5rem] lg:min-h-[7rem]">
              Enquanto a maioria está no manual
            </h2>

            <div className="flex-1 border-gradient bg-white/[0.03] ring-1 ring-red-500/20 rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col items-center gap-5 sm:gap-6 opacity-80 hover:opacity-100 transition-all duration-500 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-500/10 ring-1 ring-red-500/30 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                <User className="text-red-400 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-center">
                <p className="text-white text-lg sm:text-xl font-bold mb-1">Operação Manual</p>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-bold">Depende de você</p>
              </div>
              <div className="w-full space-y-2.5 mt-auto">
                {manualSlots.map((slot, i) => (
                  <div
                    key={i}
                    className={`h-10 rounded-xl text-xs flex items-center justify-between gap-2 px-3 sm:px-4 border ${
                      slot.active
                        ? 'bg-white/[0.05] border-white/[0.1] text-neutral-300'
                        : 'bg-transparent border-white/[0.03] text-neutral-700'
                    }`}
                  >
                    <span className="font-mono font-bold tracking-tight truncate">{slot.time}</span>
                    <span className="font-bold uppercase text-[10px] tracking-widest shrink-0">{slot.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
