"use client";

import React from "react";
import { Users, Award, Shield, Clock } from "lucide-react";

export default function Empresa() {
  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Página */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#80BF6F]/10 border border-[#80BF6F]/30 text-[#0468BF] text-xs font-bold uppercase tracking-wider">
            Quem Somos
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Nossa Trajetória e Compromisso
          </h1>
          <div className="h-1 bg-[#5FBF45] w-24 mx-auto rounded-full mt-2" />
        </div>

        {/* Conteúdo Institucional */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-[#0468BF]">
              Como tudo começou
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                A trajetória da **ARF Solar** teve início no mercado de climatização e conforto térmico em **2006**, focando na excelência em serviços de vendas, instalações, manutenção corretiva e contratos preventivos corporativos de ar-condicionado.
              </p>
              <p>
                Impulsionados pelo ideal de sustentabilidade e eficiência financeira, em **2017** expandimos nossa infraestrutura técnica para integrar projetos completos de **energia solar fotovoltaica**.
              </p>
              <p>
                Hoje, combinando climatização moderna com energia sustentável, nos tornamos referência em projetar, homologar e instalar sistemas solares conectados à rede (On-Grid) para clientes residenciais, corporativos e do setor agropecuário.
              </p>
            </div>
          </div>

          {/* Vídeo do YouTube (Embed pronto com espaço reservado) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 text-center lg:text-left">
              Apresentação ARF Solar
            </h3>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 relative">
              
              {/* O iframe está montado abaixo. Caso queira usar, basta substituir o src com o link do seu vídeo do YouTube. */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Coloque o código do seu vídeo aqui
                title="Apresentação ARF Solar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Dica flutuante para facilitar a substituição */}
              <div className="absolute top-2 right-2 bg-slate-900/90 text-white text-[10px] px-2 py-1 rounded border border-slate-700 font-mono">
                [Substitua o link do Youtube no arquivo src/app/empresa/page.js]
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Valores/Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF] mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900">Qualidade Técnica</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Equipamentos certificados e equipe certificada nas normas de segurança NR-10 e NR-35.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF] mx-auto">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900">Segurança Legal</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Cuidamos de toda a homologação burocrática junto às distribuidoras locais de energia.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF] mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900">Compromisso Real</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Mais de 15 anos no mercado de climatização entregando conforto com excelência.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF] mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900">Foco no Cliente</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dimensionamento personalizado de acordo com o consumo real e orçamento disponível.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
