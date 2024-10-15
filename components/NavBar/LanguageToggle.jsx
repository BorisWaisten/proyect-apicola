import React from 'react';
import './nav.css'
import {SvgSpanishLanguage} from "./SvgSpanishLanguage.jsx";
import {SvgEnglishLanguage} from "./SvgEnglishLanguage.jsx";

const LanguageToggle = ({language, onLanguageToggle}) => {

  return (
    <button onClick={onLanguageToggle} className=" w-[4vh] sm:w-[3vh] md:w-[5vh] lg:w-[5vh] ">
      {language === 'en' ? <SvgSpanishLanguage /> : <SvgEnglishLanguage />}
    </button>
  )
}

export default LanguageToggle;