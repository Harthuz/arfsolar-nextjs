"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ThumbsUp, Send, AlertTriangle, Loader2 } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  // Estados de envio: "idle" (aguardando), "sending" (enviando), "success" (sucesso), "error" (erro)
  const [formStatus, setFormStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          mensagem: formData.mensagem,
          from_name: "Site ARF Solar",
          subject: "Nova Mensagem de Contato - ARF Solar",
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

              {formStatus === "success" && (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300">
                  <ThumbsUp className="w-10 h-10 mx-auto text-emerald-600 animate-bounce" />
                  <h3 className="font-extrabold text-lg">Mensagem Enviada!</h3>
                  <p className="text-xs text-emerald-600/80">
                    Obrigado. Os dados foram enviados com sucesso e nossa equipe comercial entrará em contato em breve.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-2 text-xs font-bold text-[#0468BF] hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-rose-50 border border-rose-100 text-rose-700 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300">
                  <AlertTriangle className="w-10 h-10 mx-auto text-rose-600" />
                  <h3 className="font-extrabold text-lg">Erro no Envio</h3>
                  <p className="text-xs text-rose-600/80">
                    Não foi possível processar o formulário. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-2 rounded-xl text-xs"
                  >
                    Tentar Novamente
                  </button>
                </div>
              )}

              {(formStatus === "idle" || formStatus === "sending") && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      disabled={formStatus === "sending"}
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] transition-colors disabled:opacity-50"
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
                        disabled={formStatus === "sending"}
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] transition-colors disabled:opacity-50"
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
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] transition-colors disabled:opacity-50"
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
                      disabled={formStatus === "sending"}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0468BF] transition-colors resize-none disabled:opacity-50"
                      placeholder="Descreva detalhes como consumo médio de energia ou o serviço de climatização desejado..."
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
                        <Send className="w-4 h-4" />
                        Enviar Mensagem de Contato
                      </>
                    )}
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

          {/* Coluna da Direita: Imagem Real */}
          <div className="lg:col-span-5 relative w-full aspect-square lg:aspect-auto rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-50">
            <img
              src="/imgs/home_sessoes/residencial.jpg"
              alt="Atendimento ARF Solar"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </main>
  );
}
