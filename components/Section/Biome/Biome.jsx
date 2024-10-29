'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Biome() {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const biomes = [
    { id: 1, name: 'Bosques Nativos Centro Argentina', src: '/images/biome6.jpeg' },
    { id: 2, name: 'Campos de Córdoba', src: '/images/campo4.jpg' },
    { id: 3, name: 'Campos de Santa Fe', src: '/images/biome2.webp' },
    { id: 4, name: 'Campos de Entre Ríos', src: '/images/campo2.jpg' },
    { id: 5, name: 'Cosechando en Campos de Entre Ríos', src: '/images/campo5.jpg' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? biomes.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === biomes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="about" className="relative flex flex-col items-center justify-center h-auto" ref={sectionRef}>
      <div className="text-center w-full px-8 md:px-8 lg:px-0">
        <h2 className="relative text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-title font-bold my-5 md:lg:mb-20 z-10 italic font-title">
          {language === 'es' ? 'Bioma' : 'Biome'}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:lg:mx-20">
          <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm z-10">
            {language === 'es' ? (
              <>
                Nuestros apiarios se encuentran localizados en <b>entornos naturales</b>, cerca de <b>bosques nativos</b> y <b>humedales</b> de la región del <b>Paraná y Chaco argentinos</b>, espacios únicos naturales con gran biodiversidad, <b>lejos de fuentes de contaminación y libres de pesticidas</b>.
              </>
            ) : (
              <>
                Our apiaries are located in <b>natural environments</b>, near <b>native forests</b> and <b>wetlands</b> in the region of <b>Argentine Paraná and Chaco</b>, unique natural spaces with great biodiversity, <b>far from sources of pollution and free from pesticides</b>.
              </>
            )}
          </p>
          <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm z-10">
            {language === 'es' ? (
              <>
                La <b>Miel</b> extraída de dicho <b>bioma único a nivel mundial</b> nos permite obtener un <b>producto milenario</b> conocido por sus <b>grandes propiedades medicinales</b>. Además, nos permite obtener una <b>amplia variedad de mieles</b> con diversas <b>intensidades, aromas y colores</b>, 100% naturales.
              </>
            ) : (
              <>
                <b>Honey</b> extracted from this <b>unique biome on a global scale</b> allows us to obtain a <b>millenary product</b> known for its <b>great medicinal properties</b>. Additionally, it allows us to obtain a <b>wide variety of honeys</b> with different <b>intensities, aromas, and colors</b>, 100% natural.
              </>
            )}
          </p>
          <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm z-10">
            {language === 'es' ? (
              <>
                Nuestra firme filosofía de <b>RESPETO POR EL MEDIOAMBIENTE</b> y la <b>ALIMENTACIÓN CONSCIENTE</b> nos llevó a elaborar <b>mieles orgánicas</b> y <b>certificadas libre de gluten</b>.
              </>
            ) : (
              <>
                Our firm philosophy of <b>RESPECT FOR THE ENVIRONMENT</b> and <b>CONSCIOUS EATING</b> led us to produce <b>organic honeys</b> and <b>certified gluten-free</b> honey.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Carrusel de imágenes */}
      <div className="relative w-full mt-8">
        <div className="overflow-hidden relative">
          <Image
            src={biomes[activeIndex].src}
            alt={biomes[activeIndex].name || `Biome image ${activeIndex + 1}`}
            width={1200}
            height={900}
            quality={100}
            className="w-full h-[40vh] md:h-[70vh] lg:h-[95vh] object-cover lg:object-fill transition-all duration-700 ease-in-out transform hover:scale-105 hover:brightness-110"
            priority
          />
          <div className={`absolute bottom-4 left-0 right-0 flex justify-center space-x-2 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {biomes.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        <p
          className={`absolute start-0 bottom-0 text-justify text-secondary text-[0.5rem] sm:text-xs md:text-sm lg:text-sm z-10 p-2 `}
        >
          {biomes[activeIndex].name}
        </p>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1 rounded-full"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
