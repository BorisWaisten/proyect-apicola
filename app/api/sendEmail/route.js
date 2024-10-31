import nodemailer from 'nodemailer';

// Exporta el método POST
export async function POST(req) {
    try {
        const { email, message } = await req.json();

        const headers = new Headers({
            'Access-Control-Allow-Origin': 'https://argentinehoney.com',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
        });

        // Configuración de nodemailer
        const transporter = nodemailer.createTransport({
            host: 'c1642445.ferozo.com', // Servidor SMTP según la configuración
            port: 465, // Puerto de salida SMTP con SSL
            secure: true, // true para puerto 465 (SSL)
            auth: {
                user: 'trade@argentinehoney.com', // Tu usuario de email
                pass: process.env.MAIL_PASS, // Tu contraseña de email
            },
            tls: {
                rejectUnauthorized: false // Asegura la conexión TLS
            }
        });

        await transporter.sendMail({
            from: `${email}`, // Muestra el email del remitente y usa la cuenta autenticada
            to: 'trade@argentinehoney.com', // El destinatario
            replyTo: email, // Permite responder al remitente original
            subject: 'Consulta de cliente',
            text: `${message}`, 
        });
        

        // Respuesta exitosa
        return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return new Response(JSON.stringify({ success: false, error: 'Error al enviar el correo.' }), { status: 500 });
    }
}

export async function OPTIONS() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': 'https://argentinehoney.com',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
