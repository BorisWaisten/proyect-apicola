'use client';
import React, { useState } from 'react';
import ArgMaps from "./ArgMaps";
import { features } from "@/data/section/about";

const Empresas = ({ provincia }) => (
  <div className='shadow-lg rounded-lg text-center h-full  p-4'>
    <h1 className="text-xl font-semibold mb-4">{provincia.name}</h1>
    
    {provincia.empresas.list.map((empresa) => (
      <div key={empresa.id} className="mb-4   h-[10vh] flex justify-center md:mx-auto md:justify-between lg:justify-between items-center">
        {/* Logo de la empresa */}
        <img src={empresa.logo} alt={empresa.description} className="w-[10vh] mr-4 object-contain" />
        {/* Descripción de la empresa */}
        <p className="w-full md:w-[15vh] lg:w-[15vh]">{empresa.description}</p>
        {empresa.redes && (
            <empresa.redes />
        )}
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
      <div className='text-center'>
        <div className="absolute top-0 left-0 w-full min-h-screen">
          <img 
            src="/fondoAbout.png" 
            alt="fondoAbout" 
            className="w-full h-full object-cover opacity-50" 
          />
          {/* Gradiente superpuesto */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100"></div>
        </div>
        <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold mb-6 z-10 font-title">Sobre Nosotros</h2>
        <p className="relative text-xs sm:text-sm md:text-base lg:text-lg w-[90vw] sm:w-[80vw] md:w-[70vw] text-center z-10">
        Somos el Grupo Apícola de la Región Centro Argentina, una sólida unión de 8 empresas de apicultores locales, provenientes de tres provincias diferentes de la República Argentina. Esta colaboración estratégica nos permite combinar nuestras fortalezas y experiencia para ofrecer productos y servicios de calidad al mundo. 
        Con más de 30 años de experiencia, desarrollamos productos apícolas en Biomas únicos y naturales, asimismo garantizamos la trazabilidad de nuestros productos y el cumplimiento de los más altos estándares de calidad, lo que nos permite un reconocimiento único a nivel nacional e internacional. 
        Actualmente, exportamos a más de 10 países del mundo, productos naturales sin adulterantes, con sabores diferenciados y una calidad única, ofreciendo mieles de múltiples orígenes botánicos desde monofloral, cremosa, pradera, montaña, etc.
        </p>
      </div>

      <div className="relative z-10 mt-8 w-full">
        <div className="grid grid-cols-1 gap-4 md:flex md:justify-center lg:flex lg:justify-center md:h-[70vh] lg:h-[70vh]">
          <div className="relative mx-auto max-w-lg flex justify-center">
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
