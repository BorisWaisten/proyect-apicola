'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar({ sections }) {
  const { language, toggleLanguage } = useLanguage();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
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
    <nav className={`fixed top-0 left-0 w-full bg-primary shadow-md p-4 text-white z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <span className="font-bold text-xl text-gray-800">B</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {Object.keys(navItems).map((item) => (
              <a
                href={`#${item}`}
                key={item}
                className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-700"
              >
                {navItems[item]} {/* Muestra el texto correspondiente en el idioma actual */}
              </a>
            ))}
          </div>

          {/* Right-side Cart and Button */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-700"
            >
              {language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
