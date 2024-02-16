import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko'; //index.js는 생략해도 자동 인식 됨 (=./langs/ko/index.js)
import en from './langs/en';

const resources = {
  en: {
    translation: en,
  },

  ko: {
    translation: ko,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language, //navigator객체의 언어에 대한 설정정보
});
