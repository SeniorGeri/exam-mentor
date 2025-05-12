'use client';

import { createContext, useContext, useState } from 'react';
import { usePage } from '@inertiajs/react';

type LocaleContextType = {
    currentLocale: string;
    setLocale: (locale: string) => void;
};

type Languages = {
    data : LanguageData[]
    main: string
}

type LanguageData = {
    language_code : string
    flag : string
}

type InertiaPageProps = {
    languages: Languages;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
    const { languages } = usePage<InertiaPageProps>().props;
    console.log(languages);
    const [currentLocale, setCurrentLocale] = useState(languages.main);

    const setLocale = (locale: string) => {
        setCurrentLocale(locale);
    };

    return (
        <LocaleContext.Provider value={{currentLocale, setLocale}}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = (): LocaleContextType => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};
