'use client'
import React, { useState } from 'react';

const varieties = [
  {
    id: 1,
    name: 'Convencionales',
    products: [
      { title: 'Miel Entreriana', image: '/entrerios/er1.jpg' },
      { title: 'Miel de Campo', image: '/entrerios/er2.png' },
      { title: 'Miel Clásica', image: '/entrerios/er3.jpg' },
    ],
    description: `La miel convencional es un producto que se obtiene de la apicultura convencional, la cual se caracteriza por el uso de productos químicos en su proceso de producción.`,
  },
  {
    id: 2,
    name: 'Orgánica',
    products: [
      { title: 'Miel Orgánica Cordobesa', image: '/cordoba/c1.jpg' },
      { title: 'Miel Pura Orgánica', image: '/cordoba/c2.jpg' },
      { title: 'Miel Natural de Córdoba', image: '/cordoba/c3.jpg' },
    ],
    description: `La miel orgánica es un endulzante natural que se obtiene del néctar de las flores y se cosecha de las colmenas de abejas sin el uso de productos químicos.`,
  },
  {
    id: 3,
    name: 'Especial',
    products: [
      { title: 'Miel Especial Santafesina', image: '/santafe/sf1.jpeg' },
      { title: 'Miel Cruda', image: '/santafe/sf2.jpeg' },
      { title: 'Miel Multifloral', image: '/santafe/sf3.jpeg' },
    ],
    description: `La miel pura o cruda es la miel que las abejas producen sin ningún tipo de procesamiento o adición de ingredientes. Se trata de la miel más natural y saludable.`,
  },
];
const Varieties = () => {
  const [activeVariety, setActiveVariety] = useState(0);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-title font-title">Variedades de Miel</h2>
        <nav>
          {/* Navegación de variedades */}
          <ul className="flex justify-center space-x-4 flex-wrap">
            {varieties.map((variety, index) => (
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

        <div className="relative p-4">
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto mb-8">
            {varieties[activeVariety].description}
          </p>

          {/* Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {varieties[activeVariety].products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={`Producto ${index + 1}`}
                />
                <div className="p-4">
                  <p className="text-lg font-medium text-gray-800">{product.title}</p>
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