"use client";

import React from "react";
import { Users, Award, Shield, Clock, Landmark, Zap } from "lucide-react";

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

        {/* Conteúdo Institucional & Vídeo Vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          {/* Textos Institucionais */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0468BF]">
                Nossa História
              </h2>
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  A <strong>ARF Solar</strong> está no mercado de ar-condicionado desde <strong>20/09/2006</strong>, e tem como principal objetivo oferecer um serviço de qualidade, visando a inteira satisfação de seus clientes.
                </p>
                <p>
                  Em <strong>07/03/2017</strong>, com a rápida expansão da energia solar fotovoltaica no Brasil e no mundo, a ARF Solar resolveu se especializar nessa área também. O objetivo é contribuir ativamente com o planeta, amenizando os impactos do aumento constante da conta de energia ocasionado pelo comprometimento das fontes hídricas tradicionais.
                </p>
                <p>
                  Tanto na área de climatização técnica quanto na de energia solar fotovoltaica, trabalhamos em parceria direta com as <strong>maiores distribuidoras do Brasil</strong>, o que garante a procedência, qualidade e certeza na entrega de todos os produtos instalados.
                </p>
              </div>
            </div>

            {/* Seção Financiamento */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Landmark className="w-6 h-6 text-[#5FBF45]" />
                Soluções de Financiamento Santander
              </h3>

              <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>
                  <strong>Financiamento Facilitado:</strong> Contamos com uma plataforma integrada de simulação de financiamento diretamente com o Banco Santander em até <strong>60 vezes</strong>, com a possibilidade de mediação por outros bancos parceiros e <strong>carência de até 6 meses</strong> para o pagamento da primeira parcela.
                </p>
                <p>
                  A lógica financeira é simples e vantajosa: o cliente deixa de pagar até <strong>95% da sua conta de energia</strong> e utiliza esse valor economizado diretamente para pagar a parcela do próprio sistema solar. A maioria dos projetos é quitada integralmente em apenas <strong>5 anos</strong>.
                </p>
              </div>

              <div className="border-t border-slate-200/80 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-black block">Retorno Garantido</span>
                  <p className="text-xs text-slate-600">
                    Os fabricantes de painéis solares fornecem garantia de geração por <strong>25 anos</strong>. Sendo assim, após quitar o financiamento em 5 anos, o cliente desfruta de <strong>20 anos de energia gratuita</strong>, tendo todo o seu dinheiro de volta.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-black block">Vida Útil das Placas</span>
                  <p className="text-xs text-slate-600">
                    Após atingir o prazo de 25 anos operando em 100% da sua capacidade nominal, o painel de energia solar inicia uma diminuição gradual e lenta da geração, mantendo-se funcional por décadas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vídeo Vertical do YouTube */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-900 text-center">
              Vídeo Institucional
            </h3>

            {/* Box Redimensionado para Vídeo na Vertical (Proporção 9:16) */}
            <div className="w-full max-w-xs aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/G_Utr6EI5Vg"
                title="Apresentação Institucional ARF Solar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-[11px] text-slate-400 text-center max-w-xs leading-relaxed">
              Assista ao vídeo institucional e entenda como levamos economia e sustentabilidade para você.
            </p>
          </div>
        </div>

        {/* Grid de Valores/Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF] mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900">Qualidade Técnica</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Profissionais capacitados prontos para oferecer o melhor serviço.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF] mx-auto">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900">Segurança Legal</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Cuidamos de toda a homologação junto às distribuidoras locais de energia.
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
