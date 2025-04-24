import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";
import { Country } from '@/modules/Settings/resources/countries/data';
import { City } from '@/modules/Settings/resources/cities/data';
import { Gender } from '@/modules/Settings/resources/genders/data';

export const studentBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Students',
        href: route('student.list'),
    },
];

export type StudentData = {
    countries: Country[];
    cities: City[];
    genders: Gender[];
};

export type Student = {
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

export type StudentActionsProps = {
    student: Row<Student>;
};

export type DeleteStudentProps = {
    student: Student;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditStudentProps = {
    student: Student;
    isOpen: boolean;
    closeModal: () => void;
};
