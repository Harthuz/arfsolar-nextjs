import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, mensagem, subject, from_name } = body;

    // A chave é lida apenas do lado do servidor (segura e oculta)
    const access_key = process.env.WEB3FORMS_ACCESS_KEY || "";

    // Se a chave não estiver configurada no .env.local, fazemos a simulação local (mock) de sucesso
    if (!access_key || access_key === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || access_key.trim() === "") {
      return NextResponse.json({ success: true, message: "Envio de simulação local realizado com sucesso!" });
    }

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

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
