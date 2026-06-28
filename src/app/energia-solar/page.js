"use client";

import React, { useState } from "react";
import { Sun, ShieldCheck, HelpCircle, Building2, Car, Tractor, Phone, Mail, ThumbsUp, Send, AlertTriangle, Loader2 } from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function EnergiaSolar() {
  const [activeTab, setActiveTab] = useState("funcionamento");

  // Dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  
  // Estados de envio: "idle", "sending", "success", "error"
  const [formStatus, setFormStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Se o usuário não configurou a chave ainda, fazemos um envio simulado (mock) com timer de 1.5s
    if (ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || ACCESS_KEY.trim() === "") {
      setTimeout(() => {
        setFormStatus("success");
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.nome,
          email: formData.email,
          phone: formData.telefone,
          message: formData.mensagem,
          from_name: "Site ARF Solar - Soluções",
          subject: "Novo Lead de Energia Solar - ARF Solar",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus("success");
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
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
          <div className="space-y-8 animate-in fade-in duration-300">

            {/* Introdução e Funcionamento */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0468BF]">
                Como Funciona a Energia Solar Fotovoltaica?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                A energia solar fotovoltaica é utilizada para gerar energia elétrica para milhares de residências e indústrias. Depois da energia hidráulica e eólica, a energia solar fotovoltaica é a terceira mais importante fonte de energia renovável do mundo, utilizada em mais de 100 países.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                O funcionamento da energia fotovoltaica ocorre através da irradiação solar que é convertida diretamente em energia elétrica. Quanto maior for a radiação solar maior será a quantidade de eletricidade produzida.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Esse processo de conversão de energia solar para energia elétrica acontece através do <strong>efeito fotovoltaico</strong>, o qual se dá através de células fotovoltaicas, feitas de materiais semicondutores, como o silício. Quando a célula é exposta à luz solar, parte dos elétrons do material iluminado absorve fótons (partículas de energia presentes na luz solar), gerando eletricidade.
              </p>
            </div>

            {/* CIRCUITO ANIMADO DE ENERGIA (Visual Premium) */}
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-sm font-black uppercase text-[#ffcf00] tracking-widest text-center">
                Circuito de Fluxo de Energia em Tempo Real (Demonstração)
              </h3>
              <div className="w-full overflow-x-auto flex justify-center">
                <svg className="w-full min-w-[500px] max-w-[650px] h-32" viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <style>{`
                    @keyframes flow {
                      to {
                        stroke-dashoffset: -20;
                      }
                    }
                    .energy-flow-line {
                      stroke-dasharray: 6, 4;
                      animation: flow 1s linear infinite;
                    }
                  `}</style>

                  {/* Linhas de conexão */}
                  {/* Sol/Painel -> Inversor */}
                  <path d="M 90 50 L 210 50" stroke="#ffcf00" strokeWidth="3" className="energy-flow-line" />
                  {/* Inversor -> Quadro */}
                  <path d="M 270 50 L 390 50" stroke="#5FBF45" strokeWidth="3" className="energy-flow-line" />
                  {/* Quadro -> Aparelhos / Rede */}
                  <path d="M 450 50 L 510 50" stroke="#0468BF" strokeWidth="3" className="energy-flow-line" />

                  {/* Nós do circuito */}
                  {/* 1. Painel Solar */}
                  <circle cx="50" cy="50" r="32" fill="#0468BF" stroke="#5FBF45" strokeWidth="2.5" />
                  <text x="50" y="53" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">PAINÉIS</text>
                  <text x="50" y="63" fill="#ffcf00" fontSize="7" fontWeight="bold" textAnchor="middle">CC</text>

                  {/* 2. Inversor */}
                  <circle cx="240" cy="50" r="32" fill="#1e293b" stroke="#ffcf00" strokeWidth="2.5" />
                  <text x="240" y="53" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">INVERSOR</text>
                  <text x="240" y="63" fill="#5FBF45" fontSize="7" fontWeight="bold" textAnchor="middle">CC ➔ CA</text>

                  {/* 3. Quadro */}
                  <circle cx="420" cy="50" r="32" fill="#5FBF45" stroke="#ffffff" strokeWidth="2.5" />
                  <text x="420" y="53" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">QUADRO</text>
                  <text x="420" y="63" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">DISTRIB.</text>

                  {/* 4. Consumo / Rede */}
                  <circle cx="550" cy="50" r="32" fill="#0468BF" stroke="#ffffff" strokeWidth="2.5" />
                  <text x="550" y="53" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">CASA/REDE</text>
                  <text x="550" y="63" fill="#ffcf00" fontSize="7" fontWeight="bold" textAnchor="middle">CRÉDITOS</text>
                </svg>
              </div>
              <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                * O sol incide nas placas gerando Corrente Contínua (CC), que é enviada ao Inversor para virar Corrente Alternada (CA), sendo injetada na rede e consumida pela casa.
              </p>
            </div>

            {/* Infográfico do Fluxo de 5 Passos */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Infográfico do Fluxo do Sistema
              </h3>
              <div className="w-full relative overflow-hidden">
                <img
                  src="/imgs/fluxo_energia_solar_traduzido.png"
                  alt="Fluxo de Geração de Energia Solar Fotovoltaica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 5 Passos */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                5 Passos Sobre o Sistema de Energia Solar Fotovoltaica
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0468BF] text-white flex items-center justify-center font-black shrink-0 text-sm">1</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Painéis Solares:</strong> São instalados sobre o telhado e através da luz do sol geram energia elétrica (energia solar fotovoltaica). Estes painéis são conectados a um inversor solar.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0468BF] text-white flex items-center justify-center font-black shrink-0 text-sm">2</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Inversor Solar & String Box:</strong> O Inversor Solar converte a energia solar dos seus painéis fotovoltaicos (Corrente Contínua - CC) em energia elétrica para a sua casa ou empresa (Corrente Alternada - CA). Para garantir a proteção do circuito entre o painel fotovoltaico e o inversor, o String Box é conectado ao inversor solar. Após isso a energia vai para o quadro de luz.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0468BF] text-white flex items-center justify-center font-black shrink-0 text-sm">3</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Quadro de Luz:</strong> Através do Quadro de Luz a energia é distribuída para os circuitos elétricos da sua casa ou empresa.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0468BF] text-white flex items-center justify-center font-black shrink-0 text-sm">4</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Consumo Local:</strong> Ocorre o consumo de energia em tudo que utiliza eletricidade no local: TV, computador, ar-condicionado, lâmpadas, entre outros.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0468BF] text-white flex items-center justify-center font-black shrink-0 text-sm">5</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Créditos de Energia:</strong> Quando se produz mais energia do que o necessário para o consumo, esse excesso de energia elétrica volta para a rede elétrica pública através do relógio medidor bidirecional, convertendo-se em "créditos de energia" para serem utilizados de noite ou nos próximos meses. Ou seja, você produz energia limpa através da luz do sol e reduz a sua conta de luz em até 95%!
                  </p>
                </div>
              </div>
            </div>

            {/* Ciclo Dia / Noite */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="space-y-2">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wide text-[#0468BF]">Durante o Dia</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Durante o dia o painel solar fotovoltaico gera energia que é consumida pelos aparelhos elétricos de sua empresa ou residência. A energia elétrica excedente é enviada para a rede elétrica gerando créditos na sua conta de luz.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wide text-[#5FBF45]">Durante a Noite</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Durante a noite serão utilizados os créditos de energia elétrica acumulados (eles são válidos por 5 anos e podem ser consumidos também em dias nublados ou no inverno).
                </p>
              </div>
            </div>

            {/* 8 Vantagens */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                8 Vantagens para Utilização da Energia Solar Fotovoltaica
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Gera Créditos de Energia (Economia de até 95% na conta de luz);",
                  "Valorização do Imóvel;",
                  "Energia Limpa e gratuita (o Sol);",
                  "Fonte Renovável e inesgotável (energia solar);",
                  "Baixa Manutenção;",
                  "Fácil instalação;",
                  "Expansível (por ser modular, pode ser ampliada conforme a necessidade);",
                  "Ecológico (não agride o meio ambiente)."
                ].map((vantagem, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600 bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-[#5FBF45] shrink-0" />
                    <span>{vantagem}</span>
                  </div>
                ))}
              </div>
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
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 my-6">
              <img src="/imgs/home_sessoes/residencial.jpg" alt="Energia Solar Residencial" className="w-full h-full object-cover" />
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
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 my-6">
              <img src="/imgs/home_sessoes/intustrial.jpg" alt="Energia Solar Comercial e Industrial" className="w-full h-full object-cover" />
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
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 my-6">
              <img src="/imgs/home_sessoes/estacionamento.jpg" alt="Carport Solar" className="w-full h-full object-cover" />
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
                  Clique no botão abaixo para iniciar uma conversa direto no WhatsApp.
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

                {formStatus === "success" && (
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300 max-w-lg mx-auto">
                    <ThumbsUp className="w-10 h-10 mx-auto text-emerald-600 animate-bounce" />
                    <h5 className="font-extrabold text-base">Recebemos sua mensagem!</h5>
                    <p className="text-xs text-emerald-600/80">Obrigado. Nossa equipe de engenharia e vendas retornará no seu telefone/whatsapp em breve.</p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="text-xs font-bold text-[#0468BF] hover:underline"
                    >
                      Solicitar outra simulação/contato
                    </button>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="bg-rose-50 border border-rose-100 text-rose-700 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300 max-w-lg mx-auto">
                    <AlertTriangle className="w-10 h-10 mx-auto text-rose-600" />
                    <h5 className="font-extrabold text-base">Erro no Envio</h5>
                    <p className="text-xs text-rose-600/80">
                      Não foi possível processar seu orçamento. Por favor, tente novamente ou fale conosco direto via WhatsApp no botão acima.
                    </p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-2 rounded-xl text-xs"
                    >
                      Tentar Novamente
                    </button>
                  </div>
                )}

                {(formStatus === "idle" || formStatus === "sending") && (
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Nome Completo</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        disabled={formStatus === "sending"}
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] disabled:opacity-50"
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
                          disabled={formStatus === "sending"}
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] disabled:opacity-50"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">Telefone / WhatsApp</label>
                        <input
                          type="tel"
                          name="telefone"
                          required
                          disabled={formStatus === "sending"}
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] disabled:opacity-50"
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
                        disabled={formStatus === "sending"}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] resize-none disabled:opacity-50"
                        placeholder="Descreva seu telhado ou sua conta de energia média..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full flex items-center justify-center gap-2 bg-[#0468BF] hover:bg-[#0468BF]/90 text-white font-extrabold py-3.5 px-4 rounded-xl shadow transition-all duration-200 hover:scale-[1.01] text-xs disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {formStatus === "sending" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando Mensagem...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Enviar Mensagem
                        </>
                      )}
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
