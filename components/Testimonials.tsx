import React from 'react';
import { Quote } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

const testimonials = [
  {
    text: "Serviço impecável. O eletricista chegou no horário, explicou o problema e resolveu tudo no mesmo dia. Recomendo muito!",
    author: "Ricardo Silva",
    role: "Moinhos de Vento, Porto Alegre",
    initial: "R"
  },
  {
    text: "Estava com medo de contratar alguém sem referência, mas a LGA foi super profissional. Orçamento claro e sem surpresas.",
    author: "Fernanda Costa",
    role: "Petrópolis, Porto Alegre",
    initial: "F"
  },
  {
    text: "Instalação completa do meu apartamento novo feita com perfeição. Acabamento de primeira linha e muita segurança.",
    author: "Carlos Mendes",
    role: "Exposição, Caxias do Sul",
    initial: "C"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      {/* Background decorativo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(60,64,148,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal direction="down">
            <div className="flex justify-center mb-4">
              <Quote size={28} className="text-lga opacity-30" />
            </div>
            <span className="text-xs font-bold text-lga uppercase tracking-widest mb-2 block">Prova Social</span>
            <h2 className="text-4xl font-heading font-light text-[#0A0A0A]">
              O que nossos clientes dizem
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // Glass Effect Transparente: bg-white/10 ao invés de 60
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] shadow-sm transition-all duration-300 p-8 group relative"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-500 text-sm drop-shadow-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-900 text-sm md:text-base font-medium leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lga to-[#2a2d66] flex items-center justify-center text-white font-bold shadow-lg shadow-lga/50">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] text-sm font-bold">{t.author}</h4>
                    <span className="text-xs text-gray-600 font-medium">{t.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};