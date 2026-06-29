import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  const isDev = process.env.NODE_ENV === "development";

  try {
    const body = await request.json();
    const { nome, email, telefone, mensagem, subject, from_name } = body;

    // A chave é lida de forma segura no servidor
    const resendApiKey = process.env.RESEND_API_KEY || "";

    if (isDev) {
      console.log("API Route Contato (Resend): Recebido corpo:", body);
      console.log("API Route Contato (Resend): Chave lida:", resendApiKey ? `${resendApiKey.slice(0, 5)}...` : "NENHUMA");
    }

    // Fallback local se a chave não estiver configurada
    if (!resendApiKey || resendApiKey.trim() === "" || resendApiKey.startsWith("YOUR_")) {
      if (isDev) {
        console.log("API Route Contato (Resend): Chave ausente. Simulando sucesso no dev local.");
      }
      return NextResponse.json({ success: true, message: "Envio simulado com sucesso (sem chave de API)." });
    }

    // Inicializando o SDK do Resend
    const resend = new Resend(resendApiKey);

    // Disparando o e-mail usando o Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hernandeshass910@gmail.com",
      subject: subject || "Novo Contato - ARF Solar",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px; color: #1a202c;">
          <h2 style="color: #0468BF; margin-bottom: 20px; border-bottom: 2px solid #5FBF45; padding-bottom: 10px;">
            Novo Contato pelo Site ARF Solar
          </h2>
          <p><strong>Origem:</strong> ${from_name || "Formulário Geral"}</p>
          <p><strong>Nome do Cliente:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <div style="background-color: #f7fafc; padding: 15px; border-left: 4px solid #0468BF; margin-top: 15px; margin-bottom: 15px;">
            <p style="margin: 0; font-weight: bold; color: #4a5568;">Mensagem:</p>
            <p style="margin-top: 5px; color: #2d3748; white-space: pre-wrap;">${mensagem}</p>
          </div>
          <p style="font-size: 11px; color: #a0aec0; margin-top: 30px; border-top: 1px solid #edf2f7; padding-top: 10px;">
            Este e-mail foi gerado de forma automática e segura pelo servidor do site ARF Solar via Resend.
          </p>
        </div>
      `,
    });

    if (error) {
      if (isDev) {
        console.error("API Route Contato (Resend): Erro retornado pela API do Resend:", error);
      }
      return NextResponse.json({ success: false, error: error.message || error });
    }

    if (isDev) {
      console.log("API Route Contato (Resend): E-mail enviado com sucesso! ID:", data.id);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    if (isDev) {
      console.error("API Route Contato (Resend): Erro crítico de execução:", error);
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
