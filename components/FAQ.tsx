import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

const faqs = [
  { q: "É caro?", a: "Trabalhamos com preços justos e orçamentos transparentes. Você paga pela qualidade e segurança de um serviço certificado." },
  { q: "Tem garantia?", a: "Sim, todos os nossos serviços contam com garantia técnica integral para sua total tranquilidade." },
  { q: "Quanto tempo demora?", a: "Realizamos o diagnóstico via WhatsApp rapidamente e agendamos a execução conforme sua urgência." },
  { q: "Vocês atendem quais regiões?", a: "Atendemos Porto Alegre, Região Metropolitana e Caxias do Sul." },
  { q: "Como funciona o pagamento?", a: "Aceitamos cartões de crédito, débito e PIX para sua comodidade." },
  { q: "Instalação e manutenção incluem material?", a: "Pode ser incluso no orçamento ou fornecido pelo cliente, conforme a preferência e necessidade técnica." },
  { q: "Vocês atendem emergências?", a: "Sim, possuímos equipe pronta para atendimentos emergenciais focados em restabelecer sua segurança elétrica." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 max-w-3xl mx-auto px-6 bg-white">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-heading font-light text-[#0A0A0A] text-center mb-12">Perguntas Frequentes</h2>
      </ScrollReveal>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="border border-black/5 rounded-2xl bg-gray-50 overflow-hidden transition-all duration-300"
          >
            <button 
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-semibold text-[#0A0A0A] text-sm md:text-base">{faq.q}</span>
              {openIndex === idx ? <Minus size={18} className="text-lga" /> : <Plus size={18} className="text-gray-400" />}
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
                  <div className="px-6 pb-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-black/5 pt-4 font-medium">
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