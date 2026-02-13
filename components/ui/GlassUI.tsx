import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glow = false }) => {
  return (
    <div
      className={`
        glass-panel rounded-2xl p-6 transition-all duration-300
        ${glow ? 'shadow-[0_0_30px_-5px_rgba(237,38,67,0.3)] border-white/20' : 'hover:border-white/30 border-white/10 shadow-lg'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        group relative px-8 py-4 bg-[#ed2643] text-white font-medium tracking-wide uppercase text-sm rounded-lg overflow-hidden transition-all duration-300
        hover:shadow-[0_0_20px_rgba(237,38,67,0.6)] hover:scale-[1.02] active:scale-95
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    </button>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; light?: boolean }> = ({ children, subtitle, light = true }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-light mb-4 tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg font-light ${light ? 'text-white/70' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);