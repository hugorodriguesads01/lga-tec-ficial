import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";
  const instagramLink = "https://www.instagram.com/lga_tec/";

  return (
    <footer id="contato" className="pt-20 pb-10 border-t border-black/5 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
             <div className="flex items-center mb-6">
                <img src="https://i.imgur.com/277Rqxs.png" alt="LGA TEC" className="h-10 w-auto" />
             </div>
             <p className="text-gray-600 text-sm max-w-xs font-medium leading-relaxed">
               Serviços elétricos profissionais em Rio Grande do Sul e região. Segurança, qualidade e garantia.
             </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-[#0A0A0A] font-bold text-sm mb-6 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-lga transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-lga transition-colors">Comercial</a></li>
              <li><a href="#" className="hover:text-lga transition-colors">Manutenção</a></li>
              <li><a href="#" className="hover:text-lga transition-colors">Instalação</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-[#0A0A0A] font-bold text-sm mb-6 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-lga transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-lga transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-lga transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-[#0A0A0A] font-bold text-sm mb-6 uppercase tracking-wider">Social</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-lga transition-colors"
                >
                  <Instagram size={16}/> Instagram
                </a>
              </li>
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-lga transition-colors"
                >
                  <Phone size={16}/> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/5 pt-8 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          © 2025 LGA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};