import React from 'react';
import { ShieldCheck, Zap, Clock, ArrowRight } from 'lucide-react';
import { WebGLShader } from './ui/webgl-shader';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";

  return (
    <section 
      className="fixed inset-0 z-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-white pt-0 pb-0"
    >
      {/* 
         Shader com mix-blend-multiply e Opacidade total.
      */}
      <WebGLShader className="mix-blend-multiply" />

      {/* Gradiente sutil apenas para dar profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent z-1 pointer-events-none"></div>
      
      {/* Glow superior mantido */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-[500px] bg-hero-glow pointer-events-none z-1"
      ></motion.div>

      {/* 
         Correção Mobile: 
         - mt-0: remove o espaçamento forçado no topo.
         - pb-24: levanta o conteúdo visualmente para não ficar "fundo demais" ou cobrindo a onda.
         - justify-center: garante alinhamento vertical flexbox.
      */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center justify-center mt-0 pb-24 md:pb-0">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200/30 text-[10px] font-bold text-gray-700 shadow-sm transition-colors cursor-default">
            <Clock size={12} className="text-lga" /> Rápido
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200/30 text-[10px] font-bold text-gray-700 shadow-sm transition-colors cursor-default">
            <ShieldCheck size={12} className="text-lga" /> Seguro
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200/30 text-[10px] font-bold text-gray-700 shadow-sm transition-colors cursor-default">
            <Zap size={12} className="text-lga" /> Profissional
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-7xl font-heading font-light tracking-tight text-black mb-6 leading-[1.15] md:leading-[1.1]"
        >
          Serviços elétricos com segurança, rapidez e{' '}
          <span className="inline-block sm:block font-semibold text-transparent bg-clip-text bg-gradient-to-b from-lga to-black">
            profissionalismo de verdade.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-600 text-sm md:text-lg mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed font-medium px-2"
        >
          Diagnóstico claro via WhatsApp ou visita, execução profissional, sem risco, gambiarras ou dor de cabeça.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-lga text-white font-medium px-8 py-4 rounded-xl transition-all shadow-xl hover:bg-[#2e3175] active:scale-95 duration-200 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-base">
              Fale com Especialista no WhatsApp <ArrowRight size={18} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};