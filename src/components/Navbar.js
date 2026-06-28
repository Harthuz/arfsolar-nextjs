"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Wind, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Empresa", href: "#empresa" },
    { name: "Energia Solar", href: "#energia-solar" },
    { name: "Faça sua Simulação", href: "#simulacao" },
    { name: "Ar Condicionado", href: "#ar-condicionado" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800"
          : "bg-slate-950/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Container com espaço reservado para imagem */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-all duration-300">
                {/* Espaço reservado para o arquivo do logotipo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] bg-slate-950/80 rounded-lg text-center font-normal px-0.5">
                  Logo
                </div>
                <Sun className="w-6 h-6 text-amber-950 absolute group-hover:opacity-0 transition-opacity" />
                <Wind className="w-6 h-6 text-blue-950 absolute opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-blue-400">
                  ARF SOLAR
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest -mt-1 font-semibold uppercase">
                  Energia & Clima
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botão WhatsApp de Ação Rápida */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/5511947769974?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-600/30 hover:scale-105 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              (11) 94776-9974
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible py-4 bg-slate-900 border-b border-slate-850"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="https://wa.me/5511947769974?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-4 py-3 rounded-xl shadow-md text-center"
            >
              <Phone className="w-5 h-5 fill-slate-950" />
              WhatsApp: (11) 94776-9974
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
