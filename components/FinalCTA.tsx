import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, PrimaryButton } from './ui/GlassUI';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2574&auto=format&fit=crop"
          alt="Endless road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <GlassCard glow className="p-8 md:p-16 text-center backdrop-blur-2xl bg-slate-900/40">
            <h2 className="text-4xl md:text-6xl font-extralight text-white mb-4">
              O mundo está <br />
              <span className="font-medium text-[#ed2643]">esperando você.</span>
            </h2>
            <p className="text-xl text-white/80 font-light mb-12">
              Permita-se viver experiências que transformam a percepção de viver.
            </p>

            <form className="grid gap-4 md:grid-cols-2 text-left" onSubmit={(e) => e.preventDefault()}>
               <input 
                  type="text" 
                  placeholder="Nome completo"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-4 pl-6 text-white placeholder-white/50 focus:outline-none focus:border-[#ed2643]"
                />
               <input 
                  type="tel" 
                  placeholder="Seu WhatsApp"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-4 pl-6 text-white placeholder-white/50 focus:outline-none focus:border-[#ed2643]"
                />
               <input 
                  type="text" 
                  placeholder="Destino dos sonhos"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-4 pl-6 text-white placeholder-white/50 focus:outline-none focus:border-[#ed2643]"
                />
               <input 
                  type="date" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-4 pl-6 text-white placeholder-white/50 focus:outline-none focus:border-[#ed2643]"
                />
                
                <div className="md:col-span-2 mt-4">
                   <PrimaryButton className="w-full text-lg py-5 bg-[#ed2643] hover:bg-[#d61e38]">
                      Começar Minha Experiência
                   </PrimaryButton>
                </div>
            </form>
            
            <p className="mt-6 text-white/40 text-sm">Atendimento rápido e personalizado Vipsul Viagens.</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;