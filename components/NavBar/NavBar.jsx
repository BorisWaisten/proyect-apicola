'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Importar el componente Image de Next.js
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { comfortaa } from '@/app/fonts/font';

export default function Navbar({ sections }) {
  const { language, toggleLanguage } = useLanguage();
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const scrollThreshold = 10; // Umbral mínimo para activar el scroll
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
  
      // Si estás cerca de la parte superior, mantén el navbar visible
      if (currentScrollPos < scrollThreshold) {
        setShowNavbar(true);
        return;
      }
  
      if (prevScrollPos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      prevScrollPos = currentScrollPos;
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  // Asignar las secciones en base al idioma
  const navItems = sections[language] || {};

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-primary text-white z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[12vh] sm:h-[12vh] md:h-[15vh] lg:h-[15vh] items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image
                src="/logoNavBar.jpg"
                alt="Logo"
                width={120} // Ajusta el tamaño según el diseño
                height={120} // Ajusta el tamaño según el diseño
                className="w-[8vh] sm:w-[10vh] md:w-[10vh] lg:w-[12vh] rounded-full"
                quality={100} // Define la calidad de la imagen
                priority={true} // Prioriza la carga de la imagen
              />
            </a>
          </div>

          {/* Menú de Navegación (Responsive) */}
          <div className="hidden md:flex md:space-x-4 ">
            {Object.keys(navItems).map((item) => (
              <a
                href={`#${item}`}
                key={item}
                className= {`relative py-2 text-xs  md:text-xs lg:text-sm ${comfortaa.className}  text-black hover:text-secondary after:absolute after:bg-cuarteto after:w-full after:h-0.5 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out`}
              >
                <b>
                  {navItems[item]}
                </b>
              </a>
            ))}
          </div>

          {/* Botón del Menú Hamburguesa para pantallas móviles */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-secondary hover:text-terciary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono de menú hamburguesa */}
              {isMobileMenuOpen ? (
                <svg
                  className="h-[3vh] w-[3vh]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-[3vh] w-[3vh]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Right-side Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle language={language} onLanguageToggle={toggleLanguage} />
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 space-y-1 sm:px-3">
            {Object.keys(navItems).map((item) => (
              <a
                href={`#${item}`}
                key={item}
                className="block px-3 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-base font-medium text-black hover:bg-secondary hover:text-terciary"
              >
                {navItems[item]}
              </a>
            ))}
          </div>

          {/* Language Toggle para móviles */}
          <div className="flex justify-start pl-6 py-4">
            <LanguageToggle language={language} onLanguageToggle={toggleLanguage} />
          </div>
        </div>
      )}
    </nav>
  );
}
