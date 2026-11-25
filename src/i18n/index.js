import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.js';
import en from './locales/en.js';
import es from './locales/es.js';
import { languages } from '../constants/languages.js';
import { STORAGE_KEYS } from '../constants/storageKeys.js';
import { getStoredValue, setStoredValue } from '../utils/storage.js';

export { languages };

const STORAGE_KEY = STORAGE_KEYS.LANGUAGE;

function getStoredLanguage() {
  const stored = getStoredValue(STORAGE_KEY);
  return languages.some(({ code }) => code === stored) ? stored : undefined;
}

function getBrowserLanguage() {
  const browserLanguage = window.navigator.language?.slice(0, 2).toLowerCase();
  return languages.some(({ code }) => code === browserLanguage)
    ? browserLanguage
    : undefined;
}

const initialLanguage = getStoredLanguage() ?? getBrowserLanguage() ?? 'pt';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
  },
  lng: initialLanguage,
  fallbackLng: 'pt',
  supportedLngs: ['pt', 'en', 'es'],
  interpolation: { escapeValue: false },
});

function syncDocumentLanguage(language) {
  const match = languages.find(({ code }) => code === language);

  if (match) {
    document.documentElement.lang = match.htmlLang;
  }

  document.title = i18n.t('meta.title');
}

syncDocumentLanguage(initialLanguage);

i18n.on('languageChanged', (language) => {
  syncDocumentLanguage(language);
  setStoredValue(STORAGE_KEY, language);
});

export default i18n;
