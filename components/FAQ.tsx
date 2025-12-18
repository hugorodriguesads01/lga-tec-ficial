import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

const faqs = [
  { q: "É caro?", a: "Não. O orçamento é claro e direto, e você só paga pelo necessário." },
  { q: "Tem garantia?", a: "Sim, entre 30 e 90 dias conforme o tipo de serviço." },
  { q: "Quanto tempo demora?", a: "Diagnóstico rápido e execução no mesmo dia, quando possível." },
  { q: "Vocês atendem quais regiões?", a: "Rio Grande do Sul e região." },
  { q: "Como funciona o pagamento?", a: "Acordado após o diagnóstico, sem surpresas." },
  { q: "Instalação e manutenção incluem material?", a: "Sim, materiais adequados ao padrão elétrico." },
  { q: "Vocês atendem emergências?", a: "Sim, conforme disponibilidade." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-sans font-light text-white text-center mb-12">Perguntas Frequentes</h2>
      </ScrollReveal>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="border border-white/10 rounded-lg bg-white/5 overflow-hidden"
          >
            <button 
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-sans font-medium text-white">{faq.q}</span>
              {openIndex === idx ? <Minus size={20} className="text-gray-400" /> : <Plus size={20} className="text-gray-400" />}
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};