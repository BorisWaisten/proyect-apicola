'use client';
import React, { useState } from 'react';
import { services } from '@/data/section/services';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesProvided() {
  const {language} = useLanguage();
  const [activeService, setActiveService] = useState(0);

  // Asegúrate de que services[language] existe antes de intentar mapearlo
  const selectedServices = services[language] || [];

  return (
    <section className="py-12  bg-terciary text-secondary">
      <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="relative text-xl sm:text-2xl md:text-4xl lg:text-[3rem] font-bold my-5 z-10 italic font-title ">
          {language === 'es' ? 'Servicios Brindados' : 'Services Provided'}
        </h2>
        <nav className='my-20'>
          {/* Navegación de servicios con imágenes */}
          <ul className="grid grid-cols-3 gap-4 md:grid md:grid-cols-6 md:w-[140vh] lg:grid lg:grid-cols-6 lg:w-[150vh] mx-auto">
            {selectedServices.map((service, index) => (
              <li
                key={service.id}
                className="flex flex-col items-center mb-5 mx-auto w-[10vh] h-[10vh] sm:w-[12vh] sm:h-[12vh] md:w-[22vh] md:h-[15vh] lg:w-[25vh] lg:h-auto"
              >
                <button
                  onClick={() => setActiveService(index)}
                  className={`transition-transform transform ${
                    index === activeService ? 'scale-105' : 'scale-100 hover:scale-105'
                  }`}
                >
                  <Image
                    width={80}
                    height={80}
                    src={service.image}
                    alt={service.name}
                    className={`w-[10vh]  h-[10vh] sm:w-[12vh] sm:h-[12vh] md:w-[10vh] md:h-[10vh] lg:w-[12vh] lg:h-[12vh] object-cover rounded-full border-2 ${
                      index === activeService ? 'border-primary' : 'border-transparent hover:border-secondary'
                    }`}
                  />
                </button>
                <h3 className="text-center text-[0.8rem] sm:text-xs md:text-xs lg:text-sm font-semibold mt-2">
                  {service.name}
                </h3>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative flex justify-center mx-auto p-4 w-[40vh] sm:w-[70vh] md:w-[100vh] lg:w-[100vh]">
          {/* Descripción del servicio */}
          <p className="text-justify lg:md:h-10 text-[0.7rem] sm:text-xs md:text-sm lg:text-sm ">
            {selectedServices[activeService].description}
          </p>
        </div>
      </div>
    </section>
  );
}
