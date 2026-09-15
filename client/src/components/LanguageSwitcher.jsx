import React from 'react';
import { useLanguageContext } from '../context/LanguageContext';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <div className="language-switcher">
      <button
        onClick={toggleLanguage}
        className={`lang-btn ${language}`}
        aria-label="Toggle language"
      >
        {language === 'en' ? '🇸🇦 العربية' : '🇬🇧 English'}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
