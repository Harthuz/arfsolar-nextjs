import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const isDev = process.env.NODE_ENV === "development";

  try {
    const body = await request.json();
    const { nome, email, telefone, mensagem, subject, from_name } = body;

    if (isDev) {
      console.log("API Route Contato: Recebido corpo:", body);
    }

    // Configurações do SMTP a partir de variáveis de ambiente
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser; 
    const smtpTo = process.env.SMTP_TO || "hernandeshass910@gmail.com";

    // Configurações do Pushover a partir de variáveis de ambiente
    const pushoverUserKey = process.env.PUSHOVER_USER_KEY;
    const pushoverApiToken = process.env.PUSHOVER_API_TOKEN;

    // Fallback local se as credenciais não estiverem configuradas
    if (!smtpHost || !smtpUser || !smtpPass) {
      if (isDev) {
        console.log("API Route Contato: Variáveis SMTP ausentes. Simulando sucesso no dev local.");
      }
      return NextResponse.json({ success: true, message: "Envio simulado com sucesso (sem credenciais SMTP)." });
    }

    // Configurando o Nodemailer
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
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
          Este e-mail foi gerado de forma automática e segura pelo servidor do site ARF Solar.
        </p>
      </div>
    `;

    // Disparando o e-mail usando o Nodemailer
    const info = await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      subject: subject || "Novo Contato - ARF Solar",
      html: htmlContent,
    });

    if (isDev) {
      console.log("API Route Contato: E-mail enviado com sucesso! MessageId:", info.messageId);
    }

    // Enviar notificação via Pushover se configurado
    if (pushoverUserKey && pushoverApiToken) {
      try {
        const pushoverResponse = await fetch("https://api.pushover.net/1/messages.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: pushoverApiToken,
            user: pushoverUserKey,
            title: "Novo Contato - ARF Solar",
            message: `Nome: ${nome}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
            url: "https://arfsolar.com.br",
            url_title: "Acessar Site",
            priority: 1, // Prioridade alta
            sound: "siren", // Som de alarme
          }),
        });

        if (!pushoverResponse.ok && isDev) {
          console.error("API Route Contato: Falha ao enviar notificação Pushover:", await pushoverResponse.text());
        } else if (isDev) {
          console.log("API Route Contato: Notificação Pushover enviada com sucesso.");
        }
      } catch (pushoverError) {
        if (isDev) {
          console.error("API Route Contato: Erro ao chamar API do Pushover:", pushoverError);
        }
      }
    }

    return NextResponse.json({ success: true, data: info.messageId });
  } catch (error) {
    if (isDev) {
      console.error("API Route Contato: Erro crítico de execução:", error);
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
