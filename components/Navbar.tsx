import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/20 supports-[backdrop-filter]:bg-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://i.imgur.com/277Rqxs.png" alt="LGA TEC" className="h-9 w-auto" />
        </div>

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

        <button
          className="md:hidden text-gray-600 hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl border-b border-black/5 p-6 space-y-4 absolute w-full shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-700 hover:text-black font-semibold text-sm"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-lga hover:bg-[#2e3175] text-white py-3 rounded-xl font-semibold text-sm text-center shadow-lg transition-colors"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};