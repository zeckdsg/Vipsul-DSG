import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, PrimaryButton, SectionTitle } from './ui/GlassUI';
import { CreditCard, CheckCircle2, ShieldCheck, Map, Plane, Clock, Star } from 'lucide-react';

/* --- Payment Section --- */
export const PaymentSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ed2643]/5 blur-[120px]" />
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden h-[500px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2672&auto=format&fit=crop" 
            alt="Planning travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/20" />
        </motion.div>

        {/* Content */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <GlassCard glow className="p-10">
            <h2 className="text-3xl font-light text-white mb-6">Viajar ficou mais simples.</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Até 10x no cartão de crédito",
                "Boleto parcelado sob medida",
                "Planejamento estratégico personalizado",
                "Atendimento humano consultivo"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#ed2643]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/50 mb-8 font-light italic">
              Facilitamos o pagamento para que você viva a experiência no momento certo.
            </p>
            <PrimaryButton className="w-full sm:w-auto">Falar com Especialista</PrimaryButton>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

/* --- Social Proof --- */
export const SocialProof: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 relative bg-cover bg-fixed bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop')` }}>
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle="Histórias reais de quem escolheu viver o extraordinário.">
          Quem viaja com a Vipsul vive diferente
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "Foi a melhor experiência da minha vida. A Vipsul cuidou de cada detalhe.", author: "Mariana S." },
            { quote: "Atendimento impecável do início ao fim. Me senti seguro na NZ.", author: "Roberto A." },
            { quote: "Viajar nunca foi tão simples e seguro. Recomendo de olhos fechados.", author: "Carla & Pedro" },
          ].map((testimonial, i) => (
            <GlassCard key={i} className="flex flex-col justify-between">
              <div className="mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-[#ed2643] fill-current inline-block mr-1" />)}
              </div>
              <p className="text-lg text-white/90 font-light italic mb-6">"{testimonial.quote}"</p>
              <div className="text-sm text-white/50 font-medium uppercase tracking-wider">{testimonial.author}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Credibility --- */
export const Credibility: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
         <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="order-2 lg:order-1"
        >
          <GlassCard className="p-10 border-[#ed2643]/20">
            <ShieldCheck className="w-12 h-12 text-[#ed2643] mb-6" />
            <h2 className="text-3xl font-light text-white mb-6">Segurança e confiança internacional.</h2>
            <p className="text-white/70 mb-8 font-light leading-relaxed">
              Com atuação no Brasil e na New Zealand, a Vipsul Viagens conecta você ao mundo com organização, planejamento e responsabilidade.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                 <h4 className="text-white font-medium mb-1">Brasil 🇧🇷</h4>
                 <p className="text-white/50 text-sm">Suporte local e atendimento.</p>
               </div>
               <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                 <h4 className="text-white font-medium mb-1">New Zealand 🇳🇿</h4>
                 <p className="text-white/50 text-sm">Base operacional própria.</p>
               </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden h-[500px] order-1 lg:order-2"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
            alt="Vipsul Team" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

/* --- How It Works --- */
export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2670&auto=format&fit=crop"
          alt="Planning Desk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle="Seu sonho, nosso planejamento.">Simples. Rápido. Seguro.</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Map, title: "1. Destino & Data", desc: "Você nos conta seu destino e sua data prevista." },
            { icon: Plane, title: "2. Planejamento", desc: "Criamos um roteiro estratégico sob medida para você." },
            { icon: ShieldCheck, title: "3. Experiência", desc: "Você vive a viagem com nosso suporte completo." },
          ].map((step, i) => (
             <GlassCard key={i} className="text-center p-8 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10">
                 <step.icon className="w-8 h-8 text-[#ed2643]" />
               </div>
               <h3 className="text-xl text-white font-medium mb-3">{step.title}</h3>
               <p className="text-white/60 font-light">{step.desc}</p>
             </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Urgency --- */
export const Urgency: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <img 
             src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2670&auto=format&fit=crop"
             alt="Horizon"
             className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
          
          <div className="relative z-10 p-12 md:p-20 text-center max-w-4xl mx-auto">
             <Clock className="w-12 h-12 text-[#ed2643] mx-auto mb-6" />
             <h2 className="text-3xl md:text-5xl font-light text-white mb-6">As melhores tarifas são limitadas.</h2>
             <p className="text-xl text-white/70 font-light mb-8">
               Planejar com antecedência garante melhores condições, voos mais confortáveis e hotéis exclusivos. Não deixe para depois.
             </p>
             <PrimaryButton className="px-10 py-5 text-lg">Começar Agora</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}