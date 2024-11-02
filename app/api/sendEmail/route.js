import nodemailer from 'nodemailer';

export async function POST(req) {
    console.log("Received POST request");
    try {
        const { email, message } = await req.json();
        console.log("Email:", email, "Message:", message);

        // Configuración de nodemailer
        const transporter = nodemailer.createTransport({
            host: 'c1642445.ferozo.com',
            port: 465,
            secure: true,
            auth: {
                user: 'trade@argentinehoney.com',
                pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        await transporter.sendMail({
            from: email,
            to: 'trade@argentinehoney.com',
            replyTo: email,
            subject: 'Consulta de cliente',
            text: message,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return new Response(JSON.stringify({ success: false, error: 'Error al enviar el correo.' }), { status: 500 });
    }
}
