import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EnSettings from '../../modules/Settings/resources/lang/en.json';
// import EnMain from './lang/en.json';
// import SqMain from './lang/sq.json';


// Initialize i18next
i18n
    .use(initReactI18next) // 👈 Important! This enables React support
    .init({
        resources: {
            en: {
                Settings: EnSettings,
            },
            sq: {
            }
        },
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
