import React from "react";
import { Mail, Phone, MapPin, Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-blue-500 flex items-center justify-center text-slate-950 font-bold text-xs">
                ARF
              </div>
              <span className="text-lg font-bold text-white tracking-wider">ARF SOLAR</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Especialistas em climatização e energia solar fotovoltaica. Desde 2006 garantindo conforto térmico e redução na conta de energia de forma sustentável.
            </p>
          </div>

          {/* Coluna 2: Links Úteis */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#empresa" className="hover:text-amber-400 transition-colors">Empresa</a>
              </li>
              <li>
                <a href="#energia-solar" className="hover:text-amber-400 transition-colors">Energia Solar</a>
              </li>
              <li>
                <a href="#simulacao" className="hover:text-amber-400 transition-colors">Faça sua Simulação</a>
              </li>
              <li>
                <a href="#ar-condicionado" className="hover:text-amber-400 transition-colors">Ar Condicionado</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Fale Conosco</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>(11) 94776-9974</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <a href="mailto:contato@arfsolar.com.br" className="hover:text-white transition-colors">
                  contato@arfsolar.com.br
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Rua Manoel Rodrigues, 16<br />
                  Vila Monte Santo, São Paulo - SP<br />
                  CEP 08062-015
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais e Selos */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-500 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-5 2-5 5v2z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-500 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 text-[11px] text-slate-400">
                <Sun className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Energia 100% Limpa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ARF Solar. Todos os direitos reservados.</p>
          <p className="mt-1">
            Desenvolvido em React, Node e Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
