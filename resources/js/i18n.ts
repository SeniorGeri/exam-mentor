import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EnSettings from '../../modules/Settings/lang/en.json';
import EnHrm from '../../modules/Hrm/lang/en.json'
import EnMedia from '../../modules/Media/lang/en.json'
import EnOperational from '../../modules/Operational/lang/en.json'
import EnFinance from '../../modules/Finance/lang/en.json'
import EnFrontend from '../../modules/Frontend/lang/en.json'
import SqFrontend from '../../modules/Frontend/lang/sq.json'
import EnNotification from '../../modules/Notification/lang/en.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                Settings: EnSettings,
                Hrm: EnHrm,
                Media: EnMedia,
                Operational: EnOperational,
                Finance: EnFinance,
                Frontend: EnFrontend,
                Notification: EnNotification
            },
            sq: {
                Frontend: SqFrontend
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
