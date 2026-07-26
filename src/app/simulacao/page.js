"use client";

import React, { useState } from "react";
import { Calculator, Zap, TrendingUp, ShieldCheck, Sun, ArrowRight, Phone, User } from "lucide-react";

export default function Simulacao() {
  const [contaInput, setContaInput] = useState("300");
  const [errorConta, setErrorConta] = useState("");
  
  // Estados para o formulário de Lead
  const [showContactForm, setShowContactForm] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Tratamento do valor da conta
  const contaMensalNum = parseFloat(contaInput);
  const isValidConta = !isNaN(contaMensalNum) && contaMensalNum > 0;

  const handleContaChange = (e) => {
    const val = e.target.value;
    setContaInput(val);
    if (val === "" || parseFloat(val) <= 0) {
      setErrorConta("Por favor, insira um valor válido maior que zero.");
    } else if (parseFloat(val) < 150) {
      setErrorConta("Valores abaixo de R$ 150 têm menor viabilidade, mas seguimos à disposição.");
    } else {
      setErrorConta("");
    }
  };

  // Valores default para cálculos caso o input seja inválido
  const contaBase = isValidConta ? contaMensalNum : 0;

  // Lógica matemática simplificada para simulação fotovoltaica
  const custoKwh = 0.95; // Custo médio estimado do kWh com impostos inclusos
  const consumoEstimadoKwh = Math.round(contaBase / custoKwh);
  // Sistema médio: 1 kWp gera aproximadamente 120 kWh/mês no Sudeste brasileiro
  const potenciaNecessariaKwp = parseFloat((consumoEstimadoKwh / 120).toFixed(2));
  // Cada placa fotovoltaica moderna gera cerca de 0.5 kWp
  const totalPaineisSugeridos = Math.max(2, Math.round(potenciaNecessariaKwp / 0.5));
  // Economia mensal calculada considerando a taxa mínima obrigatória da concessionária
  const economiaMensalEstimada = Math.round(contaBase * 0.90);
  const economiaAnualEstimada = economiaMensalEstimada * 12;
  const economia25AnosEstimada = economiaAnualEstimada * 25;
  // Investimento estimado com base nos custos de mercado atuais
  const investimentoAproximado = Math.round(potenciaNecessariaKwp * 4850);
  const tempoRetornoAnos = economiaAnualEstimada > 0 ? parseFloat((investimentoAproximado / economiaAnualEstimada).toFixed(1)) : 0;

  // Link do WhatsApp com as informações da simulação
  const wpText = encodeURIComponent(
    `Olá! Simulei minha conta no site (R$ ${contaBase}/mês). Meu consumo estimado é de ${consumoEstimadoKwh} kWh, precisando de ~${totalPaineisSugeridos} placas (${potenciaNecessariaKwp} kWp). Gostaria de um projeto detalhado.`
  );
  const wpLink = `https://wa.me/5511947769974?text=${wpText}`;

  // Validação do formulário de contato
  const isFormValid = nome.trim().length > 2 && telefone.trim().length >= 10;

  const handleSolicitarEstudo = async (e) => {
    e.preventDefault();
    if (!showContactForm) {
      setShowContactForm(true);
      return;
    }

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email: "N/A (Lead do Simulador)",
          telefone,
          subject: "Novo Lead - Simulação Fotovoltaica",
          from_name: "Simulador Solar ARF",
          mensagem: `Nova simulação realizada no site:\n\nConta de Luz: R$ ${contaBase}\nConsumo Estimado: ${consumoEstimadoKwh} kWh/mês\nTamanho do Sistema: ${potenciaNecessariaKwp} kWp\nPlacas Sugeridas: ${totalPaineisSugeridos}\nEconomia Anual Estimada: R$ ${economiaAnualEstimada}\nPayback: ~${tempoRetornoAnos} anos.`,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setShowContactForm(false);
          setSubmitSuccess(false);
          setNome("");
          setTelefone("");
        }, 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar simulação:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              
              <div className="relative mb-6">
                {errorConta && (
                  <div className="absolute -top-10 left-0 bg-red-100 text-red-700 px-3 py-1 rounded-md text-xs font-semibold shadow-sm animate-pulse border border-red-200">
                    {errorConta}
                  </div>
                )}
                <div className="flex items-center text-3xl font-extrabold text-[#0468BF] bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-inner focus-within:ring-2 focus-within:ring-[#0468BF] transition-all">
                  <span className="mr-2 text-slate-400 text-xl">R$</span>
                  <input
                    type="number"
                    value={contaInput}
                    onChange={handleContaChange}
                    placeholder="Ex: 300"
                    className="bg-transparent w-full outline-none text-[#0468BF] placeholder-slate-300"
                    min="0"
                  />
                  <span className="ml-2 text-sm text-slate-400 font-normal">/ mês</span>
                </div>
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
                href={wpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center w-full bg-[#5FBF45] hover:bg-[#80BF6F] text-white font-extrabold px-4 py-4 rounded-xl block shadow transition-all duration-200 text-sm"
              >
                Falar diretamente no WhatsApp
              </a>

              {/* Formulário Interativo de Contato */}
              <div className={`transition-all duration-300 overflow-hidden ${showContactForm ? "max-h-64 opacity-100 mb-3" : "max-h-0 opacity-0"}`}>
                <div className="space-y-3 p-1">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-[#0468BF] focus:ring-1 focus:ring-[#0468BF]"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="Seu WhatsApp"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-[#0468BF] focus:ring-1 focus:ring-[#0468BF]"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleSolicitarEstudo}
                disabled={showContactForm && !isFormValid || isSubmitting}
                className={`text-center w-full font-bold px-4 py-4 rounded-xl block transition-all duration-200 text-sm flex items-center justify-center gap-2
                  ${!showContactForm 
                    ? "bg-slate-900 hover:bg-slate-800 text-white" 
                    : (isFormValid 
                        ? "bg-[#0468BF] hover:bg-[#035399] text-white shadow-md" 
                        : "bg-slate-200 text-slate-400 cursor-not-allowed opacity-70")
                  }
                  ${submitSuccess ? "bg-green-500 text-white" : ""}
                `}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : submitSuccess ? (
                  "Mensagem Enviada! 🎉"
                ) : showContactForm ? (
                  "Enviar Mensagem"
                ) : (
                  "Solicitar Estudo Técnico Detalhado"
                )}
              </button>
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
