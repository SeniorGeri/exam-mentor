import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const cityBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'City',
        href: route('city.list'),
    },
];

export type City = {
    id: string;
    city: object;
    country_id: number;
    description: string;
};

export type CityActionsProps = {
    city: Row<City>;
};

export type DeleteCityProps = {
    city: City;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditCityProps = {
    city: City;
    isOpen: boolean;
    closeModal: () => void;
};
