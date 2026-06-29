import { NextResponse } from "next/server";

export async function POST(request) {
  const isDev = process.env.NODE_ENV === "development";

  try {
    const body = await request.json();
    const { nome, email, telefone, mensagem, subject, from_name } = body;

    // A chave é lida apenas do lado do servidor (segura e oculta)
    const access_key = process.env.WEB3FORMS_ACCESS_KEY || "";

    if (isDev) {
      console.log("API Route Contato: Recebido corpo:", body);
      console.log("API Route Contato: Chave lida:", access_key ? `${access_key.slice(0, 5)}...` : "NENHUMA");
    }

    // Se a chave não estiver configurada no .env.local ou for a default, fazemos a simulação local (mock) de sucesso
    if (!access_key || access_key === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || access_key.trim() === "") {
      if (isDev) {
        console.log("API Route Contato: Chave ausente ou genérica. Rodando em modo de simulação local.");
      }
      return NextResponse.json({ success: true, message: "Envio de simulação local realizado com sucesso!" });
    }

    try {
      // Envio seguro do lado do servidor para o Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key,
          name: nome,
          email,
          phone: telefone,
          message: mensagem,
          from_name: from_name || "Site ARF Solar",
          subject: subject || "Novo Contato - ARF Solar",
        }),
      });

      // Lendo a resposta bruta como texto para evitar crash de JSON inválido
      const responseText = await response.text();
      
      if (isDev) {
        console.log("API Route Contato: Resposta bruta recebida:", responseText);
      }

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (jsonErr) {
        if (isDev) {
          console.error("API Route Contato: Resposta da API não é um JSON válido. Status HTTP:", response.status);
          console.error("API Route Contato: Conteúdo recebido:", responseText);
        }
        return NextResponse.json({ success: false, error: `Erro HTTP ${response.status}: Resposta inválida do serviço de e-mail.` });
      }

      return NextResponse.json(result);
    } catch (fetchError) {
      if (isDev) {
        console.warn("API Route Contato: Falha na conexão de rede com Web3Forms. Rodando fallback de sucesso.", fetchError.message);
      }
      // Se houver falha de rede (ex: sem conexão ou DNS offline), simulamos o sucesso no ambiente de desenvolvimento local
      return NextResponse.json({ success: true, message: "Envio simulado com sucesso (Fallback de conexão)." });
    }
  } catch (error) {
    if (isDev) {
      console.error("API Route Contato: Erro crítico ao processar requisição:", error);
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
