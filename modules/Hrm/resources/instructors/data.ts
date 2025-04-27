import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";
import { Country } from '@/modules/Settings/resources/countries/data';
import { City } from '@/modules/Settings/resources/cities/data';
import { Gender } from '@/modules/Settings/resources/genders/data';

export const instructorBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Instructors',
        href: route('instructor.list'),
    },
];

export type InstructorData = {
    countries: Country[];
    cities: City[];
    genders: Gender[];
};

export type Instructor = {
    id: number;
    name: string;
    email: string;
    password: string;
    country_id: number;
    city_id: number;
    gender_id: number;
    active: boolean;
    address: string;
    bio: string;
    profile_pic: string;
    description: string;
    country: Country;
    city: City;
    gender: Gender;
};

export type InstructorActionsProps = {
    instructor: Row<Instructor>;
};

export type DeleteInstructorProps = {
    instructor: Instructor;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditInstructorProps = {
    instructor: Instructor;
    isOpen: boolean;
    closeModal: () => void;
};
