import React from 'react';
import './nav.css'
import {SvgSpanishLanguage} from "./SvgSpanishLanguage.jsx";
import {SvgEnglishLanguage} from "./SvgEnglishLanguage.jsx";

const LanguageToggle = ({language, onLanguageToggle}) => {

  return (
    <button onClick={onLanguageToggle} className="ml-2 w-[5vh] ">
      {language === 'en' ? <SvgSpanishLanguage /> : <SvgEnglishLanguage />}
    </button>
  )
}

export default LanguageToggle;