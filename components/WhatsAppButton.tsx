import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5511999999999" // Exemplo
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 duration-[2000ms]" />
      
      {/* Main Button */}
      <div className="relative w-16 h-16 bg-gradient-to-tr from-[#25D366] to-[#4ade80] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] border border-white/20 transition-transform duration-300 group-hover:scale-110 group-active:scale-95 backdrop-blur-sm">
         <MessageCircle className="w-8 h-8 text-white fill-white" strokeWidth={1.5} />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-xl whitespace-nowrap opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg">
        Fale com um especialista
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/10 border-r border-t border-white/20 rotate-45 transform" />
      </div>
    </motion.a>
  );
};