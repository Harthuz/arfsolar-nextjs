"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Wind, ShieldCheck, ThumbsUp, Wrench } from "lucide-react";

export default function Instalacao() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 0, type: "video", name: "Video_Demonstrativo_Instalacao", desc: "Vídeo Demonstrativo do Serviço de Instalação de Ar-Condicionado.", videoUrl: "https://www.youtube.com/embed/NkPlo7GciAA" },
    { id: 1, type: "image", name: "ar (1).jpg", path: "/imgs/ar_condicionado/ar (1).jpg", desc: "Instalação de evaporadora Split residencial em dormitório." },
    { id: 2, type: "image", name: "ar (1).png", path: "/imgs/ar_condicionado/ar (1).png", desc: "Montagem de linhas de refrigeração e isolamento." },
    { id: 3, type: "image", name: "ar (2).jpg", path: "/imgs/ar_condicionado/ar (2).jpg", desc: "Unidade condensadora externa fixada com suporte antivibratório." },
    { id: 4, type: "image", name: "ar (2).png", path: "/imgs/ar_condicionado/ar (2).png", desc: "Equipamento Cassete instalado em sala corporativa." },
    { id: 5, type: "image", name: "ar (3).jpg", path: "/imgs/ar_condicionado/ar (3).jpg", desc: "Instalação técnica em salão comercial Piso Teto." },
    { id: 6, type: "image", name: "ar (3).png", path: "/imgs/ar_condicionado/ar (3).png", desc: "Testes de vazão e direcionamento de ar." },
    { id: 7, type: "image", name: "ar (4).jpg", path: "/imgs/ar_condicionado/ar (4).jpg", desc: "Passagem de fiação elétrica de comando elétrico." },
    { id: 8, type: "image", name: "ar (4).png", path: "/imgs/ar_condicionado/ar (4).png", desc: "Conexão de flanges e tubulação de cobre." },
    { id: 9, type: "image", name: "ar (5).png", path: "/imgs/ar_condicionado/ar (5).png", desc: "Organização de condensadoras em área técnica." },
    { id: 10, type: "image", name: "ar (6).png", path: "/imgs/ar_condicionado/ar (6).png", desc: "Finalização estética e testes operacionais finais." }
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
            Climatização Técnica
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Instalação de Ar-Condicionado
          </h1>
          <div className="h-1 bg-[#5FBF45] w-24 mx-auto rounded-full mt-2" />
        </div>

        {/* Conteúdo e Carrossel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Texto descritivo */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-bold text-[#0468BF]">
              Instalação Profissional Certificada
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              A <b>ARF Solar</b> realiza a instalação técnica de aparelhos de ar-condicionado de todos os portes. Nossos técnicos são devidamente qualificados nas normas de segurança e instruídos pelos maiores fabricantes nacionais e importados.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Garantimos o correto cálculo de carga térmica (BTUs) do ambiente antes de sugerirmos o aparelho ideal, evitando alto consumo de energia elétrica ou climatização insuficiente.
            </p>

            {/* Diferenciais em lista */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF]">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-800">
                  Instalação de Split High Wall, Cassete, Piso Teto e VRF.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-800">
                  Respeito estrito à garantia original dos fabricantes.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/5511947769974?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20instalação%20de%20ar-condicionado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5FBF45] hover:bg-[#80BF6F] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-105 duration-200 text-sm"
              >
                Orçamento de Instalação no WhatsApp
              </a>
            </div>
          </div>

          {/* Carrossel de Imagens */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-800 text-center">
              Fotos de Projetos Executados
            </h3>

            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center">

              {/* Slides do Carrossel (Espaço reservado) */}
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                  {slide.type === "video" ? (
                    <div className="w-full h-full bg-slate-950">
                      <iframe
                        className="w-full h-full"
                        src={slide.videoUrl || "https://www.youtube.com/embed/NkPlo7GciAA"}
                        title="Vídeo de Instalação de Climatização"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img 
                        src={slide.path} 
                        alt={slide.name} 
                        className="w-full h-full object-cover" 
                      />
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
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? "bg-[#0468BF] w-6" : "bg-slate-300 hover:bg-slate-400"
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
