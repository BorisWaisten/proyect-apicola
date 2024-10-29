import nodemailer from 'nodemailer';

// Exporta el método POST
export async function POST(req) {
    try {
        const { email, message } = await req.json();

        // Configuración de nodemailer
        const transporter = nodemailer.createTransport({
            host: 'trade@argentinehoney.com', // Cambia esto al servidor SMTP de tu proveedor
            port: 587, // Cambia a 465 si usas SSL en lugar de TLS
            secure: false, // true para 465, false para otros puertos
            auth: {
                user: process.env.MAIL_USER, // Tu usuario de email
                pass: process.env.MAIL_PASS, // Tu contraseña de email
            },
            tls: {
                rejectUnauthorized: false // Asegura la conexión TLS
            }
        });

        await transporter.sendMail({
            from: process.env.MAIL_USER, // El correo autenticado
            to: process.env.MAIL_USER, // El destinatario
            replyTo: email, // Permite responder al remitente original
            subject: 'Nuevo mensaje de contacto', 
            text: `Mensaje de: ${email}\n\n${message}`, 
        });

        // Respuesta exitosa
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return new Response(JSON.stringify({ success: false, error: 'Error al enviar el correo.' }), { status: 500 });
    }
}
