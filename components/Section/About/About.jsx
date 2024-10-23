'use client';
import React, { useState } from 'react';
import ArgMaps from "./ArgMaps";
import { features } from "@/data/section/about";
const Empresas = ({ provincia }) => (
  <div className='shadow-lg rounded-lg text-center h-full p-4'>
    <h1 className=" text-xl md:text-2xl lg:text-2xl font-semibold mb-4">{provincia.name}</h1>

    {provincia.empresas.list.map((empresa) => (
      <div key={empresa.id} className="grid grid-cols-3 gap-4 items-center mb-4 h-[10vh]">
        {/* Columna 1: Logo de la empresa */}
        <div className="flex justify-center">
          <img src={empresa.logo} alt={empresa.description} className="w-[10vh] object-contain" />
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
  const [provincia, setProvincia] = useState(features[0]);

  const handleClick = (id) => {
    setProvincia(features[parseInt(id) - 1]);
  };

  return (
    <div id="about" className="relative flex flex-col items-center justify-center h-auto p-8">
      {/* Imagen de fondo con el degradado */}
      <div className='text-center h-[70vh]'>
        <div className="absolute top-0 left-0 w-full min-h-screen">
          <img 
            src="/fondoAbout.png" 
            alt="fondoAbout" 
            className="w-full min-h-screen object-cover opacity-50" 
          />
          {/* Gradiente superpuesto */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100"></div>
        </div>
          <h2 className="relative  text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-title font-bold my-5 lg:md:mb-20 z-10 italic font-title ">
              Sobre Nosotros
          </h2>
          <div className='grid grid-cols-1 gap-4 md:lg:mx-20'>
            <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm  z-10">
            Somos el <b>Grupo Apícola de la Región Centro Argentina</b>, una sólida unión de <b>ocho empresas de apicultores locales</b> provenientes de <b>tres provincias</b> diferentes de la República Argentina. Esta <b>colaboración estratégica</b> nos permite combinar nuestras fortalezas y experiencia para ofrecer productos y servicios de calidad al mundo.
            </p>
            <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm  z-10">
            Con más de <b>30 años de experiencia</b>, desarrollamos productos apícolas en <b>biomas únicos y naturales</b>, garantizando la <b>trazabilidad</b> de nuestros productos y el cumplimiento de los más altos <b>estándares de calidad</b>. Esto nos ha otorgado un <b>reconocimiento destacado</b> tanto a nivel nacional como internacional.
            </p>
            <p className="relative text-justify text-[0.6rem] sm:text-xs md:text-sm lg:text-sm  z-10">
            Actualmente, exportamos a <b>más de diez países del mundo</b>, ofreciendo <b>productos naturales sin adulterantes</b>, con <b>sabores diferenciados</b> y una calidad única. Contamos con mieles de <b>múltiples orígenes botánicos</b>, incluyendo monofloral, cremosa, pradera, montaña, entre otras variedades.
            </p>
          </div>

      </div>

      <div className="relative z-10 mt-8 w-full">
        <div className="grid grid-cols-1 gap-4 md:flex md:justify-center lg:flex lg:justify-center md:h-[70vh] lg:h-[70vh]">
          <div className="relative mx-auto max-w-lg flex justify-center argentina-flag-background border-terciary border-2">
            <p className="absolute text-xs sm:text-sm md:text-sm lg:text-sm right-2 top-2 border-2 border-tertiary rounded-tl-lg rounded-r-lg animate-flash">
              ¡Haz click en el mapa!
            </p>
            <ArgMaps handleClick={handleClick} />
          </div>
          <div className=' mx-auto w-full h-auto md:w-[40vw]  md:h-full lg:h-full lg:w-[40vw]'>
            <Empresas provincia={provincia} />
          </div>
        </div>
      </div>
    </div>
  );
}
