import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";
import { TranslatableField } from '@/types/helpers';
    
export const subjectBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Subjects',
        href: route('subject.list'),
    },
];

export type Subject = {
    id: number;
    title: TranslatableField;
    description: string;
    image: string;
};

export type SubjectActionsProps = {
    subject: Row<Subject>;
};

export type DeleteSubjectProps = {
    subject: Subject;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditSubjectProps = {
    subject: Subject;
    isOpen: boolean;
    closeModal: () => void;
};
