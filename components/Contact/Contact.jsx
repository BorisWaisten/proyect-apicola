'use client';

import { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            const result = await res.json();

            if (result.success) {
                setStatus('Correo enviado exitosamente.');
            } else {
                setStatus('Error al enviar el correo.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error al enviar el correo.');
        }
    };

    return (
        <div id="contact" className="flex flex-col items-center justify-center min-h-screen p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contacto</h2>
            <p className="text-lg text-center text-gray-600 max-w-2xl mb-8">
                Si tienes alguna consulta, puedes contactarnos a través de nuestras redes sociales o por correo electrónico.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Columna 1: Información de contacto */}
                <div className="relative mx-auto w-full h-auto max-w-lg flex justify-center">
                    <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-white text-2xl font-bold mb-4">Información de contacto</h3>
                        <p className="text-white text-lg mb-2">
                            <strong>Email:</strong> 
                        </p>
                        <p className="text-white text-lg mb-2">
                            <strong>Celular:</strong> +123 456 7890
                        </p>
                    </div>
                </div>

                {/* Columna 2: Formulario de contacto */}
                <div className="relative mx-auto w-full h-auto max-w-lg flex justify-center">
                    <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-white text-2xl font-bold mb-4">Enviar un mensaje</h3>
                        <form onSubmit={handleSubmit} className="w-full max-w-md">
                            <div className="mb-4">
                                <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
                                    Tu correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Tu correo"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white text-lg font-bold mb-2" htmlFor="message">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Escribe tu mensaje aquí..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                        {status && <p className="text-white mt-4">{status}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
