import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";
import { TranslatableField } from '@/types/helpers';

export const gradeBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Grades',
        href: route('grade.list'),
    },
];

export type Grade = {
    id: number;
    title: TranslatableField;
    description: string;
};

export type GradeActionsProps = {
    grade: Row<Grade>;
};

export type DeleteGradeProps = {
    grade: Grade;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditGradeProps = {
    grade: Grade;
    isOpen: boolean;
    closeModal: () => void;
};
