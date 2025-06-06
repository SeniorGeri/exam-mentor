import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";
import { TranslatableField } from '@/types/helpers';

export const courseBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Course',
        href: route('course.list'),
    },
];

export type Course = {
    id: number;
    title: TranslatableField;
    description: string;
    image: string;
    school_ids: {
        school_id: number;
    }[];
    subject_ids: {
        subject_id: number;
    }[];
    grade_ids: {
        grade_id: number;
    }[];
};

export type CourseActionsProps = {
    course: Row<Course>;
};

export type DeleteCourseProps = {
    course: Course;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditCourseProps = {
    course: Course;
    isOpen: boolean;
    closeModal: () => void;
};


export type Classification<T> = {
    value: number;
    label: T;
};

export type ClassificationGroup<T>  = {
    [key: string]: Classification<T>[];
}