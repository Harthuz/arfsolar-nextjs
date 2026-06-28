"use client";

import React, { useState } from "react";
import { Calculator, Zap, TrendingUp, ShieldCheck, Sun, ArrowRight } from "lucide-react";

export default function Simulacao() {
  const [contaMensal, setContaMensal] = useState(300);

  // Lógica matemática simplificada para simulação fotovoltaica
  const custoKwh = 0.95; // Custo médio estimado do kWh com impostos inclusos
  const consumoEstimadoKwh = Math.round(contaMensal / custoKwh);
  // Sistema médio: 1 kWp gera aproximadamente 120 kWh/mês no Sudeste brasileiro
  const potenciaNecessariaKwp = parseFloat((consumoEstimadoKwh / 120).toFixed(2));
  // Cada placa fotovoltaica moderna gera cerca de 0.5 kWp
  const totalPaineisSugeridos = Math.max(2, Math.round(potenciaNecessariaKwp / 0.5));
  // Economia mensal calculada considerando a taxa mínima obrigatória da concessionária
  const economiaMensalEstimada = Math.round(contaMensal * 0.90);
  const economiaAnualEstimada = economiaMensalEstimada * 12;
  const economia25AnosEstimada = economiaAnualEstimada * 25;
  // Investimento estimado com base nos custos de mercado atuais
  const investimentoAproximado = Math.round(potenciaNecessariaKwp * 4850);
  const tempoRetornoAnos = parseFloat((investimentoAproximado / economiaAnualEstimada).toFixed(1));

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Página */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#80BF6F]/10 border border-[#80BF6F]/30 text-[#0468BF] text-xs font-bold uppercase tracking-wider">
            Simulador Fotovoltaico
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Faça Sua Simulação de Energia
          </h1>
          <div className="h-1 bg-[#5FBF45] w-24 mx-auto rounded-full mt-2" />
        </div>

        {/* Layout do Simulador */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna 1: Ajuste do Valor da Conta */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Quanto você paga de conta de luz?
              </h2>
              <div className="text-4xl font-extrabold text-[#0468BF] mb-4">
                R$ {contaMensal} <span className="text-xs text-slate-400 font-normal">/ mês</span>
              </div>
              <input
                type="range"
                min="150"
                max="5000"
                step="50"
                value={contaMensal}
                onChange={(e) => setContaMensal(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0468BF]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-bold uppercase">
                <span>R$ 150</span>
                <span>R$ 2.500</span>
                <span>R$ 5.000</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 space-y-2">
              <div className="text-xs text-slate-400 uppercase tracking-widest font-black">
                Consumo Mensal Estimado
              </div>
              <div className="text-xl font-bold text-slate-800">
                {consumoEstimadoKwh} kWh / mês
              </div>
              <p className="text-[10px] text-slate-500">
                Calculado com base na tarifa residencial média de R$ 0,95/kWh.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/5511947769974?text=Olá!%20Simulei%20minha%20conta%20no%20site%20e%20gostaria%20de%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="text-center w-full bg-[#5FBF45] hover:bg-[#80BF6F] text-white font-extrabold px-4 py-4 rounded-xl block shadow transition-all duration-200 text-sm"
              >
                Falar com Engenheiro no WhatsApp
              </a>
              <a
                href="/contato"
                className="text-center w-full bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-4 rounded-xl block transition-all duration-200 text-sm"
              >
                Solicitar Estudo Técnico Detalhado
              </a>
            </div>
          </div>

          {/* Coluna 2: Resultados da Simulação */}
          <div className="lg:col-span-7 bg-[#0468BF]/5 border border-[#0468BF]/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-950 border-b border-slate-200/80 pb-3">
                  Retorno e Economia Estimada
                </h3>
                
                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-bold uppercase">Sua Economia Mensal</div>
                  <div className="text-3xl font-extrabold text-[#5FBF45]">R$ {economiaMensalEstimada}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-bold uppercase">Sua Economia Anual</div>
                  <div className="text-xl font-bold text-slate-800">R$ {economiaAnualEstimada.toLocaleString("pt-BR")}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-bold uppercase">Economia em 25 anos</div>
                  <div className="text-xl font-bold text-[#0468BF]">R$ {economia25AnosEstimada.toLocaleString("pt-BR")}</div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-950 border-b border-slate-200/80 pb-3">
                  Especificações do Sistema
                </h3>

                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-bold uppercase">Tamanho do Sistema</div>
                  <div className="text-xl font-bold text-slate-800">{potenciaNecessariaKwp} kWp</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-bold uppercase">Placas Fotovoltaicas</div>
                  <div className="text-lg font-bold text-slate-800">{totalPaineisSugeridos} Placas</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-bold uppercase">Retorno do Investimento (Payback)</div>
                  <div className="text-lg font-bold text-[#ffcf00] bg-slate-900 inline-block px-3 py-1 rounded-lg">
                    ~ {tempoRetornoAnos} Anos
                  </div>
                </div>
              </div>

            </div>

            {/* Aviso Técnico */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 text-[11px] text-slate-500 leading-relaxed space-y-1.5">
              <p>
                *Os cálculos acima são estimativas aproximadas baseadas na média histórica de insolação da região Sudeste.
              </p>
              <p>
                *A economia final e a quantidade exata de módulos fotovoltaicos dependem da orientação geográfica do seu telhado, inclinação e possíveis sombreamentos de árvores ou prédios vizinhos.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
