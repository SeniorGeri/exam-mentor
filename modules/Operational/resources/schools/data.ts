import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";
import { TranslatableField } from '@/types/helpers';
import { Country } from '@/modules/Settings/resources/countries/data';
    
export const schoolBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Schools',
        href: route('school.list'),
    },
];

export type School = {
    id: number;
    title: TranslatableField;
    description: string;
    country_id: number;
    country: Country;
    image: string;
};

export type SchoolActionsProps = {
    school: Row<School>;
};

export type DeleteSchoolProps = {
    school: School;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditSchoolProps = {
    school: School;
    isOpen: boolean;
    closeModal: () => void;
};
