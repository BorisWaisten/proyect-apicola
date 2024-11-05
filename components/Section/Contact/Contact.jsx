'use client';
import './contact.css';

import { useState,useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/section/contact';
import Image from 'next/image';
export default function Contact() {
    const { language } = useLanguage();
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const t = translations[language] || translations['es'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: email,
                    subject: 'Asunto del correo', // Reemplaza con un asunto específico o dinámico
                    text: message,
                }),
            });
    
            const result = await res.json();
    
            if (result.id) {
                setStatus(t.emailSentSuccess);
            } else {
                setStatus(t.emailSentError);
            }
        } catch (error) {
            console.error(error);
            setStatus(t.emailSentError);
        }
    };
    
    

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(''), 2000); // Oculta el mensaje después de 5 segundos
            return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta o el mensaje cambia
        }
    }, [status]);

    return (
        <div id="contact" className="flex flex-col items-center justify-center min-h-screen p-8">
            <h2 className="relative text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-title font-bold my-5 md:lg:mb-20 z-10 italic font-title">
                 {t.contact}
            </h2>
            <p className="text-base sm:text-lg text-center text-terciary max-w-2xl mb-8">
                {t.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-y-8 md:gap-x-4 md:grid md:grid-cols-2 max-w-7xl">
                {/* Columna 1: Información de contacto */}
                <div className="w-full max-w-md flex justify-center md:justify-start md:h-full ">
                    <div className="info flex flex-col items-center justify-center bg-terciary p-6 rounded-lg shadow-lg w-full">
                        <h3 className="text-secondary md:text-xl font-bold mb-4">
                            {t.contactInfo}
                        </h3>
                        <p className="flex w-full text-secondary text-xs md:text-lg mb-2">
                            <Image
                                src="/logoEmail.png"
                                width={30}
                                height={30}
                                alt="logoEmail"
                                className="w-[4vh] mr-1 sm:w-[5vh] sm:mr-2 md:w-[7vh] md:mr-2 lg:w-[7vh] lg:mr-2"
                            />
                            <strong className='my-auto'>trade@argentinehoney.com</strong>
                        </p>
                        <p className="flex  w-full text-secondary text-xs md:text-lg mb-2">
                            <Image
                                    src="/logoPhone.png"
                                    width={30}
                                    height={30}
                                    alt="logoEmail"
                                    className="w-[2.5vh] ml-1 mr-3 sm:w-[3vh] md:w-[5vh] md:ml-2 md:mr-4 lg:w-[5vh] lg:ml-2 lg:mr-4"
                                />
                            <strong className='my-auto'>+5491140315794</strong>
                        </p>
                    </div>
                </div>

                {/* Columna 2: Formulario de contacto */}
                <div className="w-full max-w-md flex justify-center md:justify-start">
                    <div className="flex flex-col items-center justify-center bg-terciary p-6 rounded-lg shadow-lg w-full">
                        <h3 className="text-secondary text-xl font-bold mb-4">{t.sendMessage}</h3>
                        <form onSubmit={handleSubmit} className="w-full max-w-md">
                            <div className="mb-4">
                                <label className="block text-secondary text-sm md:text-lg font-bold mb-2" htmlFor="email">
                                    {t.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 text-cuarteto border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder={t.emailPlaceholder}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-secondary text-sm md:text-lg font-bold mb-2" htmlFor="message">
                                    {t.message}
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-3 py-2 text-cuarteto border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder={t.messagePlaceholder}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                {t.sendMessage}
                            </button>
                        </form>
                        {status && <p className="text-secondary mt-4">{status}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
