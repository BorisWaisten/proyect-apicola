'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

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
    <nav
      className={`fixed top-0 left-0 w-full bg-primary p-4 text-white z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="logos/logoCOADELPA.jpg"
                alt="Logo"
                className="w-[10vh]"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {Object.keys(navItems).map((item) => (
              <a
                href={`#${item}`}
                key={item}
                className="relative px-4 py-2 text-base font-medium text-white hover:text-gray-300 after:absolute after:bg-cuarteto after:w-full after:h-0.5 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
              >
                {navItems[item]} {/* Muestra el texto correspondiente en el idioma actual */}
              </a>
            ))}
          </div>

          {/* Right-side Language Toggle */}
          <div className="flex items-center space-x-4">
            <LanguageToggle language={language} onLanguageToggle={toggleLanguage} />
          </div>
        </div>
      </div>
    </nav>
  );
}
