'use client'
import React,{ useEffect, useState } from 'react';

import { certificates } from '@/data/images';
import ArgMaps from './ArgMaps';
import {features} from '@/data/production';

export default function Production() {
  const [provincia,setProvincia] = useState({
    id:0,
    name:'',
    empresas:{title:'',list:[]}
  });

  useEffect(() => {
    setProvincia({
      id:0,
      name:'',
      empresas:{title:'',list:[]}
    });
  }, []);

  const handleClick = (id) => {
    setProvincia(features[parseInt(id)-1]);
  }

  
    return (
        <section className="py-12" id="production">         
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Producción en Argentina</h2>
            <div className='text-terciary '>
              La produccion se centra en 8 empresas distribuidas a lo largo y ancho de 3 provincias.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
              <div className="relative mx-auto w-full h-auto max-w-lg flex justify-center">
                <ArgMaps handleClick={handleClick} />
              </div>
              <div className='text-terciary'>
                <h1 className="text-xl font-semibold mb-4">{provincia.name}</h1>
                <h3>{provincia.empresas.title}</h3>
                {
                  provincia.empresas.list.map((empresa) => (
                    <div key={empresa.id} className="mb-4">
                      <p >{empresa.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div id='certificates' >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-8">Certificados</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.id}
                    className="flex flex-col items-center justify-center p-4 "
                  >
                    <img
                      src={certificate.src}
                      className="w-20 h-20 mb-4 "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
}