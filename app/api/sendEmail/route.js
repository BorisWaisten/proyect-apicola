import nodemailer from 'nodemailer';
import Cors from 'cors';

// Inicializa CORS
const cors = Cors({
    methods: ['POST', 'OPTIONS'], // Métodos permitidos
    origin: 'https://argentinehoney.com', // Tu dominio
});

// Función para ejecutar CORS// Función para ejecutar CORS
function runCors(req) {
    return new Promise((resolve, reject) => {
        cors(req, { method: req.method }, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            resolve(result);
        });
    });
}

// Exporta el método POST
export async function POST(req) {
    // Asegúrate de que se ejecute CORS
    await runCors(req);

    try {
        const { email, message } = await req.json();

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
            },
        });

        await transporter.sendMail({
            from: `${email}`,
            to: 'trade@argentinehoney.com',
            replyTo: email,
            subject: 'Consulta de cliente',
            text: `${message}`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return new Response(JSON.stringify({ success: false, error: 'Error al enviar el correo.' }), { status: 500 });
    }
}

export async function OPTIONS(req) {
    await runCors(req);
    const headers = {
        'Access-Control-Allow-Origin': 'https://argentinehoney.com',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
    return new Response(null, { status: 204, headers });
}
