'use client'
import React, { useState } from 'react';

const varieties = [
  {
    id: 1,
    products: [
      '/entrerios/er1.jpg',
      '/entrerios/er2.png',
      '/entrerios/er3.jpg',
    ],
  },
  {
    id: 2,
    products: [
      '/cordoba/c1.jpg',
    ],
  },
  {
    id: 3,
    products: [
      '/santafe/sf1.jpeg'
    ],
  },
];

const Varieties = () => {
  const [activeVariety, setActiveVariety] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);

  const handleNextVariety = () => {
    setActiveVariety((prev) => (prev + 1) % varieties.length);
    setActiveProduct(0); // Reset product index when changing variety
  };

  const handlePrevVariety = () => {
    setActiveVariety((prev) => (prev - 1 + varieties.length) % varieties.length);
    setActiveProduct(0); // Reset product index when changing variety
  };

  const handleNextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % varieties[activeVariety].products.length);
  };

  const handlePrevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + varieties[activeVariety].products.length) % varieties[activeVariety].products.length);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Variedades de Producto</h2>

        <div className="relative">
          <h3 className="text-xl font-semibold text-center mb-4">Variedad {varieties[activeVariety].id}</h3>
          <img
            className="w-full h-48 object-cover rounded"
            src={varieties[activeVariety].products[activeProduct]}
            alt={`Producto ${activeProduct + 1}`}
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={handlePrevProduct}
              className="bg-gray-700 text-white p-2 rounded-full"
            >
              ❮
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={handleNextProduct}
              className="bg-gray-700 text-white p-2 rounded-full"
            >
              ❯
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevVariety}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Variedad Anterior
          </button>
          <button
            onClick={handleNextVariety}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Siguiente Variedad
          </button>
        </div>
      </div>
    </section>
  );
};

export default Varieties;
