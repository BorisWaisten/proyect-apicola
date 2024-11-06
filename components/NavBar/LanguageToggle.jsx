import React from 'react';
import './nav.css';
import { SvgArgentinianFlag } from './SvgArgentinianFlag.jsx';
import { SvgEnglishLanguage } from './SvgEnglishLanguage.jsx';

const LanguageToggle = ({ language, onLanguageToggle }) => {
  return (
    <div className="flex space-x-2 w-[8vh] sm:w-[5vh] md:w-[7vh] lg:w-[10vh]">
      <button
        onClick={() => onLanguageToggle('es')}
        className={`w-[4vh] sm:w-[2.5vh] md:w-[3.5vh] lg:w-[5vh] ${
          language === 'es' ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <SvgArgentinianFlag />
      </button>
      <button
        onClick={() => onLanguageToggle('en')}
        className={`w-[4vh] sm:w-[2.5vh] md:w-[3.5vh] lg:w-[5vh] ${
          language === 'en' ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <SvgEnglishLanguage />
      </button>
    </div>
  );
};

export default LanguageToggle;
