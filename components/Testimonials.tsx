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
    <section className="py-16 bg-[#030303] relative overflow-hidden">
      {/* Background removed as requested */}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal direction="down">
            <div className="flex justify-center mb-4">
              <Quote size={24} className="text-gray-600" />
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">Prova Social</span>
            <h2 className="text-4xl font-sans font-light text-white">
              O que nossos clientes dizem
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all hover:-translate-y-2 relative group"
            >
              
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              
              <div className="relative z-10 p-8">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => (
                      <motion.span 
                        key={i} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="text-white text-xs"
                      >★</motion.span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm font-sans font-light leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/5 flex items-center justify-center text-white font-medium shadow-inner">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">{t.author}</h4>
                    <span className="text-xs text-gray-500">{t.role}</span>
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