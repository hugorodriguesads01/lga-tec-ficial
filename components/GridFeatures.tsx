import React from 'react';
import { ShieldCheck, Zap, TrendingDown, Home, UserCheck, CheckCircle } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { motion, Variants } from 'framer-motion';

export const GridFeatures: React.FC = () => {
  const benefits = [
    { 
      icon: <ShieldCheck className="text-white" size={24} />, 
      title: "Mais segurança", 
      desc: "Mais segurança no ambiente de trabalho ou para você e sua família." 
    },
    { 
      icon: <Zap className="text-white" size={24} />, 
      title: "Sem riscos", 
      desc: "Evita curtos, choques e riscos elétricos graves." 
    },
    { 
      icon: <TrendingDown className="text-white" size={24} />, 
      title: "Economia", 
      desc: "Reduz gastos com retrabalho e desperdício de material." 
    },
    { 
      icon: <Home className="text-white" size={24} />, 
      title: "Valorização", 
      desc: "Valorização do imóvel com serviço profissional e bem acabado." 
    },
    { 
      icon: <UserCheck className="text-white" size={24} />, 
      title: "Qualidade", 
      desc: "Tranquilidade ao contratar profissionais qualificados." 
    },
    { 
      icon: <CheckCircle className="text-white" size={24} />, 
      title: "Eficiência", 
      desc: "Execução correta na primeira vez, sem enrolação." 
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Background Image Layer - Fixed Mobile Zoom Issue */}
      <div className="absolute inset-x-0 top-0 h-[600px] md:h-full z-0 overflow-hidden">
         <img 
            src="https://i.imgur.com/jirpXOy.webp" 
            alt="Eletricista Profissional no Painel" 
            className="w-full h-full object-cover object-center opacity-60"
         />
         {/* 
            Gradient overlay:
            On mobile, it fades to black at the bottom of the 600px height.
            On desktop, it covers the whole height smoothly.
         */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
           <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block"
           >
             Benefícios
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-3xl md:text-5xl font-sans font-light text-white max-w-2xl mx-auto drop-shadow-md"
           >
             Por que escolher a LGA?
           </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariant}
              className="group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-black/60"
            >
              
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />

              {/* Subtle grid background inside the card */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 rounded-2xl pointer-events-none"></div>
              
              <div className="relative z-10 p-8">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors shadow-inner group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-sans font-light text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};