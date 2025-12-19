import React from 'react';
import { ShieldCheck, Zap, TrendingDown, Home, UserCheck, CheckCircle } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { motion, Variants } from 'framer-motion';

export const GridFeatures: React.FC = () => {
  const benefits = [
    { 
      icon: <ShieldCheck className="text-lga" size={24} />, 
      title: "Mais segurança", 
      desc: "Mais segurança no ambiente de trabalho ou para você e sua família." 
    },
    { 
      icon: <Zap className="text-lga" size={24} />, 
      title: "Sem riscos", 
      desc: "Evita curtos, choques e riscos elétricos graves." 
    },
    { 
      icon: <TrendingDown className="text-lga" size={24} />, 
      title: "Economia", 
      desc: "Reduz gastos com retrabalho e desperdício de material." 
    },
    { 
      icon: <Home className="text-lga" size={24} />, 
      title: "Valorização", 
      desc: "Valorização do imóvel com serviço profissional e bem acabado." 
    },
    { 
      icon: <UserCheck className="text-lga" size={24} />, 
      title: "Qualidade", 
      desc: "Tranquilidade ao contratar profissionais qualificados." 
    },
    { 
      icon: <CheckCircle className="text-lga" size={24} />, 
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <section id="beneficios" className="py-20 relative overflow-hidden bg-transparent scroll-mt-16">
      <div className="absolute inset-x-0 top-0 h-[500px] md:h-full z-0 overflow-hidden">
         <img 
            src="https://i.imgur.com/jirpXOy.webp" 
            alt="Eletricista Profissional no Painel" 
            className="w-full h-full object-cover object-center opacity-90 grayscale-[10%]"
         />
         {/* Gradiente sutil para misturar a imagem com o fundo, mas mantendo a imagem visível */}
         <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/05"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[10px] font-bold text-lga uppercase tracking-[0.25em] mb-2 block"
           >
             Benefícios
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-heading font-light text-black max-w-2xl mx-auto leading-tight"
           >
             Por que escolher a LGA?
           </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariant}
              // Efeito Glass Transparente: bg-white/10 (ao invés de 60), mantendo blur para legibilidade
              className="group relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-white/20 p-8 overflow-hidden"
            >
              {/* Glowing Effect para interação do mouse */}
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-lga/10 to-white/50 border border-white/40 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-black mb-3 group-hover:text-lga transition-colors">{item.title}</h3>
                <p className="text-gray-900 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
              
              {/* Brilho decorativo no topo */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};