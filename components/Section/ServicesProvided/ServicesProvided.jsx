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
          {language === 'es' ? 'Servicios Ofrecidos' : 'Services Provided'}
        </h2>
        <nav className='mt-10 sm:mt-0 md:mt-0 lg:mt-0 md:my-14 lg:my-14'>
          {/* Navegación de servicios con imágenes */}
          <ul className="flex justify-center space-x-4 flex-wrap">
            {selectedServices.map((service, index) => (
              <li
                key={service.id}
                className=" mb-5 w-[12vh] h-[15vh] sm:w-[12vh] sm:h-[12vh] md:w-[22vh] md:h-[15vh] lg:w-[25vh] lg:h-auto"
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
                    className={`w-[7vh]  h-auto sm:w-[12vh] sm:h-[12vh] md:w-[12vh] md:h-auto lg:w-[12vh] lg:h-[12vh] object-cover rounded-full border-2 ${
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

        <div className="relative flex justify-center mx-auto p-4 h-[12vh] sm:h-[12vh] lg:h-[20vh] md:h-[20vh] w-[40vh] sm:w-[70vh] md:w-[70vh] lg:w-[100vh]">
          {/* Descripción del servicio */}
          <p className="text-justify text-[0.7rem] sm:text-xs md:text-sm lg:text-sm">
            {selectedServices[activeService].description}
          </p>
        </div>
      </div>
    </section>
  );
}
