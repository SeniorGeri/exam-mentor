import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EnSettings from '../../modules/Settings/lang/en.json';
import EnHrm from '../../modules/Hrm/lang/en.json'
import EnMedia from '../../modules/Media/lang/en.json'
import EnOperational from '../../modules/Operational/lang/en.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                Settings: EnSettings,
                Hrm: EnHrm,
                Media: EnMedia,
                Operational: EnOperational
            },
            sq: {
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
