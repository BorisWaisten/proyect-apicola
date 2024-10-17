import React from 'react';
import './nav.css'
import {SvgArgentinianFlag} from "./SvgArgentinianFlag.jsx";
import {SvgEnglishLanguage} from "./SvgEnglishLanguage.jsx";

const LanguageToggle = ({language, onLanguageToggle}) => {

  return (
    <button onClick={onLanguageToggle} className=" w-[4vh] sm:w-[3vh] md:w-[5vh] lg:w-[5vh] ">
      {language === 'es' ? <SvgArgentinianFlag /> : <SvgEnglishLanguage />}
    </button>
  )
}

export default LanguageToggle;