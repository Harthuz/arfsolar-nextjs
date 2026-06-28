"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ThumbsUp, Send } from "lucide-react";

export default function Contato() {
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

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Página */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#80BF6F]/10 border border-[#80BF6F]/30 text-[#0468BF] text-xs font-bold uppercase tracking-wider">
            Canais de Atendimento
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Fale Conosco
          </h1>
          <div className="h-1 bg-[#5FBF45] w-24 mx-auto rounded-full mt-2" />
        </div>

        {/* Layout Dividido ao Meio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Coluna da Esquerda: Formulário de Contato */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Envie-nos uma Mensagem
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Faremos um estudo preliminar da sua solicitação e entraremos em contato.
              </p>

              {formStatus ? (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl p-6 text-center space-y-2">
                  <ThumbsUp className="w-10 h-10 mx-auto text-emerald-600 animate-bounce" />
                  <h3 className="font-extrabold text-lg">Mensagem Enviada!</h3>
                  <p className="text-xs text-emerald-600/80">
                    Obrigado. Em breve nossa equipe comercial entrará em contato via telefone ou WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] transition-colors"
                      placeholder="Digite seu nome completo"
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
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] transition-colors"
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
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Mensagem</label>
                    <textarea
                      name="mensagem"
                      rows="4"
                      required
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0B15D9] transition-colors resize-none"
                      placeholder="Descreva detalhes como consumo médio de energia ou o serviço de climatização desejado..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0468BF] hover:bg-[#0468BF]/90 text-white font-extrabold py-3.5 px-4 rounded-xl shadow transition-all duration-200 hover:scale-[1.01] text-xs"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensagem de Contato
                  </button>
                </form>
              )}
            </div>

            {/* Dados Rápidos de Atendimento */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200/80 mt-8 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0468BF] shrink-0" />
                <a href="https://wa.me/5511947769974?text=Olá!" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#0468BF] font-semibold">(11) 94776-9974</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0468BF] shrink-0" />
                <a href="mailto:contato@arfsolar.com.br" className="hover:underline hover:text-[#0468BF] font-semibold">contato@arfsolar.com.br</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0468BF] shrink-0" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Imagem de Preenchimento */}
          <div className="lg:col-span-5 relative w-full aspect-square lg:aspect-auto rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 flex items-center justify-center text-center p-8">
            <div>
              <span className="text-sm font-bold text-slate-700 block">
                [Espaço para Imagem: Contato_Ilustrativo]
              </span>
              <span className="text-xs text-slate-400 mt-2 block">
                (Recomendado: Atendente comercial ou painéis solares em ambiente corporativo)
              </span>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
