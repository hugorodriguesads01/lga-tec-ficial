import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';
import { motion } from 'framer-motion';

export const BottomCTA: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image Layer - Direct WebP Link */}
      <div className="absolute inset-0 z-0">
          <img 
              src="https://i.imgur.com/ZLOrONS.webp" 
              alt="Background CTA" 
              className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient Shadows for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden text-center py-20 px-6 border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl"
        >
          
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
          />
          
          {/* Noise Texture for Glass feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          
          {/* Subtle internal glows */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-sans font-light text-white mb-6 drop-shadow-lg"
            >
              Explique o que precisa
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-200 mb-10 max-w-lg mx-auto text-sm font-medium leading-relaxed"
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
              className="group relative overflow-hidden bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-white/20 text-sm inline-block cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <GlowingEffect
                    spread={20}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                    variant="white"
                  />
              </div>
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