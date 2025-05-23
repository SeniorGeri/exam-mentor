export type TranslatableField<Languages extends string = string> = {
    [key in Languages]: string;
};

export type Languages = {
    data : LanguageData[]
    main: string
}

export type LanguageData = {
    language_code : string
    language : TranslatableField
    flag : string
}

export type InertiaLangPageProps = {
    languages: Languages;
};


