import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { GridFeatures } from './components/GridFeatures';
import { Testimonials } from './components/Testimonials';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Check, ListChecks, ShieldCheck, Zap, Package, Hammer } from 'lucide-react';
import { GlowingEffect } from './components/ui/glowing-effect';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-black selection:bg-lga/20 overflow-x-hidden">
      <Navbar />
      
      {/* Hero fixo no fundo (z-0). Como o root é transparente, ele fica visível. */}
      <Hero />
      
      {/* Spacer transparente que empurra o conteúdo para baixo da dobra (100vh).
          pointer-events-none garante que você possa clicar nos botões do Hero. */}
      <div className="h-screen w-full pointer-events-none bg-transparent"></div>

      {/* Conteúdo Principal (z-10).
          Tem fundo sólido (#FAFAFA) para cobrir o Hero ao rolar a página. */}
      <main className="relative z-10 bg-[#FAFAFA] shadow-[0_-20px_60px_rgba(0,0,0,0.03)] border-t border-white/50">
        
        {/* Padrão de fundo interno para dar suporte ao efeito Glass dos cartões */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #E0E7FF 0%, transparent 50%), radial-gradient(circle at 90% 10%, #E0E7FF 0%, transparent 30%)'
        }}></div>

        <div className="relative z-10">
          <GridFeatures />
          
          <FeatureSection
            badge="Solução Definitiva"
            title="Instalações mal feitas, falhas elétricas e orçamentos confusos?"
            description="“É caro? Tem garantia? É profissional mesmo? Vai atrasar? Tem alguém mais barato?” Medo de contratar amadores e riscos desnecessários."
            imageSide="right"
            points={[
              { icon: <Zap size={16} className="text-lga" />, text: 'Diagnóstico técnico rápido e explicação clara' },
              { icon: <Hammer size={16} className="text-lga" />, text: 'Execução segura com materiais corretos' },
              { icon: <ShieldCheck size={16} className="text-lga" />, text: 'Garantia real e orçamento simples via WhatsApp' }
            ]}
          >
            <div className="relative w-full h-full overflow-hidden">
               <img 
                 src="https://i.imgur.com/r8f0aJU.webp" 
                 alt="Problemas elétricos comuns" 
                 className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white/01 to-transparent pointer-events-none"></div>
            </div>
          </FeatureSection>

          <FeatureSection
            id="servicos"
            badge="Método LGA"
            title="Como funciona"
            description="Formato: atendimento presencial em Rio Grande do Sul e região, execução agendada ou emergencial."
            imageSide="left"
            points={[
              { icon: <ListChecks size={16} className="text-lga" />, text: '1. Diagnóstico técnico via WhatsApp ou visita' },
              { icon: <ShieldCheck size={16} className="text-lga" />, text: '2. Execução segura com técnicas e materiais corretos' },
              { icon: <Check size={16} className="text-lga" />, text: '3. Garantia + explicação do que foi feito' }
            ]}
          >
             <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="https://i.imgur.com/PN1e7qK.webp" 
                  alt="Fluxo de trabalho LGA" 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/01 pointer-events-none"></div>
             </div>
          </FeatureSection>

          <FeatureSection
            title="Profissionais experientes"
            description="Profissionais experientes atendendo pessoas que buscam segurança, rapidez e um serviço confiável. Tanto quem não entende de elétrica e quer alguém sério para resolver sem complicação, quanto quem já entende e precisa de execução profissional para serviços grandes, complexos ou de alto padrão."
            imageSide="right"
            points={[
              { icon: <Check size={16} className="text-lga" />, text: 'Para quem busca solução sem complicação' },
              { icon: <Check size={16} className="text-lga" />, text: 'Para serviços complexos e de alto padrão' }
            ]}
          >
             <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="https://i.imgur.com/nsOFKi3.webp" 
                  alt="Nossa Experiência" 
                  className="absolute inset-0 w-full h-full object-cover object-top md:object-[center_18%] transition-all duration-500 hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6">
                   {/* Badge transparente */}
                   <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-green-50/80 rounded-full border border-green-100">
                          <ShieldCheck size={16} className="text-green-600" />
                        </div>
                        <p className="text-black text-xs font-medium tracking-tight">Equipe Especializada</p>
                      </div>
                   </div>
                </div>
             </div>
          </FeatureSection>

          <FeatureSection
            title="Serviço Elétrico Profissional LGA"
            description="Inclui: diagnóstico técnico completo, execução (instalação/manutenção/reparo), materiais adequados, acabamento profissional, garantia, suporte via WhatsApp e relatório simples quando necessário."
            imageSide="left"
            points={[
              { icon: <Zap size={16} className="text-lga" />, text: 'Vantagens: Rapidez e Segurança Máxima' },
              { icon: <Package size={16} className="text-lga" />, text: 'Bônus: Orçamento e Visita Técnica' },
              { icon: <ShieldCheck size={16} className="text-lga" />, text: 'Bônus: Garantia Estendida' }
            ]}
          >
             <div className="relative w-full h-full group overflow-hidden">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <img 
                  src="https://i.imgur.com/tCS5ukE.png" 
                  alt="Serviço Profissional LGA" 
                  className="absolute inset-0 w-full h-full object-cover md:object-[center_10%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/03 via-transparent to-transparent"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                   {/* Badge transparente reduzido */}
                   <div className="p-3 rounded-lg bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg backdrop-saturate-150">
                     <p className="text-[9px] text-lga font-bold uppercase tracking-widest mb-0.5">Status</p>
                     <p className="text-black font-medium text-sm leading-tight">Disponível no Rio Grande do Sul</p>
                   </div>
                </div>
             </div>
          </FeatureSection>

          <BottomCTA />
          <Testimonials />
          <FAQ />
          <Footer />
        </div>
      </main>
      
      <FloatingWhatsApp />
    </div>
  );
};

export default App;