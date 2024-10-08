'use client';
import { useLanguage } from "@/context/LanguageContext"; // Verifica que la ruta sea correcta
import { useState } from "react";

export default function LeftNav({ sections }) {
  const { language } = useLanguage(); // Acceder al idioma actual
  const [showMenu, setShowMenu] = useState(false);	

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  // Seleccionar el conjunto de secciones en función del idioma actual
  const navItems = sections[language];

  return (
    <div>
      <button
        className="fixed top-0 left-0 z-50 p-4 text-white hover:text-gray-300"
        onClick={toggleMenu}
      >
        {showMenu ? "✕" : "☰"}
      </button>
      {showMenu &&  (
        <div className="fixed top-0 left-0 w-[20vh] my-10 ml-4 lg:rounded-r-2xl lg:rounded-bl-2xl bg-primary z-50 shadow-lg">
          <div className="flex flex-col h-full p-4">
            <ul className="flex flex-col space-y-2">
              {Object.keys(navItems).map((key) => (
                <li key={key}>
                  <button
                    className="w-full text-lg font-bold text-gray-800 hover:text-gray-600 text-left"
                    onClick={() => handleClickSection(key)}
                  >
                    {navItems[key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
