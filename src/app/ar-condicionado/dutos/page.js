"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Wind, ShieldCheck, ThumbsUp, Wrench, Hammer } from "lucide-react";

export default function Dutos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, type: "image", name: "IMG-20260628-WA0017.jpg", path: "/imgs/dutos/IMG-20260628-WA0017.jpg", desc: "Fabricação e conformação de dutos metálicos de grande porte." },
    { id: 2, type: "image", name: "IMG-20260628-WA0018.jpg", path: "/imgs/dutos/IMG-20260628-WA0018.jpg", desc: "Instalação aérea de dutos em galpão logístico." },
    { id: 3, type: "image", name: "IMG-20260628-WA0019.jpg", path: "/imgs/dutos/IMG-20260628-WA0019.jpg", desc: "Dutos de distribuição de ar e rede de dutos finalizada." }
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
            Climatização Industrial
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Fabricação e Instalação de Dutos
          </h1>
          <div className="h-1 bg-[#5FBF45] w-24 mx-auto rounded-full mt-2" />
        </div>

        {/* Conteúdo e Carrossel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Texto descritivo */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-bold text-[#0468BF]">
              Dutos Industriais Sob Medida
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              A <b>ARF Solar</b> trabalha com fabricação e instalação de dutos de ar condicionado para sistemas industriais de climatização e ventilação mecânica.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Utilizamos materiais de alta resistência que garantem excelente aerodinâmica e isolamento térmico ideal, minimizando perdas de carga de ar e otimizando a eficiência energética global dos equipamentos.
            </p>

            {/* Diferenciais em lista */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5FBF45]/10 flex items-center justify-center text-[#0468BF]">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-800">
                  Fabricação em chapa galvanizada ou painéis pré-isolados.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/5511947769974?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20fabricação%20e%20instalação%20de%20dutos%20industriais."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5FBF45] hover:bg-[#80BF6F] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-105 duration-200 text-sm"
              >
                Solicitar Orçamento de Dutos no WhatsApp
              </a>
            </div>
          </div>

          {/* Carrossel de Imagens */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-800 text-center">
              Fotos de Projetos Executados
            </h3>

            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center">

              {/* Slides do Carrossel */}
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={slide.path}
                      alt={slide.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
    </main >
  );
}
