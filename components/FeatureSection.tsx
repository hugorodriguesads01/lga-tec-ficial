import React from 'react';
import { FeatureProps } from '../types';
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

export const FeatureSection: React.FC<FeatureProps> = ({ 
  id,
  badge, 
  title, 
  description, 
  points, 
  imageSide, 
  children 
}) => {
  return (
    <section id={id} className="py-20 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${imageSide === 'right' ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Text Content */}
        <div className="flex-1 space-y-6 w-full">
          <ScrollReveal direction={imageSide === 'right' ? 'right' : 'left'}>
            {badge && (
              <div className="flex items-center gap-2 text-[10px] font-bold text-lga uppercase tracking-[0.2em] mb-3">
                <Settings size={14} className="text-lga" />
                {badge}
              </div>
            )}
            
            <h2 className="text-3xl md:text-5xl font-heading font-light text-black leading-tight mt-1">
              {title}
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4 font-medium">
              {description}
            </p>
            
            <div className="space-y-4 pt-6">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-lga/5 border border-lga/10 text-lga shadow-sm">
                    {point.icon}
                  </div>
                  <span className="text-gray-800 text-sm font-semibold">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Visual Content */}
        <div className="flex-1 w-full">
           <ScrollReveal direction={imageSide === 'right' ? 'left' : 'right'} delay={0.2} width="100%">
             {/* Container Transparente: bg-white/10 ao invés de bg-white */}
             <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl bg-white/10 border border-white/20 overflow-hidden shadow-2xl shadow-gray-200/50 group transition-all duration-500 hover:shadow-gray-200/80">
               <div className="absolute inset-0 flex items-center justify-center">
                  {children}
               </div>
               {/* Reflexo de vidro no topo */}
               <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/05 to-transparent opacity-[0.01] pointer-events-none"></div>
             </div>
           </ScrollReveal>
        </div>

      </div>
    </section>
  );
};