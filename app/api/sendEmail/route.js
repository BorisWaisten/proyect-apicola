import { EmailTemplate } from '../../../components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  // Agregar encabezados de CORS para las respuestas
  const headers = {
    'Access-Control-Allow-Origin': 'https://argentinehoney.com', // Cambia esto a '*' solo si deseas permitir todos los orígenes
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  try {
    // Manejo de la solicitud OPTIONS para preflight CORS
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers
      });
    }

    // Procesamiento de la solicitud POST
    const { to, text, subject } = await req.json();
    const emailContent = EmailTemplate({ message: text, email: to });

    const { data, error } = await resend.emails.send({
      from: 'Argentine Honey <trade@argentinehoney.com>',
      to: process.env.MAIL_USER,
      subject: subject,
      react: emailContent,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500, headers });
    }

    return new Response(JSON.stringify(data), { status: 200, headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
  }
}
