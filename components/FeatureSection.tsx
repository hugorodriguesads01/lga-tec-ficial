import React from 'react';
import { FeatureProps } from '../types';
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

export const FeatureSection: React.FC<FeatureProps> = ({ 
  badge, 
  title, 
  description, 
  points, 
  imageSide, 
  children 
}) => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className={`flex flex-col md:flex-row items-center gap-16 ${imageSide === 'right' ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 w-full">
          <ScrollReveal direction={imageSide === 'right' ? 'right' : 'left'}>
            {badge && (
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                <Settings size={14} className="text-gray-500" />
                {badge}
              </div>
            )}
            
            <h2 className="text-4xl md:text-5xl font-sans font-light text-white leading-tight mt-2">
              {title}
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
              {description}
            </p>
            
            <div className="space-y-4 pt-4">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white shadow-sm">
                    {point.icon}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Visual Content (Abstract Card) */}
        <div className="flex-1 w-full">
           <ScrollReveal direction={imageSide === 'right' ? 'left' : 'right'} delay={0.2} width="100%">
             <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl group transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-2">
               {/* Radial gradient background within the card */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
               
               {/* The custom visual passed as children - Removed padding (p-8) to allow full bleed */}
               <div className="absolute inset-0 flex items-center justify-center">
                  {children}
               </div>

               {/* Bottom shine reflection */}
               <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent opacity-20 pointer-events-none"></div>
             </div>
           </ScrollReveal>
        </div>

      </div>
    </section>
  );
};