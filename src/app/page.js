"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Wind, ShieldCheck, Sun, Award, Hammer, Calculator } from "lucide-react";

export default function Home() {
  // Carrossel do Topo (9 Slides com imagens reais da pasta public/imgs/home_carrossel)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      legenda: "Energia Solar: Comece hoje a gerar sua própria eletricidade de forma limpa, sustentável e sem depender dos aumentos das tarifas.",
      imagePath: "/imgs/home_carrossel/slide (10).jpg"
    },
    {
      id: 2,
      legenda: "Valorize seu Patrimônio: Sistemas de energia fotovoltaica aumentam o valor de mercado e a atratividade do seu imóvel.",
      imagePath: "/imgs/home_carrossel/slide (9).jpg"
    },
    {
      id: 3,
      legenda: "Economia Inteligente: Reduza em até 95% o custo da sua conta de luz mensal com painéis fotovoltaicos modernos de alta eficiência.",
      imagePath: "/imgs/home_carrossel/slide (8).jpg"
    },
    {
      id: 4,
      legenda: "Placas Solares de Alta Tecnologia: Equipamentos com certificação de qualidade internacional para garantir máxima geração de energia.",
      imagePath: "/imgs/home_carrossel/slide (6).jpg"
    },
    {
      id: 5,
      legenda: "Energia Solar ao seu Alcance: Projetos de engenharia sob medida desde o dimensionamento, instalação técnica e homologação burocrática.",
      imagePath: "/imgs/home_carrossel/slide (5).jpg"
    },
    {
      id: 6,
      legenda: "Bom para o seu bolso e para o planeta: Uma solução financeira inteligente que reduz custos operacionais e preserva a natureza.",
      imagePath: "/imgs/home_carrossel/slide (1).jpg"
    },
    {
      id: 7,
      legenda: "Soluções completas em Ar-Condicionado: Dimensionamento, projetos de infraestrutura de cobre embutida em obras e contratos de PMOC.",
      imagePath: "/imgs/home_carrossel/slidea(1).png"
    },
    {
      id: 8,
      legenda: "Instalação Profissional de Ar-Condicionado: Mão de obra qualificada e certificada para sistemas residenciais e corporativos de grande escala.",
      imagePath: "/imgs/home_carrossel/slidea(2).png"
    },
    {
      id: 9,
      legenda: "Ar-Condicionado e Conforto Térmico: Venda e suporte técnico das marcas líderes de mercado mantendo a garantia original de fábrica.",
      imagePath: "/imgs/home_carrossel/slidea(3).png"
    }
  ];

  // Alterna o slide a cada 5 segundos e reinicia a contagem quando o slide muda (manual ou automaticamente)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // 7 Faixas Informativas (Alternadas Esquerda/Direita e com textos atualizados)
  const faixas = [
    {
      titulo: "1. Painéis Solares Fotovoltaicos",
      desc: "Instale painéis solares na sua residência ou empresa e reduza sua conta de energia em até 95%. Pague apenas a taxa mínima de conexão da distribuidora e livre-se dos aumentos constantes nas tarifas de eletricidade.",
      botaoText: "Simular Minha Economia",
      botaoLink: "/simulacao",
      imgName: "Faixa_Painel_Solar_Fotovoltaico",
      badge: "Energia Solar",
      icon: <Zap className="w-5 h-5 text-[#ffcf00]" />
    },
    {
      titulo: "2. Instalação de Ar Condicionado",
      desc: "Nossa equipe profissional realiza a venda e instalação completa de aparelhos de ar-condicionado de todos os modelos (Split, Multi-split, Cassete e VRF) das marcas líderes de mercado, garantindo eficiência e conforto.",
      botaoText: "Ver Serviços de Instalação",
      botaoLink: "/ar-condicionado/instalacao",
      imgName: "Faixa_Instalacao_Ar_Condicionado",
      badge: "Climatização",
      icon: <Wind className="w-5 h-5 text-[#0468BF]" />
    },
    {
      titulo: "3. Infraestrutura Embutida em Obras",
      desc: "Realizamos a infraestrutura completa de ar-condicionado durante a fase de reforma ou obra, embutindo tubulações de cobre e drenos na alvenaria. Garantia de ambientes limpos e visual sem fiação aparente.",
      botaoText: "Conhecer Infraestrutura",
      botaoLink: "/ar-condicionado/infraestrutura",
      imgName: "Faixa_Infraestrutura_Obra",
      badge: "Infraestrutura",
      icon: <Hammer className="w-5 h-5 text-[#0468BF]" />
    },
    {
      titulo: "4. Valorize o seu Patrimônio",
      desc: "Você pode ter energia solar fotovoltaica mesmo se não pretende ficar no mesmo imóvel durante toda a vida útil do sistema. O sistema de Energia Solar agrega valor ao seu imóvel.",
      botaoText: "Simular Valorização",
      botaoLink: "/simulacao",
      imgName: "Faixa_Valorize_Patrimonio",
      badge: "Investimento",
      icon: <Award className="w-5 h-5 text-[#ffcf00]" />
    },
    {
      titulo: "5. Sistema Residencial",
      desc: "A instalação de sistemas fotovoltaicos residenciais vem crescendo cada dia mais.",
      botaoText: "Projetos Residenciais",
      botaoLink: "/energia-solar",
      imgName: "Faixa_Sistema_Residencial",
      badge: "Residencial",
      icon: <Sun className="w-5 h-5 text-[#0468BF]" />
    },
    {
      titulo: "6. Sistema Estacionamento",
      desc: "Estruturas projetadas e dimensionadas para vagas de estacionamento vêm dando nova forma aos modelos de instalações de sistemas fotovoltaicos no Brasil.",
      botaoText: "Projetos de Estacionamento",
      botaoLink: "/energia-solar",
      imgName: "Faixa_Sistema_Estacionamento",
      badge: "Carport Solar",
      icon: <Zap className="w-5 h-5 text-[#ffcf00]" />
    },
    {
      titulo: "7. Sistema Industrial",
      desc: "Atualmente comércios e indústrias são caracterizados pelo seu alto índice de consumo, e a forma mais viável hoje de barrar este gasto é instalar um sistema fotovoltaico, diminuindo 95% de consumo.",
      botaoText: "Projetos Industriais",
      botaoLink: "/energia-solar",
      imgName: "Faixa_Sistema_Industrial",
      badge: "Comercial / Industrial",
      icon: <Calculator className="w-5 h-5 text-[#5FBF45]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">

      {/* 1. CARROSSEL COM EFEITO DE ZOOM TEMPORÁRIO E IMAGENS REAIS */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

        {/* Slides */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* Imagem real com zoom temporário */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
              <img
                src={slide.imagePath}
                alt={slide.legenda}
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out ${idx === currentSlide ? "scale-105" : "scale-100"
                  }`}
              />
            </div>

            {/* Faixa Escura com Legenda no Canto Inferior */}
            <div className="absolute bottom-10 left-4 right-4 md:left-12 max-w-2xl bg-slate-950/85 border border-slate-800 rounded-xl p-6 backdrop-blur-md shadow-2xl z-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <p className="text-sm font-semibold text-[#ffcf00] tracking-wider uppercase mb-1">
                Destaque ARF Solar
              </p>
              <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed">
                {slide.legenda}
              </h2>
            </div>
          </div>
        ))}

        {/* Controles do Carrossel */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-950/70 border border-slate-800 flex items-center justify-center text-white hover:bg-[#5FBF45] hover:border-[#5FBF45] transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-950/70 border border-slate-800 flex items-center justify-center text-white hover:bg-[#5FBF45] hover:border-[#5FBF45] transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores de Slides */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3.5 h-3.5 rounded-full transition-all ${idx === currentSlide ? "bg-[#5FBF45] w-7" : "bg-white/40 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </section>

      {/* 2. SETE FAIXAS ALTERNADAS COM FUNDOS INTERCALADOS (BRANCO E CINZA CLARO) */}
      <div className="w-full">
        {faixas.map((faixa, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-white" : "bg-slate-50";
          return (
            <section
              key={index}
              className={`py-20 border-t border-slate-100/60 ${bgClass}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? "" : "lg:flex-row-reverse"
                    }`}
                >

                  {/* Espaço para Imagem (esquerda ou direita) */}
                  <div className="w-full lg:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                    <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-6 text-center border-2 border-dashed border-slate-300 rounded-2xl">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                          {faixa.icon}
                        </div>
                        <span className="text-sm font-bold text-slate-700 block">
                          [Espaço para Imagem: {faixa.imgName}]
                        </span>
                        <span className="text-xs text-slate-400">
                          (Recomendado: 800x600px)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Informações (direita ou esquerda) */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#80BF6F]/10 border border-[#80BF6F]/30 text-[#0468BF] text-xs font-black uppercase tracking-wider">
                      {faixa.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {faixa.titulo}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {faixa.desc}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={faixa.botaoLink}
                        className="inline-flex items-center gap-2 bg-[#0468BF] hover:bg-[#0468BF]/90 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 duration-200 text-sm"
                      >
                        {faixa.botaoText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
}
