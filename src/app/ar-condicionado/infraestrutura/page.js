"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Wind, ShieldCheck, Hammer, Layers } from "lucide-react";

export default function Infraestrutura() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, type: "image", name: "Infraestrutura_Slide_1_Cobre", desc: "Instalação de tubulações de cobre de alta qualidade." },
    { id: 2, type: "image", name: "Infraestrutura_Slide_2_Drenos", desc: "Drenagem por gravidade com tubos rígidos embutidos." },
    { id: 3, type: "image", name: "Infraestrutura_Slide_3_Furos", desc: "Furo técnico circular em concreto de vigas estruturais." },
    { id: 4, type: "image", name: "Infraestrutura_Slide_4_Isolamento", desc: "Isolamento térmico em elastômero para evitar condensação." },
    { id: 5, type: "image", name: "Infraestrutura_Slide_5_Caixas_Passagem", desc: "Caixas de passagem de ar-condicionado embutidas na alvenaria." },
    { id: 6, type: "image", name: "Infraestrutura_Slide_6_Cabos", desc: "Passagem de fiação elétrica de comando e força." },
    { id: 7, type: "image", name: "Infraestrutura_Slide_7_Fixacao", desc: "Fixação e ancoragem segura de linhas de refrigeração no teto." },
    { id: 8, type: "image", name: "Infraestrutura_Slide_8_Galpao", desc: "Infraestrutura industrial executada em galpão de logística." },
    { id: 9, type: "image", name: "Infraestrutura_Slide_9_Escritorio", desc: "Tubulações prontas no teto para sistemas cassete." },
    { id: 10, type: "image", name: "Infraestrutura_Slide_10_Teste", desc: "Pressurização com nitrogênio para garantia contra vazamentos." },
    { id: 11, type: "video", name: "Video_Demonstrativo_Infraestrutura", desc: "Vídeo Demonstrativo do Serviço de Infraestrutura de Climatização." }
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#80BF6F]/10 border border-[#80BF6F]/30 text-[#0468BF] text-xs font-bold uppercase tracking-wider">
            Climatização & Obras
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Infraestrutura de Ar-Condicionado
          </h1>
          <div className="h-1 bg-[#5FBF45] w-24 mx-auto rounded-full mt-2" />
        </div>

        {/* Conteúdo e Carrossel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Texto descritivo */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-bold text-[#0468BF]">
              Preparação de Ambientes Sem Fios Aparentes
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              A **ARF Solar** executa a infraestrutura de climatização completa em reformas ou construções civis. O planejamento prévio evita quebras de alvenaria desnecessárias após a pintura final.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Passamos os tubos de cobre adequadamente isolados termicamente, cabos de comando elétrico e os tubos de dreno por gravidade ou com bombas de condensado. Também oferecemos o serviço especializado de furos circulares em concreto para a passagem dos dutos sem fragilizar vigas e lajes.
            </p>

            {/* Diferenciais em lista */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF]">
                  <Hammer className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-800">
                  Infraestrutura embutida para futuras instalações rápidas.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF]">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-800">
                  Cálculo preciso e dimensionamento de bitolas de cobre.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/5511947769974?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20infraestrutura%20de%20ar-condicionado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5FBF45] hover:bg-[#80BF6F] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-105 duration-200 text-sm"
              >
                Orçamento de Infraestrutura no WhatsApp
              </a>
            </div>
          </div>

          {/* Carrossel de Imagens */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-800 text-center">
              Registros das Infraestruturas em Obras
            </h3>
            
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center">
              
              {/* Slides do Carrossel (Espaço reservado) */}
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                    idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {slide.type === "video" ? (
                    <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center bg-slate-950">
                      <div className="w-full h-[85%] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center text-white/50 relative">
                        {/* Embed de vídeo ou Iframe do Youtube */}
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          title="Vídeo de Infraestrutura de Climatização"
                          allowFullScreen
                        ></iframe>
                        <div className="absolute top-2 right-2 bg-slate-900/90 text-white text-[9px] px-2 py-0.5 rounded border border-slate-700 font-mono">
                          [Substitua este vídeo no arquivo infraestrutura/page.js]
                        </div>
                      </div>
                      <span className="text-xs text-white/70 mt-2 font-bold">{slide.desc}</span>
                    </div>
                  ) : (
                    <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-slate-700/60 rounded-3xl m-4">
                      <Layers className="w-12 h-12 text-[#5FBF45] mb-2 animate-bounce" />
                      <span className="text-sm font-bold text-white block">
                        [Espaço para Imagem: {slide.name}]
                      </span>
                      <span className="text-xs text-white/50 mt-1">
                        {slide.desc}
                      </span>
                    </div>
                  )}
                </div>
              ))}

              {/* Botões do Carrossel */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-800 flex items-center justify-center text-white hover:bg-[#5FBF45] hover:border-[#5FBF45] transition-all z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-800 flex items-center justify-center text-white hover:bg-[#5FBF45] hover:border-[#5FBF45] transition-all z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentSlide ? "bg-[#0468BF] w-6" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
