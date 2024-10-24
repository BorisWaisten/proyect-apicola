'use client'

import React, { useState } from 'react'
import Image from 'next/image';

export default function Biome() {
  const biomes = [
    {
      id: 1,
      name: 'Bosques Nativos Centro Argentina',
      src:'/images/biome6.jpeg',
    },
    {
      id: 2,
      name: 'Campos de Cordoba',
      src:'/images/biome1.jpg',
    },
    {
      id: 3,
      name: 'Campos de Santa Fe',
      src:'/images/biome2.webp',
    },
    {
      id: 3,
      name: 'Bosques Nativos de Entre Rios',
      src:'/images/biome4.jpg',
    },
    {
      id: 3,
      name: 'Campos de Santa Fe',
      src:'/images/biome10.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? biomes.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === biomes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="about" className="relative flex flex-col items-center justify-center h-auto ">
      <div className="text-center w-full px-8 md:px-8 lg:px-0">
        <h2 className="relative text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-title font-bold my-5 md:lg:mb-20 z-10 italic font-title ">
         Bioma
        </h2>
        <div className='grid grid-cols-1 gap-4 md:lg:mx-20'>
        <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm z-10">
        Nuestros apiarios se encuentran localizados en <b>entornos naturales</b>, cerca de <b>bosques nativos</b> y <b>humedales</b> de la región del <b>Paraná y Chaco argentinos</b>, espacios únicos naturales con gran biodiversidad, <b>lejos de fuentes de contaminación y libres de pesticidas</b>.
        </p>
        <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm  z-10">
        La <b>Miel</b> extraída de dicho <b>bioma único a nivel mundial</b> nos permite obtener un <b>producto milenario</b> conocido por sus <b>grandes propiedades medicinales</b>. Además, nos permite obtener una <b>amplia variedad de mieles</b> con diversas <b>intensidades, aromas y colores</b>, 100% naturales.
        </p>
        <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm  z-10">
        Nuestra firme filosofía de <b>RESPETO POR EL MEDIOAMBIENTE</b> y la <b>ALIMENTACIÓN CONSCIENTE</b> nos llevó a elaborar <b>mieles orgánicas</b> y <b>certificadas libre de gluten</b>.
        </p>

        </div>
      </div>

      {/* Carrusel de imágenes */}
      <div className="relative w-full  mt-8 ">
        <div className="overflow-hidden relative">
        <Image
          src={biomes[activeIndex].src}  // Cambia aquí: accede solo a la propiedad src
          alt={biomes[activeIndex].name || `Biome image ${activeIndex + 1}`}
          width={1600}  // Ajusta el ancho de la imagen para mayor calidad
          height={900}  // Ajusta la altura según sea necesario
          quality={100}  // Calidad máxima
          className="w-full h-[40vh] md:h-[70vh] lg:h-[80vh] object-cover lg:object-fill transition-all duration-500 transform hover:scale-105 hover:brightness-110"
          priority
        />          
          {/* Indicadores sobre la imagen */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {biomes.map((_, index) => (
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1  rounded-full"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
