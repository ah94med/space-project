import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Set the initial direction based on the current language
  useEffect(() => {
    const currentLanguage = i18n.language;
    document.body.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]); // Run this effect when the language changes

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 100 }}>
      <button
        onClick={() => changeLanguage('en')}
        style={{ marginRight: '0.5rem', cursor: 'pointer' }}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        style={{ cursor: 'pointer' }}
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher; 