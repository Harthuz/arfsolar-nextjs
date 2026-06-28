"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Wind, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fecha menus ao trocar de rota
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Energia Solar", href: "/energia-solar" },
    { name: "Faça sua Simulação", href: "/simulacao" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#5FBF45] shadow-lg border-b border-[#80BF6F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo da Empresa */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-black/10 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                <img src="/imgs/logo.png" alt="ARF Solar Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold italic tracking-wider text-white leading-none">
                  ARF SOLAR
                </span>
                <span className="text-[11px] text-white font-bold mt-1.5 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-whatsapp shrink-0" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  <span className="hover:underline">(11) 94776-9974</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${pathname === link.href
                  ? "bg-[#ffcf00] text-[#0468BF]"
                  : "text-white hover:bg-white/15"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown Ar Condicionado */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold text-white transition-all duration-200 ${pathname.startsWith("/ar-condicionado")
                  ? "bg-[#ffcf00] text-[#0468BF]"
                  : "hover:bg-white/15"
                  }`}
              >
                Ar Condicionado
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-60 rounded-xl bg-white shadow-2xl py-2 border border-slate-100 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/ar-condicionado/instalacao"
                    className="block px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0468BF] transition-colors"
                  >
                    Instalação Ar Condicionado
                  </Link>
                  <Link
                    href="/ar-condicionado/infraestrutura"
                    className="block px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0468BF] transition-colors"
                  >
                    Infraestrutura Ar Condicionado
                  </Link>
                </div>
              )}
            </div>

            {/* Link Contato */}
            <Link
              href="/contato"
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${pathname === "/contato"
                ? "bg-[#ffcf00] text-[#0468BF]"
                : "text-white hover:bg-white/15"
                }`}
            >
              Contato
            </Link>
          </div>

          {/* Botões de Ação Rápida (WhatsApp & Instagram) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/arf.solar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow transition-all hover:scale-105 duration-200"
              title="Instagram"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/5511947769974?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0468BF] hover:bg-[#0468BF]/80 text-white font-extrabold px-5 py-2.5 rounded-xl shadow-lg hover:scale-105 transition-all duration-200 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              Orçamento WhatsApp
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/15 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#5FBF45] border-t border-[#80BF6F] py-4 px-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2.5 rounded-lg text-base font-bold text-white transition-all ${pathname === link.href ? "bg-[#ffcf00] text-[#0468BF]" : "hover:bg-white/15"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Submenu Mobile de Ar Condicionado */}
          <div className="border-t border-white/20 pt-2 mt-2">
            <span className="block px-3 py-1 text-xs font-black uppercase text-white/70 tracking-widest">
              Ar Condicionado
            </span>
            <Link
              href="/ar-condicionado/instalacao"
              className={`block px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all ${pathname === "/ar-condicionado/instalacao" ? "bg-[#ffcf00] text-[#0468BF]" : "hover:bg-white/15"
                }`}
            >
              Instalação Ar Condicionado
            </Link>
            <Link
              href="/ar-condicionado/infraestrutura"
              className={`block px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all ${pathname === "/ar-condicionado/infraestrutura" ? "bg-[#ffcf00] text-[#0468BF]" : "hover:bg-white/15"
                }`}
            >
              Infraestrutura Ar Condicionado
            </Link>
          </div>

          {/* Link Contato Mobile */}
          <div className="border-t border-white/20 pt-2">
            <Link
              href="/contato"
              className={`block px-3 py-2.5 rounded-lg text-base font-bold text-white transition-all ${pathname === "/contato" ? "bg-[#ffcf00] text-[#0468BF]" : "hover:bg-white/15"
                }`}
            >
              Contato
            </Link>
          </div>

          {/* Redes Sociais Mobile */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/20">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-1/2 bg-white/10 text-white font-bold py-3.5 px-4 rounded-xl text-center justify-center hover:bg-white/20"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5511947769974?text=Olá!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-1/2 bg-[#0468BF] text-white font-bold py-3.5 px-4 rounded-xl text-center justify-center hover:bg-[#0468BF]/80"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
