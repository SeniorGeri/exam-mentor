import type { BreadcrumbItem } from '@/types';
import { Row } from '@tanstack/react-table';
import { route } from "ziggy-js";
import { TranslatableField } from '@/types/helpers';

export const activeCourseBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Active Course',
        href: route('active-course.list'),
    },
];

export type ActiveCourse = {
    id: number;
    status_id: number;
    value: number;
    left: number;
    liquidation_percentage: number;
    description: string;
    title: TranslatableField;
    course_instructor: {
        title: TranslatableField;
        image: string;
    };
};

export type ActiveCourseStatus = {
    id: number;
    status: TranslatableField;
    className: string;
};

export type ActiveCourseActionsProps = {
    activeCourse: Row<ActiveCourse>;
};

export type DeleteActiveCourseProps = {
    activeCourse: ActiveCourse;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditActiveCourseProps = {
    activeCourse: ActiveCourse;
    isOpen: boolean;
    closeModal: () => void;
};


export type Classification = {
    id: number;
    title: TranslatableField;
    className: string;
};