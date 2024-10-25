'use client';
import React, { useState } from 'react';
import ArgMaps from "./ArgMaps";
import { features } from "@/data/section/about";
import { about } from '@/data/section/about';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

const Empresas = ({ provincia, language }) => (
  <div className='shadow-lg rounded-lg text-center h-full p-4'>
    <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4">{about[language].subtitle}</h1>

    {provincia.empresas.list.map((empresa) => (
      <div key={empresa.id} className="grid grid-cols-3 gap-4 items-center mb-4 h-[10vh]">
        {/* Columna 1: Logo de la empresa */}
        <div className="flex justify-center">
          <Image 
            src={empresa.logo} 
            alt={empresa.description} 
            width={60} 
            height={50} 
            className="object-contain"
            quality={85} 
            priority={true} 
          />
        </div>

        {/* Columna 2: Descripción de la empresa */}
        <div className="">
          <p className='text-center'>{empresa.description}</p>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="flex justify-center">
          {empresa.redes ? (
            <empresa.redes />
          ) : (
            <div className="w-full"></div> /* Espacio en blanco si no hay redes */
          )}
        </div>
      </div>
    ))}
  </div>
);

export default function About() {
  const { language} = useLanguage();
  const [provincia, setProvincia] = useState(features[0]);

  const handleClick = (id) => {
    setProvincia(features[parseInt(id) - 1]);
  };

  return (
    <div id="about" className="relative flex flex-col items-center justify-center h-auto p-8">
      {/* Imagen de fondo con el degradado */}
      <div className='text-center '>
        <div className="absolute top-0 left-0 w-full min-h-screen">
          <Image 
            src="/fondoAbout.png" 
            alt="fondoAbout" 
            layout="fill"
            objectFit="cover"
            className="opacity-50" 
            quality={85}
            priority={true}
          />
          {/* Gradiente superpuesto */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100"></div>
        </div>
        <h2 className="relative text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-title font-bold my-5 lg:md:mb-20 z-10 italic font-title">
          {about[language].title}
        </h2>
        <div className='grid grid-cols-1 gap-4 md:lg:mx-20'>
          <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm z-10">
            {about[language].paragraph1}
          </p>
          <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm z-10">
            {about[language].paragraph2}
          </p>
          <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm z-10">
          {about[language].paragraph3}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-10 md:mt-14 lg:mt-20 w-full">
        <div className="grid grid-cols-1 gap-4 md:flex md:justify-center lg:flex lg:justify-center md:h-[70vh] lg:h-[70vh]">
          <div className="relative mx-auto max-w-lg flex justify-center argentina-flag-background border-terciary border-2">
            <p className="absolute text-xs sm:text-sm md:text-sm lg:text-sm right-2 top-2 border-2 border-tertiary rounded-tl-lg rounded-r-lg animate-flash">
              {about[language].poster}
            </p>
            <ArgMaps handleClick={handleClick} />
          </div>
          <div className='mx-auto w-full h-auto md:w-[40vw] md:h-full lg:h-full lg:w-[40vw]'>
            <Empresas provincia={provincia} language={language}/>
          </div>
        </div>
      </div>
    </div>
  );
}
