'use client';
import React, { useState } from 'react';

// Datos del proceso productivo
const productionSteps = {
  es: [
    {
      id: 1,
      name: 'Apiarios',
      description:
        'Los apiarios están localizados en áreas ricas en biodiversidad, donde las abejas recolectan néctar para producir miel de alta calidad.',
      products: [
        {
          title: 'Ubicación de Apiarios',
          image: '/images/apiarios.jpg',
          description: 'Apiarios ubicados en regiones protegidas y libres de pesticidas.',
        },
        {
            title: 'Ubicación de Apiarios',
            image: '/images/apiarios.jpg',
            description: 'Apiarios ubicados en regiones protegidas y libres de pesticidas.',
          },
          {
            title: 'Ubicación de Apiarios',
            image: '/images/apiarios.jpg',
            description: 'Apiarios ubicados en regiones protegidas y libres de pesticidas.',
          },
      ],
    },
    {
      id: 2,
      name: 'Establecimientos',
      description:
        'En los establecimientos, la miel es cuidadosamente procesada bajo estrictas normas de higiene y calidad.',
      products: [
        {
          title: 'Centro de Procesamiento',
          image: '/images/establecimientos.jpg',
          description: 'Modernas instalaciones para el procesamiento de miel.',
        },
        {
            title: 'Centro de Procesamiento',
            image: '/images/establecimientos.jpg',
            description: 'Modernas instalaciones para el procesamiento de miel.',
          },
          {
            title: 'Centro de Procesamiento',
            image: '/images/establecimientos.jpg',
            description: 'Modernas instalaciones para el procesamiento de miel.',
          },
      ],
    },
    {
      id: 3,
      name: 'Envasado',
      description:
        'La miel es envasada de forma natural, sin aditivos, conservando todas sus propiedades.',
      products: [
        {
          title: 'Envasado Natural',
          image: '/images/envasado.jpg',
          description: 'Envasado que garantiza la pureza y frescura de la miel.',
        },
        {
            title: 'Envasado Natural',
            image: '/images/envasado.jpg',
            description: 'Envasado que garantiza la pureza y frescura de la miel.',
          },
          {
            title: 'Envasado Natural',
            image: '/images/envasado.jpg',
            description: 'Envasado que garantiza la pureza y frescura de la miel.',
          },
      ],
    },
    {
      id: 4,
      name: 'Comercialización',
      description:
        'El producto final llega a las tiendas locales y mercados internacionales, manteniendo su calidad intacta.',
      products: [
        {
          title: 'Distribución y Ventas',
          image: '/images/comercializacion.jpg',
          description: 'Distribución tanto a nivel local como internacional.',
        },
        {
            title: 'Distribución y Ventas',
            image: '/images/comercializacion.jpg',
            description: 'Distribución tanto a nivel local como internacional.',
          },
          {
            title: 'Distribución y Ventas',
            image: '/images/comercializacion.jpg',
            description: 'Distribución tanto a nivel local como internacional.',
          },
      ],
    },
  ],
};

const Production = ({ language = 'es' }) => {
  const [activeStep, setActiveStep] = useState(0);

  const selectedSteps = productionSteps[language] || [];

  if (selectedSteps.length === 0) {
    return <p>No hay datos disponibles para el idioma seleccionado.</p>;
  }

  return (
    <section className="py-12 bg-terciary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary font-title">
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
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto mb-8">
            {selectedSteps[activeStep]?.description}
          </p>

          {/* Detalles y productos del paso activo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedSteps[activeStep]?.products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  className="w-full h-[30vh] md:h-[50vh] lg:h-[50vh] object-cover"
                  src={product.image}
                  alt={`Producto ${index + 1}`}
                />
                <div className="p-4 h-[10vh] text-center">
                  <p className="font-medium text-cuarteto">{product.title}</p>
                </div>
                <div className="p-4">
                  <p className="text-xs md:text-sm lg:text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
