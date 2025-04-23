import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";
import { TranslatableField } from '@/types/helpers';

export const countryBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Country',
        href: route('country.list'),
    },
];

export type Country = {
    id: string;
    country: TranslatableField;
    description: string;
    flag: string;
};

export type CountryActionsProps = {
    country: Row<Country>;
};

export type DeleteCountryProps = {
    country: Country;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditCountryProps = {
    country: Country;
    isOpen: boolean;
    closeModal: () => void;
};
