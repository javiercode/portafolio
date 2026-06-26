import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { esDictionary, enDictionary } from './fallbackDictionaries';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Default English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: { translation: enDictionary },
      es: { translation: esDictionary }
    }
  });

// Attempt to load asynchronously over HTTP (if hosted on server), falling back gracefully on file://
const loadTranslations = async () => {
  const currentLang = i18n.language;
  try {
    const response = await fetch(`./public/i18n/${currentLang}.json`);
    if (response.ok) {
      const data = await response.json();
      i18n.addResourceBundle(currentLang, 'translation', data, true, true);
    }
  } catch (e) {
    console.warn("Using offline fallback dictionaries.");
  }
};

loadTranslations();

export default i18n;