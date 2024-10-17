'use client';
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(); // Crear el contexto

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es'); // Idioma por defecto

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook para acceder al contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
