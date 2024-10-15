'use client';
import React, { useState } from 'react';
import ArgMaps from './ArgMaps';
import { features,companySupport } from '@/data/production';
import { certificates } from '@/data/images';

// Componente Empresas
const Empresas = ({ provincia }) => (
  <div className='shadow-lg rounded-lg h-[40vh] p-4'>
    <h1 className="text-xl font-semibold mb-4">{provincia.name}</h1>
    
    {provincia.empresas.list.map((empresa) => (
      <div key={empresa.id} className="mb-4 flex items-center">
        {/* Logo de la empresa */}
        <img src={empresa.logo} alt={empresa.description} className="w-[10vh] mr-4 object-contain" />
        {/* Descripción de la empresa */}
        <p>{empresa.description}</p>
      </div>
    ))}
  </div>
);

const EmpresasQueApoyan = () => (
  <div id="company-support">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Compañia que apoyan</h2>
      <div className="grid grid-cols-3 gap-4">
        {companySupport.map((company) => (
          <div key={company.id} className="flex flex-col items-center justify-center p-4">
            <img src={company.src} className="w-[10vh] mb-4" alt={`Compañia ${company.id}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Componente Certificados
const Certificados = () => (
  <div id="certificates">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Certificados</h2>
      <div className="grid grid-cols-3 gap-4">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="flex flex-col items-center justify-center p-4">
            <img src={certificate.src} className="w-[10vh] mb-4" alt={`Certificado ${certificate.id}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Production() {
  const [provincia, setProvincia] = useState(features[0]);

  const handleClick = (id) => {
    setProvincia(features[parseInt(id) - 1]);
  };

  return (
    <section className="py-12" id="production">
      <div className="max-w-7xl mx-auto  pb-10 px-4 sm:pb-4 sm:px-6  md:pb-4 lg:pb-4 lg:px-8 text-center">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold pb-2">Producción en Argentina</h2>
        <h4 className="text-xs sm:text-sm md:text-md lg:text-lg w-[70vw] sm:w-[80vw] md:w-[80vw] lg:w-[90vw] mx-auto">
          La producción se centra en diferentes empresas a lo largo y ancho de 3 provincias.
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative mx-auto w-full h-[50vh] max-w-lg flex justify-center">
            <ArgMaps handleClick={handleClick} />
          </div>
          <Empresas provincia={provincia} />
        </div>
      </div>
      <EmpresasQueApoyan />
      <Certificados />
    </section>
  );
}