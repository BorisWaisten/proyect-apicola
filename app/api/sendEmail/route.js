import nodemailer from 'nodemailer';

// Exporta el método POST
export async function POST(req) {
    try {
        const { email, message } = await req.json();

        // Configuración de nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        console.log(email, message);
        

        await transporter.sendMail({
            from: email, 
            to: process.env.GMAIL_USER, 
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
