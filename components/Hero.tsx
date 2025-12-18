import React from 'react';
import { ShieldCheck, Zap, Clock, ArrowRight } from 'lucide-react';
import { WebGLShader } from './ui/webgl-shader';
import { GlowingEffect } from './ui/glowing-effect';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";

  return (
    <section 
      className="fixed inset-0 z-0 h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-background pt-20 pb-12 md:pt-0 md:pb-0"
    >
      {/* Background Effect - WebGL Shader */}
      <WebGLShader className="opacity-80" />

      {/* Static Overlay Layers (Gradient/Glow) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/10 to-[#030303] z-1 pointer-events-none"></div>
      
      {/* Top ambient glow - Adjusted for new background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-[600px] bg-hero-glow pointer-events-none z-1"
      ></motion.div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        {/* Top Badges */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors cursor-default">
            <Clock size={12} className="text-white" /> Rápido
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors cursor-default">
            <ShieldCheck size={12} className="text-white" /> Seguro
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors cursor-default">
            <Zap size={12} className="text-white" /> Profissional
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-heading font-light tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl"
        >
          Serviços elétricos com segurança, rapidez e
          <span className="block font-normal text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-500">
            profissionalismo de verdade.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          Diagnóstico claro via WhatsApp ou visita, execução profissional, sem risco, gambiarras ou dor de cabeça.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
        >
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-white/20 text-sm w-full sm:w-auto hover:scale-105 active:scale-95 duration-200"
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
            <span className="relative z-10 flex items-center justify-center gap-2">
              Fale com Especialista no WhatsApp <ArrowRight size={18} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};