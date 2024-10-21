'use client'

import React, { useState } from 'react'
import Image from 'next/image';

export default function Biome() {
  const images = [
    '/images/biome6.jpeg',
    '/images/biome7.jpg',
    '/images/biome9.jpg',
    '/images/biome3.jpg',
    '/images/biome10.jpg',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="about" className="relative flex flex-col items-center justify-center h-auto">
      <div className="text-center w-full md:w-3/4 lg:w-3/4">
        <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold mb-6 font-title">Biome</h2>
        <p className="relative text-xs sm:text-sm md:text-base lg:text-lg">
          Nuestros apiarios se encuentran localizados en entornos naturales, cerca de bosques nativos y humedales de la región del Paraná y Chaco argentinos, espacios únicos naturales con gran biodiversidad, lejos de fuentes de contaminación y libres de pesticidas.
        </p>
        <p className="relative text-xs sm:text-sm md:text-base lg:text-lg">
          La Miel extraída de dicho bioma único a nivel mundial, nos permite obtener un producto milenario conocido por sus grandes propiedades medicinales, asimismo nos permite obtener una amplia variedad de mieles con diversas intensidades, aromas y colores, 100% naturales.
        </p>
        <p className="relative text-xs sm:text-sm md:text-base lg:text-lg">
          Nuestra firme filosofía de RESPETO POR EL MEDIOAMBIENTE Y LA ALIMENTACIÓN CONSCIENTE nos llevó a elaborar mieles orgánicas y certificadas libre de gluten.
        </p>
      </div>

      {/* Carrusel de imágenes */}
      <div className="relative w-full  mt-8">
        <div className="overflow-hidden relative">
        <Image
            src={images[activeIndex]}
            alt={`Biome image ${activeIndex + 1}`}
            width={1600}  // Ajusta el ancho de la imagen para mayor calidad
            height={900}  // Ajusta la altura según sea necesario
            quality={100}  // Calidad máxima
            className="w-full h-[70vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-lg transition-all duration-500 transform hover:scale-105 hover:brightness-110"
            priority
          />
          
          {/* Indicadores sobre la imagen */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1 rounded-full"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
