"use client";

import React, { useState } from "react";
import { Sun, ShieldCheck, HelpCircle, Building2, Car, Tractor, Phone, Mail, ThumbsUp, Send } from "lucide-react";

export default function EnergiaSolar() {
  const [activeTab, setActiveTab] = useState("funcionamento");

  // Dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [formStatus, setFormStatus] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(true);
    setTimeout(() => {
      setFormStatus(false);
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    }, 4000);
  };

  // 5 Opções de Abas
  const menuOptions = [
    { id: "funcionamento", label: "Como Funciona", icon: <HelpCircle className="w-5 h-5" /> },
    { id: "residencial", label: "Sistema Residencial", icon: <Sun className="w-5 h-5" /> },
    { id: "comercial", label: "Sistema Comercial/Industrial", icon: <Building2 className="w-5 h-5" /> },
    { id: "estacionamento", label: "Sistema Estacionamento", icon: <Car className="w-5 h-5" /> },
    { id: "rural", label: "Sistema Rural", icon: <Tractor className="w-5 h-5" /> },
  ];

  // Conteúdo detalhado para cada aba
  const renderTabContent = () => {
    switch (activeTab) {
      case "funcionamento":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0468BF]">
              Como Funciona a Energia Fotovoltaica?
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              A energia fotovoltaica é a conversão direta da luz solar em eletricidade. O processo ocorre por meio de células fotovoltaicas montadas em painéis no telhado da sua residência ou empresa.
            </p>
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 flex items-center justify-center text-center p-6 my-6">
              <div>
                <span className="text-sm font-bold text-slate-700 block">
                  [Espaço para Imagem: Infográfico_Fluxo_Fotovoltaico]
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  (Recomendado: Fluxo mostrando captação do sol, inversor e conexão com a rede)
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800">O Ciclo de Geração de Energia:</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>Os painéis captam a luz solar durante o dia e produzem corrente contínua (CC).</li>
                <li>O inversor solar converte a corrente contínua em corrente alternada (CA), pronta para uso em eletrodomésticos.</li>
                <li>O excedente gerado é injetado de volta na rede da concessionária e vira créditos energéticos com validade de até 60 meses.</li>
              </ul>
            </div>
          </div>
        );
      case "residencial":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0468BF]">
              Energia Solar Residencial
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Proteja sua família contra aumentos anuais nas tarifas de eletricidade e valorize seu imóvel em até 10% de forma imediata. O sistema solar residencial é projetado de acordo com a área útil do seu telhado e seu consumo mensal médio de luz.
            </p>
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 flex items-center justify-center text-center p-6 my-6">
              <div>
                <span className="text-sm font-bold text-slate-700 block">
                  [Espaço para Imagem: Telhado_Residencial_Solar]
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  (Recomendado: Foto real de painéis fotovoltaicos em telhado residencial)
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800">Principais Benefícios para Casas:</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>Economia imediata de até 95% na conta de luz.</li>
                <li>Uso livre de aparelhos de ar-condicionado e chuveiro elétrico sem medo da conta.</li>
                <li>Retorno do investimento garantido entre 4 e 6 anos.</li>
              </ul>
            </div>
          </div>
        );
      case "comercial":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0468BF]">
              Sistemas Comerciais e Industriais
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Melhore drasticamente os custos operacionais da sua empresa ou indústria. Sistemas de médio e grande porte proporcionam excelente previsibilidade financeira, imunidade contra bandeiras tarifárias e reforçam a responsabilidade socioambiental do seu negócio (selo verde).
            </p>
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 flex items-center justify-center text-center p-6 my-6">
              <div>
                <span className="text-sm font-bold text-slate-700 block">
                  [Espaço para Imagem: Usina_Solar_Comercial]
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  (Recomendado: Painéis solares instalados em telhado de galpão comercial ou industrial)
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800">Diferenciais Corporativos:</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>Rápida amortização do capital (payback acelerado).</li>
                <li>Financiamentos atrativos com carência e taxas reduzidas (BNDES, Santander, etc.).</li>
                <li>Benefícios tributários e valorização do patrimônio físico.</li>
              </ul>
            </div>
          </div>
        );
      case "estacionamento":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0468BF]">
              Carport Solar (Garagem Fotovoltaica)
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Aproveite o espaço aberto do seu estacionamento para gerar energia limpa. As estruturas de carport servem simultaneamente de cobertura protetora para os veículos contra intempéries (sol e chuva) e geram energia diretamente no ponto de consumo.
            </p>
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 flex items-center justify-center text-center p-6 my-6">
              <div>
                <span className="text-sm font-bold text-slate-700 block">
                  [Espaço para Imagem: Estacionamento_Carport_Solar]
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  (Recomendado: Estrutura de estacionamento coberta por placas solares)
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800">Ideal Para:</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>Supermercados, Shoppings e Centros de Distribuição.</li>
                <li>Estações de recarga de veículos elétricos integradas.</li>
                <li>Condomínios residenciais e prédios comerciais.</li>
              </ul>
            </div>
          </div>
        );
      case "rural":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0468BF]">
              Energia Solar para o Agronegócio
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              O produtor rural enfrenta elevados custos com energia em suas atividades operacionais. Com a energia solar no campo, é possível alimentar sistemas de irrigação automática, ordenhas mecânicas, iluminação de galpões e refrigeração, garantindo independência e eficiência.
            </p>
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 flex items-center justify-center text-center p-6 my-6">
              <div>
                <span className="text-sm font-bold text-slate-700 block">
                  [Espaço para Imagem: Usina_Solar_Rural]
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  (Recomendado: Sistemas instalados diretamente sobre solo rural ou fazenda)
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800">Aplicações no Campo:</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>Redução de custos operacionais do agronegócio.</li>
                <li>Alimentação elétrica em locais isolados sem cobertura da concessionária tradicional.</li>
                <li>Financiamentos específicos do Pronaf e planos rurais.</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#80BF6F]/10 border border-[#80BF6F]/30 text-[#0468BF] text-xs font-bold uppercase tracking-wider">
            Soluções Fotovoltaicas
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Sistemas de Energia Solar
          </h1>
          <div className="h-1 bg-[#5FBF45] w-24 mx-auto rounded-full mt-2" />
        </div>

        {/* Layout em Duas Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Menu Vertical à Esquerda */}
          <aside className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-2 lg:sticky lg:top-24">
            <span className="block px-3 py-2 text-xs font-black uppercase text-slate-400 tracking-wider">
              Navegue pelas Opções
            </span>
            {menuOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveTab(opt.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-sm font-bold transition-all ${activeTab === opt.id
                    ? "bg-[#0468BF] text-white shadow-md shadow-[#0468BF]/10"
                    : "text-slate-700 hover:bg-slate-100 hover:text-[#0468BF]"
                  }`}
              >
                <div className={`shrink-0 ${activeTab === opt.id ? "text-[#ffcf00]" : "text-slate-400"}`}>
                  {opt.icon}
                </div>
                {opt.label}
              </button>
            ))}
          </aside>

          {/* Conteúdo Dinâmico à Direita com Formulário no Final */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-12">

            {/* Bloco de Informações Dinâmicas */}
            <div>
              {renderTabContent()}
            </div>

            {/* Divisor */}
            <div className="h-px bg-slate-100 w-full" />

            {/* Bloco de Contato (no final de cada uma das 5 opções) */}
            <div className="space-y-8 bg-slate-50/50 border border-slate-100 rounded-2xl p-6">

              {/* Botão de Fale Conosco (WhatsApp) em cima do Formulário */}
              <div className="text-center space-y-4">
                <h4 className="text-lg font-extrabold text-slate-800">
                  Deseja tirar dúvidas rápidas sobre esta solução?
                </h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Clique no botão abaixo para iniciar uma conversa direto com o nosso engenheiro no WhatsApp.
                </p>
                <a
                  href="https://wa.me/5511947769974?text=Olá!%20Gostaria%20de%20conversar%20sobre%20o%20sistema%20solar%20que%20vi%20no%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#5FBF45] hover:bg-[#80BF6F] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-105 duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  Fale Conosco via WhatsApp
                </a>
              </div>

              <div className="h-px bg-slate-200/60 w-full" />

              {/* Formulário de Contato */}
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-base font-extrabold text-slate-900">
                    Solicite um Orçamento Técnico / Contato
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Preencha o formulário abaixo e nós entraremos em contato com você o quanto antes.
                  </p>
                </div>

                {formStatus ? (
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl p-5 text-center space-y-1">
                    <ThumbsUp className="w-8 h-8 mx-auto text-emerald-600 animate-bounce" />
                    <h5 className="font-bold text-sm">Recebemos sua mensagem!</h5>
                    <p className="text-xs text-emerald-600/80">Nossa equipe retornará no seu telefone/whatsapp em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Nome Completo</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF]"
                        placeholder="Digite seu nome"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">E-mail</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF]"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">Telefone / WhatsApp</label>
                        <input
                          type="tel"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF]"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Mensagem</label>
                      <textarea
                        name="mensagem"
                        rows="3"
                        required
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0B15D9] resize-none"
                        placeholder="Descreva seu telhado ou sua conta de energia média..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#0468BF] hover:bg-[#0468BF]/90 text-white font-extrabold py-3.5 px-4 rounded-xl shadow transition-all duration-200 hover:scale-[1.01] text-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Enviar Mensagem
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
