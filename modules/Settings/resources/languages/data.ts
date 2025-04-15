import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const languageBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Language',
        href: route('language.list'),
    },
];

export type Language = {
    id: string;
    language: object;
    language_code: object;
    description: string;
};

export type LanguageActionsProps = {
    language: Row<Language>;
};

export type DeleteLanguageProps = {
    language: Language;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditLanguageProps = {
    language: Language;
    isOpen: boolean;
    closeModal: () => void;
};
