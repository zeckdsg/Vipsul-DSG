"use client";

import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t-4 border-[#ed2643]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Vipsul Viagens</h3>
          <p className="text-slate-500 font-light text-sm max-w-md">
            Promovemos experiências que transformam a percepção de viver. 
            Especialistas em conectar o Brasil e a New Zealand ao mundo.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-slate-600 text-sm font-medium border px-3 py-1 rounded-full">
               <span>Brasil</span> 🇧🇷
             </div>
             <div className="flex items-center gap-2 text-slate-600 text-sm font-medium border px-3 py-1 rounded-full">
               <span>New Zealand</span> 🇳🇿
             </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-[#ed2643] hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-[#ed2643] hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Vipsul Viagens. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
