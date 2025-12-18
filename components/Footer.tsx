import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551984494900&text&type=phone_number&app_absent=0&utm_source=ig";
  const instagramLink = "https://www.instagram.com/lga_tec/";

  return (
    <footer id="contato" className="pt-16 pb-10 border-t border-white/5 bg-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
             <div className="flex items-center mb-6">
                <img src="https://i.imgur.com/277Rqxs.png" alt="LGA TEC" className="h-10 w-auto" />
             </div>
             <p className="text-gray-500 text-sm max-w-xs">
               Serviços elétricos profissionais em Rio Grande do Sul e região. Segurança, qualidade e garantia.
             </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-medium mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comercial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manutenção</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instalação</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-medium mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-medium mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="p-1 rounded bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Instagram size={16}/>
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="p-1 rounded bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Phone size={16}/>
                  </span>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          © 2025 LGA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};