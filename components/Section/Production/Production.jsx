'use client';
import React, { useState } from 'react';
import { productionSteps } from '@/data/section/production';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Production = () => {
  const {language,toggleLanguage} = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const selectedSteps = productionSteps[language] || [];

  if (selectedSteps.length === 0) {
    return <p>No hay datos disponibles para el idioma seleccionado.</p>;
  }

  return (
    <section className="py-12 bg-terciary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="relative text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-secondary font-bold my-5 md:lg:mb-20 z-10 italic font-title">
      {language === 'es' ? 'Proceso Productivo' : 'Production Process'}
        </h2>

        {/* Navegación de pasos del proceso productivo */}
        <nav>
          <ul className="flex justify-center space-x-4 flex-wrap">
            {selectedSteps.map((step, index) => (
              <li key={step.id} className="mb-4 sm:mb-0">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-colors duration-300 rounded-lg ${
                    index === activeStep
                      ? 'bg-primary text-terciary shadow-lg'
                      : 'text-secondary hover:text-primary '
                  }`}
                >
                  {step.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Descripción del paso activo */}
        <div className="relative p-4">

          {/* Detalles y productos del paso activo */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedSteps[activeStep]?.products.map((product, index) => (
              <div key={index}>
                <Image
                  width={300}
                  height={300}
                  quality={100}
                  className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh] object-cover shadow-md rounded-lg shadow-primary hover:shadow-xl transition-shadow duration-300 "
                  src={product.image}
                  alt={`Producto ${index + 1}`}
                />     
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
