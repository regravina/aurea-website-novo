import nodemailer from "nodemailer";
import { ENV } from "./_core/env";

// Configurar transporter de e-mail
// Para produção, use SendGrid, AWS SES, ou similar
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "localhost",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: process.env.SMTP_USER
    ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      }
    : undefined,
});

export interface SendEbookEmailOptions {
  customerEmail: string;
  customerName: string;
  ebookTitle: string;
  ebookUrl: string;
  downloadLink: string;
}

/**
 * Enviar e-book por e-mail para o cliente
 */
export async function sendEbookEmail(options: SendEbookEmailOptions) {
  try {
    const { customerEmail, customerName, ebookTitle, downloadLink } = options;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0D9488, #D4AF37); color: white; padding: 20px; border-radius: 8px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; border-radius: 8px; margin: 20px 0; }
            .button { display: inline-block; background: #D4AF37; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
            .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Seu E-book Chegou!</h1>
            </div>

            <div class="content">
              <p>Olá <strong>${customerName}</strong>,</p>
              
              <p>Obrigado por sua compra! 🙏</p>
              
              <p>Seu e-book <strong>"${ebookTitle}"</strong> está pronto para download.</p>
              
              <p>Clique no botão abaixo para acessar seu e-book:</p>
              
              <center>
                <a href="${downloadLink}" class="button">📥 Baixar E-book</a>
              </center>
              
              <p style="margin-top: 20px; font-size: 14px; color: #666;">
                <strong>Dicas:</strong>
              </p>
              <ul>
                <li>O link é válido por 7 dias</li>
                <li>Você pode fazer download múltiplas vezes</li>
                <li>Guarde bem este e-mail para referência futura</li>
              </ul>
              
              <p style="margin-top: 20px; font-size: 14px; color: #666;">
                Dúvidas? Entre em contato conosco via WhatsApp: <strong>(48) 98827-4343</strong>
              </p>
            </div>

            <div class="footer">
              <p>&copy; 2025 AUREA COMMKT. Todos os direitos reservados.</p>
              <p>Este é um e-mail automático, não responda diretamente.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.SMTP_FROM || "noreply@aureacommkt.com",
      to: customerEmail,
      subject: `📚 Seu E-book "${ebookTitle}" está Pronto!`,
      html: htmlContent,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("[Email] E-book enviado com sucesso:", {
      to: customerEmail,
      messageId: result.messageId,
      ebookTitle,
    });

    return {
      success: true,
      messageId: result.messageId,
    };
  } catch (error) {
    console.error("[Email] Erro ao enviar e-book:", error);
    throw error;
  }
}

/**
 * Verificar se o transporter está configurado corretamente
 */
export async function verifyEmailConfig(): Promise<boolean> {
  try {
    // Se não houver SMTP_HOST, usar modo de teste (não enviar e-mails reais)
    if (!process.env.SMTP_HOST) {
      console.warn(
        "[Email] SMTP não configurado. E-mails serão apenas logados (modo desenvolvimento)"
      );
      return true;
    }

    await transporter.verify();
    console.log("[Email] Configuração de e-mail verificada com sucesso");
    return true;
  } catch (error) {
    console.error("[Email] Erro ao verificar configuração de e-mail:", error);
    return false;
  }
}
