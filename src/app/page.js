"use client";

import React, { useState } from "react";
import {
  Sun,
  Wind,
  ShieldCheck,
  Zap,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Award,
  Users,
  Wrench,
  ThumbsUp,
  ArrowRight,
  Calculator,
  ChevronRight,
  FileSpreadsheet
} from "lucide-react";

export default function Home() {
  // Simulador de Economia Solar
  const [contaMensal, setContaMensal] = useState(300);
  
  // Fórmulas simplificadas para projeção solar
  const custoKwh = 0.95; // Custo médio estimado do kWh com impostos
  const consumoEstimadoKwh = Math.round(contaMensal / custoKwh);
  // Sistema médio: 1 kWp gera aprox. 120 kWh/mês no Sudeste brasileiro
  const potenciaNecessariaKwp = parseFloat((consumoEstimadoKwh / 120).toFixed(2));
  // Cada painel gera em média 0.5 kWp
  const totalPaineisSugeridos = Math.max(2, Math.round(potenciaNecessariaKwp / 0.5));
  // Economia estimada anual considerando taxa mínima da concessionária
  const economiaMensalEstimada = Math.round(contaMensal * 0.90);
  const economiaAnualEstimada = economiaMensalEstimada * 12;
  // Investimento aproximado
  const investimentoAproximado = Math.round(potenciaNecessariaKwp * 4800); 
  const tempoRetornoAnos = parseFloat((investimentoAproximado / economiaAnualEstimada).toFixed(1));

  // Form de contato
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: "",
    servico: "solar",
  });
  const [formEnviado, setFormEnviado] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula envio
    setFormEnviado(true);
    setTimeout(() => {
      setFormEnviado(false);
      setFormData({ nome: "", email: "", whatsapp: "", mensagem: "", servico: "solar" });
    }, 4000);
  };

  // Vantagens extraídas do Scraping da ARF Solar
  const vantagensSolar = [
    {
      titulo: "Redução de até 95% na conta de luz",
      desc: "Gere sua própria energia e pague apenas a taxa mínima de conexão da distribuidora local."
    },
    {
      titulo: "Imune à Inflação Energética",
      desc: "Proteja-se contra os aumentos constantes nas tarifas de eletricidade e bandeiras tarifárias."
    },
    {
      titulo: "Retorno do Investimento Garantido",
      desc: "O sistema se paga em média em 4 a 6 anos. Depois disso, a energia gerada é lucro líquido."
    },
    {
      titulo: "Valorização Imediata do Imóvel",
      desc: "Imóveis residenciais ou comerciais equipados com energia solar valorizam instantaneamente até 10%."
    },
    {
      titulo: "Durabilidade Elevada (+25 Anos)",
      desc: "Os painéis fotovoltaicos possuem garantia de desempenho linear e durabilidade superior a 25 anos."
    },
    {
      titulo: "Sustentabilidade e Preservação",
      desc: "Geração de eletricidade totalmente limpa, renovável, silenciosa e sem emissão de gases poluentes."
    },
    {
      titulo: "Geração de Créditos Energéticos",
      desc: "A energia excedente produzida durante o dia é injetada na rede e vira créditos para serem usados em até 60 meses."
    },
    {
      titulo: "Baixa Manutenção",
      desc: "Apenas limpezas periódicas nos painéis para garantir a eficiência máxima na captação solar."
    }
  ];

  // Passos de instalação fotovoltaica
  const passosInstalacao = [
    {
      passo: "01",
      titulo: "Visita Técnica e Análise de Viabilidade",
      desc: "Nossa equipe realiza a análise estrutural do telhado e avalia o melhor posicionamento solar."
    },
    {
      passo: "02",
      titulo: "Desenho do Projeto Engenharia",
      desc: "Dimensionamos a quantidade perfeita de módulos e inversores com base no seu consumo de energia."
    },
    {
      passo: "03",
      titulo: "Instalação Física e Elétrica",
      desc: "Equipe especializada monta as estruturas de fixação, fixa os painéis e faz a conexão elétrica."
    },
    {
      passo: "04",
      titulo: "Homologação Junto à Distribuidora",
      desc: "Cuidamos de toda a burocracia para aprovar e ligar seu sistema na rede da concessionária de energia."
    },
    {
      passo: "05",
      titulo: "Ativação do Sistema e Monitoramento",
      desc: "Ligamos seu sistema! Você acompanha a geração em tempo real através de um aplicativo no celular."
    }
  ];

  return (
    <main className="flex-grow pt-16 bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* 1. SEÇÃO INÍCIO (HERO) */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 border-b border-slate-900 bg-radial-gradient">
        {/* Espaço para Imagem de Fundo (Background Hero) */}
        <div className="absolute inset-0 bg-slate-950/80 z-10" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 select-none z-0">
          <div className="w-[90%] h-[80%] rounded-3xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center bg-slate-900/40 p-8 text-slate-500">
            <span className="text-xl font-bold tracking-widest">[Espaço para Imagem de Fundo: Hero_Background_ARF_Solar]</span>
            <span className="text-xs mt-2">(Recomendado: Imagem panorâmica de telhado com painéis solares modernos instalados)</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texto de Impacto */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider animate-bounce">
              <Sparkles className="w-3 h-3" />
              Líder em Climatização & Energia Solar
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Economize até <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">95% de Energia</span> e Climatize seu Espaço
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              A **ARF Solar** une a potência da energia fotovoltaica limpa com a excelência em serviços de ar-condicionado. Projetos residenciais, comerciais e industriais sob medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#simulacao"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300"
              >
                <Calculator className="w-5 h-5" />
                Simular Economia Grátis
              </a>
              <a
                href="#contato"
                className="flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Banner Interativo / Espaço de Imagem de Destaque */}
          <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-blue-500/20 blur-xl animate-pulse" />
            <div className="relative h-full w-full rounded-2xl border border-slate-800 bg-slate-900/90 p-8 flex flex-col justify-between shadow-2xl overflow-hidden group">
              {/* Espaço para Imagem de Destaque do Hero */}
              <div className="absolute inset-4 rounded-xl border border-dashed border-slate-700 flex flex-col items-center justify-center bg-slate-950/60 p-4 text-center text-slate-400 group-hover:bg-slate-950/50 transition-colors">
                <Sun className="w-12 h-12 text-amber-500 mb-2 animate-spin-slow" />
                <span className="text-xs font-semibold uppercase tracking-wider block">[Espaço para Imagem: Destaque_Home]</span>
                <span className="text-[10px] text-slate-500 mt-1">(Recomendado: Foto real de painéis fotovoltaicos ARF Solar)</span>
              </div>
              <div className="mt-auto z-10 bg-slate-950/80 p-4 rounded-lg backdrop-blur-sm border border-slate-800">
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Projetos Inteligentes</p>
                <p className="text-sm font-semibold text-white mt-1">Sistemas de alta durabilidade e garantia superior de desempenho.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO EMPRESA */}
      <section id="empresa" className="py-24 px-4 md:px-8 border-b border-slate-900 bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Imagem Institucional da Empresa (Espaço reservado) */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-blue-500/10 to-amber-500/10 blur-lg" />
              <div className="relative h-full w-full rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/60 flex flex-col items-center justify-center p-6 text-center text-slate-400">
                <Users className="w-12 h-12 text-blue-400 mb-2" />
                <span className="text-xs font-semibold uppercase tracking-wider block">[Espaço para Imagem: Empresa_Institucional]</span>
                <span className="text-[10px] text-slate-500 mt-1">(Recomendado: Equipe técnica ARF Solar ou fachada da empresa)</span>
              </div>
            </div>

            {/* Texto Sobre Nós */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
                <Award className="w-3 h-3" />
                Nossa Trajetória
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Comprometidos com a Eficiência e a Sustentabilidade
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  A **ARF Solar** nasceu no mercado de climatização e ar-condicionado em **2006**, oferecendo soluções robustas de venda, instalação e manutenção. Com o avanço das tecnologias de sustentabilidade, expandimos nossas operações em **2017** para incluir **energia solar fotovoltaica**.
                </p>
                <p>
                  Hoje, projetamos e integramos sistemas de microgeração distribuída para residências, indústrias e propriedades rurais. Nosso foco é oferecer economia real de forma descomplicada, utilizando materiais das marcas líderes de mercado.
                </p>
              </div>

              {/* Diferenciais em Grid */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Garantia Total</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Equipamentos certificados e homologados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Suporte Próprio</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Equipe técnica qualificada e certificada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO ENERGIA SOLAR */}
      <section id="energia-solar" className="py-24 px-4 md:px-8 border-b border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Header Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase">
              Tecnologia Fotovoltaica
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Como Funciona a Energia Solar?
            </h2>
            <p className="text-slate-400">
              Transforme a luz solar abundante do Brasil em créditos de energia e economia instantânea na sua fatura mensal de luz.
            </p>
          </div>

          {/* Grid dos 5 Passos */}
          <div className="relative mb-24">
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {passosInstalacao.map((passo, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between h-full">
                  <div>
                    <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 block mb-4">
                      {passo.passo}
                    </span>
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-amber-400 transition-colors">
                      {passo.titulo}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mt-4">
                    {passo.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Espaço para Imagem (Infográfico ou Fluxograma da energia solar) */}
          <div className="relative w-full aspect-[21/9] max-w-5xl mx-auto mb-24 rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/20 flex flex-col items-center justify-center p-6 text-center text-slate-400">
            <FileSpreadsheet className="w-12 h-12 text-amber-500 mb-2" />
            <span className="text-sm font-semibold uppercase tracking-wider block">[Espaço para Imagem: Infográfico_Como_Funciona]</span>
            <span className="text-xs text-slate-500 mt-1">(Recomendado: Infográfico mostrando a luz do sol batendo no painel, passando pelo inversor e alimentando a casa/rede)</span>
          </div>

          {/* Vantagens com Scraping */}
          <div>
            <h3 className="text-2xl font-bold text-center text-white mb-12">
              As Vantagens Que Você Terá ao Instalar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vantagensSolar.map((vantagem, i) => (
                <div key={i} className="bg-slate-900/40 border border-slate-900 rounded-xl p-6 hover:bg-slate-900/80 transition-all duration-200">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <h4 className="text-white font-semibold text-base mb-2">{vantagem.titulo}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{vantagem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO SIMULADOR */}
      <section id="simulacao" className="py-24 px-4 md:px-8 border-b border-slate-900 bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase">
              Simulador Inteligente
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Simule a Economia do Seu Projeto
            </h2>
            <p className="text-slate-400">
              Descubra na hora a estimativa do seu sistema solar residencial ou comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Controles de Entrada */}
            <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Qual o valor médio da sua conta de luz atual?
                </label>
                <div className="text-3xl font-extrabold text-white mb-4">
                  R$ {contaMensal} <span className="text-xs text-slate-400 font-normal">/ mês</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="5000"
                  step="50"
                  value={contaMensal}
                  onChange={(e) => setContaMensal(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-medium">
                  <span>R$ 150</span>
                  <span>R$ 2.500</span>
                  <span>R$ 5.000</span>
                </div>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-850 space-y-2">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Consumo Estimado</div>
                <div className="text-lg font-bold text-slate-200">{consumoEstimadoKwh} kWh / mês</div>
                <p className="text-[10px] text-slate-500">Valor baseado na tarifa média de R$ 0.95/kWh.</p>
              </div>

              <a
                href="#contato"
                className="text-center w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-3.5 rounded-xl block shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-300 text-sm"
              >
                Solicitar Proposta Formal Grátis
              </a>
            </div>

            {/* Resultados / Projeção Visual */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-white border-b border-slate-800 pb-3">Projeção Solar</h4>
                
                <div className="space-y-1">
                  <div className="text-xs text-slate-400">Economia Estimada por Mês</div>
                  <div className="text-3xl font-extrabold text-amber-400">R$ {economiaMensalEstimada}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400">Economia Anual Projetada</div>
                  <div className="text-xl font-bold text-white">R$ {economiaAnualEstimada.toLocaleString("pt-BR")}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400">Tempo Médio de Payback (Retorno)</div>
                  <div className="text-base font-semibold text-slate-200">~ {tempoRetornoAnos} anos</div>
                </div>
              </div>

              <div className="bg-slate-950/40 rounded-xl p-6 border border-slate-800 space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-slate-400">Potência Necessária</div>
                  <div className="text-xl font-bold text-white">{potenciaNecessariaKwp} kWp</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-slate-400">Placas Recomendadas</div>
                  <div className="text-base font-semibold text-slate-200">{totalPaineisSugeridos} Painéis Solares</div>
                </div>
                <div className="text-[10px] text-slate-500 leading-relaxed pt-2">
                  *Valores aproximados para simulação preliminar. O orçamento final depende da insolação, modelo das placas e inclinação do telhado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO AR CONDICIONADO */}
      <section id="ar-condicionado" className="py-24 px-4 md:px-8 border-b border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Header Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase">
              Climatização
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ar-Condicionado e Infraestrutura Completa
            </h2>
            <p className="text-slate-400">
              Especialistas em projetos residenciais, comerciais e corporativos desde 2006.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto de Serviços */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Serviços que Oferecemos</h3>
              <p className="text-slate-300 leading-relaxed">
                Temos soluções completas de climatização, garantindo que seu ambiente residencial ou comercial fique perfeito em qualquer estação do ano, com a eficiência máxima dos aparelhos.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm">Infraestrutura Embutida</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Tubulações de cobre e drenos embutidos na alvenaria em fases de obra.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm">Venda e Instalação de Equipamentos</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Split, Multi-split, Cassete e VRF das principais marcas com garantia.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm">Manutenção Preventiva e PMOC</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Contratos corporativos de PMOC em atendimento às exigências legais da Anvisa.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm">Serviço Especializado de Furos em Vigas</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Equipamento profissional de corte de concreto para passagens de dutos sem danificar estruturas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem do Ar Condicionado (Espaço reservado) */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-xl" />
              <div className="relative h-full w-full rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/60 p-6 flex flex-col items-center justify-center text-center text-slate-400">
                <Wind className="w-12 h-12 text-blue-400 mb-2 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider block">[Espaço para Imagem: Ar_Condicionado_Servicos]</span>
                <span className="text-[10px] text-slate-500 mt-1">(Recomendado: Evaporador de ar-condicionado instalado em ambiente elegante)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO CONTATO */}
      <section id="contato" className="py-24 px-4 md:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Informações e Detalhes de Contato */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase">
                  Atendimento
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-4">
                  Pronto para começar a economizar?
                </h2>
                <p className="text-slate-400 mt-2 text-sm">
                  Fale com a nossa equipe de engenharia e climatização para agendar uma visita técnica gratuita ou simular o financiamento em até 60x.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">WhatsApp / Telefone</h4>
                    <p className="text-xs text-slate-400 mt-0.5">(11) 94776-9974</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">E-mail Comercial</h4>
                    <p className="text-xs text-slate-400 mt-0.5">contato@arfsolar.com.br</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Endritório e Sede</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Rua Manoel Rodrigues, 16 - Vila Monte Santo, São Paulo - SP, CEP 08062-015
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de Contato Frontend */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              {formEnviado ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl p-6 text-center space-y-2">
                  <ThumbsUp className="w-10 h-10 mx-auto text-emerald-400 animate-bounce" />
                  <h4 className="font-bold text-lg">Mensagem enviada com sucesso!</h4>
                  <p className="text-xs text-emerald-500/80">Obrigado pelo contato. Responderemos o mais breve possível no WhatsApp indicado.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Nome Completo</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">WhatsApp / Celular</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Endereço de E-mail</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Serviço de Interesse</label>
                    <select
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="solar">Energia Solar Fotovoltaica</option>
                      <option value="ar">Instalação / Limpeza de Ar-Condicionado</option>
                      <option value="pmoc">Contrato de PMOC (Empresas)</option>
                      <option value="outros">Outros Serviços</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Mensagem</label>
                    <textarea
                      name="mensagem"
                      rows="4"
                      required
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      placeholder="Descreva detalhes como consumo mensal médio ou quantidade de aparelhos de ar..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01] text-sm"
                  >
                    Enviar Solicitação de Orçamento
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
