'use client';
import React, { useState } from 'react';
import { varieties } from '@/data/section/varieties';
import { useLanguage } from '@/context/LanguageContext';

const Varieties = () => {
  const { language } = useLanguage();
  const [activeVariety, setActiveVariety] = useState(0);

  const selectedVarieties = varieties[language] || [];

  if (selectedVarieties.length === 0) {
    return <p>No hay datos disponibles para el idioma seleccionado.</p>;
  }

  const activeProducts = selectedVarieties[activeVariety]?.products.filter(
    (product) => product.description
  );

  return (
    <section className="py-12 sm:min-h-screen md:min-h-screen lg:min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="relative text-center text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-title font-bold my-5 mb-14 z-10 italic font-title">
          {language === 'es'
            ? 'Variedades de Mnel y comercialización'
            : 'Varieties Of Honey And Commercialization'}
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
                      : 'text-terciary hover:text-primary hover:bg-terciary'
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
          <div
            className={`${
              activeProducts.length === 1
                ? 'flex justify-center' // Para centrar un solo producto
                : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '
            } text-terciary`}
          >
            {activeProducts.map((product, index) => (
              <div
                key={index}
                className="bg-primary rounded-lg mx-auto sm:mx-0 md:mx-0 lg:mx-0 w-[40vh] sm:w-[50vh] md:w-[50vh]  lg:w-[60vh] shadow-md shadow-terciary hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {product.title && (
                  <div className="p-4 h-[7vh] sm:h-[12vh] md:h-[10vh] lg:h-[15vh] flex items-center justify-center">
                    <p className="text-sm lg:text-base font-semibold text-cuarteto">{product.title}</p>
                  </div>
                )}
                <div className= {`${activeProducts.length === 1 ? 'sm:h-[17vh] md:h-[17vh] lg:h-[17vh]  p-4 flex items-center justify-center' : 'p-4 h-[12vh] sm:h-[22vh] md:h-[25vh] lg:h-[25vh]'}`} >
                  <p className="text-xs  lg:text-sm ">
                    {product.description}
                  </p>
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
