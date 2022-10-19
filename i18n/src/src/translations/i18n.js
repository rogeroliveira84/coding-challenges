import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import TRANSLATIONS_EN from "./en/translations.json";
import TRANSLATIONS_PT from "./pt/translations.json";

const i18nInit = () => {
    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                en: {
                    translation: TRANSLATIONS_EN
                },
                pt: {
                    translation: TRANSLATIONS_PT
                }
            },
            fallbackLng: 'en'
        })
        .catch(err => console.error(err));
}

export default i18nInit;
