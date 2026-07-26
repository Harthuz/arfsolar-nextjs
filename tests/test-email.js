const nodemailer = require('nodemailer');

async function testEmail() {
  console.log("Iniciando teste de conexão SMTP...");

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error("❌ Erro: Variáveis de ambiente do SMTP não estão configuradas corretamente.");
    console.log("Verifique seu arquivo .env");
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    console.log("Verificando conexão com o servidor SMTP...");
    await transporter.verify();
    console.log("✅ Conexão com o servidor SMTP estabelecida com sucesso!");

    console.log("\nEnviando e-mail de teste...");
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: process.env.SMTP_TO || smtpUser,
      subject: "Teste de Configuração SMTP - ARF Solar",
      text: "Este é um e-mail de teste para verificar as configurações do Nodemailer.",
      html: "<h3>Teste SMTP bem-sucedido!</h3><p>As configurações do seu servidor de e-mail estão corretas.</p>",
    });

    console.log(`✅ E-mail de teste enviado com sucesso! MessageId: ${info.messageId}`);
  } catch (error) {
    console.error("❌ Falha no teste do SMTP:");
    console.error(error);
  }
}

testEmail();
