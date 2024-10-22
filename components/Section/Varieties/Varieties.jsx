'use client';
import React, { useState } from 'react';
import { varieties } from '@/data/section/varieties';

const Varieties = ({ language = 'es' }) => {
  const [activeVariety, setActiveVariety] = useState(0);

  // Asegúrate de que varieties[language] existe antes de intentar mapearlo
  const selectedVarieties = varieties[language] || [];
  console.log(varieties);

  if (selectedVarieties.length === 0) {
    
    return <p>No hay datos disponibles para el idioma seleccionado.</p>;
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="relative text-center text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-title font-bold my-5 mb-14 z-10 italic font-title ">
        {language === 'es' ? 'Variedades de Miel' : 'Honey Varieties'}
        </h2>

        {/* Navegación de variedades */}
        <nav>
          <ul className="flex justify-center space-x-4 flex-wrap">
            {selectedVarieties.map((variety, index) => (
              <li key={variety.id} className="mb-4 sm:mb-0">
                <button
                  onClick={() => setActiveVariety(index)}
                  className={`px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-colors duration-300 rounded-lg ${
                    index === activeVariety
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary hover:bg-terciary'
                  }`}
                >
                  {variety.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Descripción de la variedad activa */}
        <div className="relative p-4">
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto mb-8">
            {selectedVarieties[activeVariety]?.description}
          </p>

          {/* Productos de la variedad activa */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedVarieties[activeVariety]?.products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={`Producto ${index + 1}`}
                />
                <div className="p-4 h-[10vh] text-center">
                  <p className=" font-medium text-cuarteto">{product.title}</p>
                </div>
                <div className="p-4">
                  <p className=" text-xs md:text-sm lg:text-sm ">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Varieties;
