'use client';
import React, { useState } from 'react';

const services = [
  {
    id: 1,
    name: 'Producción',
    description: `Producción natural en nuestros propios apiarios. Nos comprometemos a producir garantizando una producción sana y segura mediante la prohibición de antibióticos en las colmenas y el cuidado de su buen estado nutricional.`,
    image: '/logos/extraccion.png',
  },
  {
    id: 2,
    name: 'Extracción',
    description: `Contamos con más de 20.000 colmenas en producción, distribuidas en la provincia de Entre Ríos, Santa Fe y Córdoba, Argentina, desde donde obtenemos nuestra propia miel.`,
    image: '/logos/extraccion.png',
  },
  {
    id: 3,
    name: 'Laboratorio',
    description: `Garantizamos calidad y trazabilidad en todo el proceso de producción de nuestros productos apícolas.`,
    image: '/logos/laboratorio.png',
  },
  {
    id: 4,
    name: 'Fraccionamiento',
    description: `Ofrecemos envases de 1.5 kg, así como tambores a granel para comercialización.`,
    image: '/logos/extraccion.png',
  },
  {
    id: 5,
    name: 'Homogeneización',
    description: `Homogeneizamos nuestras mieles para garantizar una calidad consistente en cada lote.`,
    image: '/logos/extraccion.png',
  },
  {
    id: 6,
    name: 'Exportación',
    description: `Exportamos a más de 10 destinos internacionales, miel a granel y envasada con marcas propias y marca blanca.`,
    image: '/logos/exportacion.png',
  },
];

export default function ServicesProvided() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-title font-title">Servicios Brindados</h2>
        <nav>
          {/* Navegación de servicios */}
          <ul className="flex justify-center space-x-4 flex-wrap">
            {services.map((service, index) => (
              <li key={service.id} className="mb-4 sm:mb-0">
                <button
                  onClick={() => setActiveService(index)}
                  className={`px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-colors duration-300 rounded-lg ${
                    index === activeService
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary hover:bg-terciary'
                  }`}
                >
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative p-4">
          {/* Descripción del servicio */}
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto mb-8">
            {services[activeService].description}
          </p>

          {/* Imagen del servicio */}
          <div className="flex justify-center">
            <img
              className=" h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md"
              src={services[activeService].image}
              alt={services[activeService].name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}