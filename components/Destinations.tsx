"use client";

import { motion } from 'framer-motion';
import { GlassCard, SectionTitle } from './ui/GlassUI';
import { ArrowUpRight } from 'lucide-react';

const destinations = [
  {
    title: 'Brasil',
    desc: 'Praias paradisíacas, cultura vibrante e experiências inesquecíveis.',
    img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2670&auto=format&fit=crop'
  },
  {
    title: 'New Zealand',
    desc: 'Natureza intocada, paisagens cinematográficas e roteiros exclusivos.',
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop'
  },
  {
    title: 'Europa',
    desc: 'História, sofisticação e experiências personalizadas.',
    img: 'https://images.unsplash.com/photo-1499856871940-b09fe79261ca?q=80&w=2670&auto=format&fit=crop'
  },
  {
    title: 'Sob Medida',
    desc: 'Roteiros criados exclusivamente para você viver o extraordinário.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop'
  }
];

const Destinations = () => {
  return (
    <section id="destinos" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Um mundo de possibilidades espera por você.">
          Destinos em Destaque
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={dest.img} 
                alt={dest.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-x-0 bottom-0 p-4">
                <GlassCard className="bg-white/5 border-white/10 backdrop-blur-xl group-hover:border-[#ed2643]/30 transition-colors">
                  <h3 className="text-xl font-medium text-white mb-2 flex justify-between items-center">
                    {dest.title}
                    <ArrowUpRight className="text-[#ed2643] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-white/70 text-sm font-light mb-4 leading-relaxed">
                    {dest.desc}
                  </p>
                  <span className="text-xs uppercase tracking-widest text-white/90 border-b border-[#ed2643] pb-1">
                    Quero esse destino
                  </span>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
