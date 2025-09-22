import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import id from "./id.json";
import zh from "./zh.json";

i18n.use(initReactI18next).init({
  resources: {
    id: { translation: id },
    zh: { translation: zh }
  },
  lng: "id",       // default bahasa
  fallbackLng: "id",
  interpolation: { escapeValue: false }
});

export default i18n;
