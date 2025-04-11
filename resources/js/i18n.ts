import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//import Categories from '../../modules/Categories/resources/lang/en/translations.json';
// import EnMain from './lang/en.json';
// import SqMain from './lang/sq.json';


// Initialize i18next
i18n
    .use(initReactI18next) // 👈 Important! This enables React support
    .init({
        resources: {
//             en: {
// //                Categories: Categories,
//                 Main: EnMain,
//             },
//             sq: {
//                 Main : SqMain
//             }
        },
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
