import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5FBF45] text-white border-t border-[#80BF6F] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contatos */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wider border-b-2 border-white pb-2 inline-block">
              Fale Conosco
            </h3>
            <ul className="space-y-3 text-sm text-white/95">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#ffcf00]">WhatsApp:</span>
                <a
                  href="https://wa.me/5511947769974?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#ffcf00] font-bold"
                >
                  (11) 94776-9974
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#ffcf00]">E-mail:</span>
                <a
                  href="mailto:contato@arfsolar.com.br"
                  className="hover:underline hover:text-[#ffcf00] font-bold"
                >
                  contato@arfsolar.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wider border-b-2 border-white pb-2 inline-block">
              Nossa Sede
            </h3>
            <p className="text-sm text-white/95 leading-relaxed font-semibold">
              Rua Manoel Rodrigues, 16<br />
              Vila Monte Santo, São Paulo - SP<br />
              CEP 08062-015
            </p>
          </div>

          {/* Formas de Pagamento */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wider border-b-2 border-white pb-2 inline-block">
              Formas de Pagamento
            </h3>
            <div className="flex items-center bg-white/10 border border-white/20 p-3.5 rounded-2xl h-fit">
              <img src="/imgs/pagamentos.png" alt="Formas de Pagamento" className="w-full h-auto object-contain" />
            </div>
          </div>

        </div>
      </div>

      {/* Faixa Inferior de Copyright - Fundo Amarelo ffcf00 e Texto Azul 0468BF */}
      <div className="bg-[#ffcf00] py-6 border-t border-[#80BF6F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs font-black text-[#0468BF] tracking-widest uppercase">
          © {currentYear} ARF Solar. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
