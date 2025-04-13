import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "../../../../vendor/tightenco/ziggy/src/js";

export const countryBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Shteti',
        href: route('country.list'),
    },
];

export type Country = {
    id: string;
    country: object;
    description: string;
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
