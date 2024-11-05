import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(res) {
  try {

    const { to, text , subject } = await res.json();

    const emailContent = EmailTemplate({ message: text, email: to });

    const { data, error } = await resend.emails.send({
      from: 'Argentine Honey <trade@argentinehoney.com>',
      to: process.env.MAIL_USER,
      subject: subject,
      react: emailContent,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
