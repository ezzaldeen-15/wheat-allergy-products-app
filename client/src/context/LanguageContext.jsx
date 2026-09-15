import React, { createContext } from 'react';
import useLanguage from '../i18n/useLanguage';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const languageUtils = useLanguage();

  return (
    <LanguageContext.Provider value={languageUtils}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
};
