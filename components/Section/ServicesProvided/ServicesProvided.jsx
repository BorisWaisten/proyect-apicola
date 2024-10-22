'use client';
import React, { useState } from 'react';
import { services } from '@/data/section/services';

export default function ServicesProvided() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-12 min-h-screen bg-terciary text-secondary">
      <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="relative text-xl sm:text-2xl md:text-4xl lg:text-[3rem] font-bold my-5 z-10 italic font-title ">
          Servicios Brindados
        </h2>
        <nav className='my-20'>
          {/* Navegación de servicios con imágenes */}
          <ul className="grid grid-cols-3  gap-4 md:flex md:justify-center md:space-x-4 md:flex-wrap lg:flex lg:justify-center lg:space-x-4 lg:flex-wrap ">
            {services.map((service, index) => (
              <li key={service.id} className="mb-4 sm:mb-0 flex justify-center">
                <button
                  onClick={() => setActiveService(index)}
                  className={`flex flex-col items-center justify-center transition-transform transform ${
                    index === activeService ? 'scale-105' : 'scale-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-2 ${
                      index === activeService ? 'border-primary' : 'border-transparent hover:border-secondary'
                    }`}
                  />
                    <h3 className="text-xs  sm:text-sm md:text-base lg:text-lg font-semibold mt-2">
                      {service.name}
                    </h3>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative p-4 max-w-[80vw] m-20 h-[15vh]">
          {/* Descripción del servicio */}
          <p className="relative text-center text-[0.6rem] sm:text-xs md:text-sm lg:text-sm lg:w-full sm:w-[80vw] md:w-[70vw] z-10">
          {services[activeService].description}
          </p>
        </div>
      </div>
    </section>
  );
}