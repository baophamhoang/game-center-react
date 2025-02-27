import { Resource } from 'i18next';

const LOCAL_STORAGE_LANGUAGE = 'language';
const LOCAL_STORAGE_TRANSLATION = 'translation';
const DEFAULT_LANGUAGE = 'en';

const MOCK_TRANSLATION: Resource = {
  en: {
    translation: {
      hello: 'hello',
    },
  },
  vi: {
    translation: {
      hello: 'Xin chào',
    },
  },
};

const setTranslation = (translation: Resource) => {
  localStorage.setItem(LOCAL_STORAGE_TRANSLATION, JSON.stringify(translation));
};

const getTranslation = () => {
  const result = localStorage.getItem(LOCAL_STORAGE_TRANSLATION);
  if (result) return JSON.parse(result);
  return MOCK_TRANSLATION;
};

const getLanguage = () => {
  const lang = localStorage.getItem(LOCAL_STORAGE_LANGUAGE);
  if (lang) {
    return lang;
  }
  setLanguage(DEFAULT_LANGUAGE);
  return DEFAULT_LANGUAGE;
};

const setLanguage = (language: string) => {
  localStorage.setItem(LOCAL_STORAGE_LANGUAGE, language);
};

export default {
  setTranslation,
  getTranslation,
  getLanguage,
  setLanguage,
};
