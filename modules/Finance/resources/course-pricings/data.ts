import { Instructor } from '@/modules/Hrm/resources/instructors/data';
import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const coursePriceBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Course Pricings',
        href: route('course-pricing.list'),
    },
];

export type CoursePrice = {
    id: number;
    value: number;
    description: string;
    active_course_id: number;
    created_by: number;
    winner_id: number;
    approved: boolean;
    winner: Instructor;
};

export type CoursePriceActionsProps = {
    coursePrice: Row<CoursePrice>;
};

export type DeleteCoursePriceProps = {
    coursePrice: CoursePrice;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditCoursePriceProps = {
    coursePrice: CoursePrice;
    isOpen: boolean;
    closeModal: () => void;
};
