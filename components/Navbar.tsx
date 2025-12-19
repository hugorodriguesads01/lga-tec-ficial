import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";

  // Bloqueia o scroll do corpo quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setIsOpen(false);
        // Pequeno delay para permitir que o menu feche antes de scrollar
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/20 supports-[backdrop-filter]:bg-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
        <div className="flex items-center">
          <img src="https://i.imgur.com/277Rqxs.png" alt="LGA TEC" className="h-8 md:h-9 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs text-gray-600 hover:text-black transition-colors font-semibold tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold bg-lga hover:bg-[#2e3175] text-white px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 tracking-wide"
          >
            Fale no WhatsApp
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 hover:text-black p-2 -mr-2 active:bg-black/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Full Screen with Texture and Real Glass Effect */}
      <div className={`fixed inset-0 top-16 z-40 md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        
        {/* Camada 1: Fundo com "corpo" (quase opaco para não perder textura no branco) */}
        <div className="absolute inset-0 bg-[#F8F9FA]/95 backdrop-blur-xl"></div>
        
        {/* Camada 2: Textura de Ruído (Noise) intensificada para visibilidade */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply" 
          style={{ 
            backgroundImage: 'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")', 
            backgroundRepeat: 'repeat', 
            backgroundSize: '128px' 
          }}
        ></div>

        {/* Camada 3: Gradiente para profundidade sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/50 to-transparent pointer-events-none"></div>

        {/* Conteúdo do Menu */}
        <div className="relative z-10 flex flex-col p-6 space-y-6 h-full overflow-y-auto pb-24 border-t border-black/5 shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)]">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-800 hover:text-lga font-medium text-lg py-3 border-b border-gray-100"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="pt-4 mt-auto">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-lga hover:bg-[#2e3175] text-white py-4 rounded-xl font-bold text-base shadow-lg transition-transform active:scale-95"
            >
              Fale no WhatsApp
            </a>
            <p className="text-center text-xs text-gray-400 mt-6 uppercase tracking-widest">LGA TEC Oficial</p>
          </div>
        </div>
      </div>
    </nav>
  );
};