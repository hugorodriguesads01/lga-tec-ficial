import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';
import { motion } from 'framer-motion';

export const BottomCTA: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0">
          <img 
              src="https://i.imgur.com/ZLOrONS.webp" 
              alt="Background CTA" 
              className="w-full h-full object-cover opacity-90 grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/05 via-transparent to-white/05"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Glass Effect Transparente: bg-white/10 e borda mais sutil
          className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden text-center py-12 px-6 md:py-20 md:px-6 border border-white/20 shadow-2xl bg-white/10 backdrop-blur-2xl"
        >
          <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.01}
            borderWidth={1}
          />
          
          <div className="relative z-10 max-w-xl mx-auto">
            <span className="text-[10px] font-bold text-lga uppercase tracking-[0.2em] mb-4 block drop-shadow-sm">Fale Conosco</span>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-heading font-light text-black mb-4 md:mb-6 leading-tight"
            >
              Explique o que precisa
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-900 mb-8 md:mb-10 text-sm md:text-lg font-medium leading-relaxed"
            >
              Receba o diagnóstico e tenha o problema resolvido com segurança e agilidade.
            </motion.p>
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-lga text-white font-semibold px-8 py-4 md:px-12 md:py-4 rounded-xl transition-all shadow-2xl hover:bg-[#2e3175] inline-block cursor-pointer text-sm md:text-base w-full md:w-auto"
            >
              <span className="relative z-10">
                Fale com Especialista no WhatsApp
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};