"use client";

import { motion } from 'framer-motion';
import { MapPin, Calendar, User, Phone } from 'lucide-react';
import { GlassCard, PrimaryButton } from './ui/GlassUI';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Airplane crossing clouds"
          className="w-full h-full object-cover"
        />
        {/* Parallax/Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-white/5" />
      </div>

      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-20">
        
        {/* Left Copy */}
        <div className="text-white space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            <span className="text-sm font-medium tracking-wider">Brasil 🇧🇷 | New Zealand 🇳🇿</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extralight tracking-tight leading-[1.1]"
          >
            Viver começa <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              quando você decide ir.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-light text-white/80 max-w-lg"
          >
            Na Vipsul Viagens, transformamos destinos em experiências reais. Unidades no Brasil e na New Zealand.
          </motion.p>
        </div>

        {/* Right Glass Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <GlassCard glow className="p-8 md:p-10">
            <div className="mb-6">
              <h3 className="text-2xl font-light text-white mb-2">Planeje sua próxima experiência</h3>
              <p className="text-white/60 text-sm">Preencha para falar com um especialista.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-white/50 group-focus-within:text-[#ed2643] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Nome completo"
                  className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 text-white placeholder-white/40 focus:outline-none focus:border-[#ed2643]/50 focus:bg-white/10 transition-all"
                />
              </div>

              <div className="relative group">
                <Phone className="absolute left-3 top-3.5 w-5 h-5 text-white/50 group-focus-within:text-[#ed2643] transition-colors" />
                <input 
                  type="tel" 
                  placeholder="Telefone / WhatsApp"
                  className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 text-white placeholder-white/40 focus:outline-none focus:border-[#ed2643]/50 focus:bg-white/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                   <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-white/50 group-focus-within:text-[#ed2643] transition-colors" />
                   <input 
                    type="text" 
                    placeholder="Destino"
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 text-white placeholder-white/40 focus:outline-none focus:border-[#ed2643]/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="relative group">
                   <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-white/50 group-focus-within:text-[#ed2643] transition-colors" />
                   <input 
                    type="text" 
                    placeholder="Data prevista"
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => e.target.type = 'text'}
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 text-white placeholder-white/40 focus:outline-none focus:border-[#ed2643]/50 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <PrimaryButton className="w-full mt-4 bg-[#ed2643] hover:bg-[#d61e38]">
                Quero planejar minha viagem
              </PrimaryButton>

              <p className="text-center text-xs text-white/40 font-light mt-4">
                Um especialista da Vipsul entrará em contato rapidamente.
              </p>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
