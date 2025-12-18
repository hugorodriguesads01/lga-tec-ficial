import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Benefícios', href: '#' },
  { label: 'Serviços', href: '#' },
  { label: 'Contato', href: '#' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 supports-[backdrop-filter]:bg-black/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo - Only the image as requested */}
        <div className="flex items-center">
          <img src="https://i.imgur.com/277Rqxs.png" alt="LGA TEC" className="h-9 w-auto" />
        </div>

        {/* Desktop Links - Mono */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-gray-400 hover:text-white transition-colors font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons - Mono */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 transition-all shadow-lg hover:shadow-white/5 tracking-wide"
          >
            Fale no WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 space-y-4 absolute w-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-400 hover:text-white font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 backdrop-blur-md text-white py-2 rounded-lg font-medium border border-white/10 text-sm text-center"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};