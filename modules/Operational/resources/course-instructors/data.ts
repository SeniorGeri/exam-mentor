import { Instructor } from '@/modules/Hrm/resources/instructors/data';
import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const courseInstructorBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Course Instructor',
        href: route('course-instructor.list'),
    },
];

export type CourseInstructor = {
    id: number;
    value: number;
    description: string;
    active_course_id: number;
    created_by: number;
    winner_id: number;
    approved: boolean;
    winner: Instructor;
};

export type CourseInstructorActionsProps = {
    courseInstructor: Row<CourseInstructor>;
};

export type DeleteCourseInstructorProps = {
    courseInstructor: CourseInstructor;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditCourseInstructorProps = {
    courseInstructor: CourseInstructor;
    isOpen: boolean;
    closeModal: () => void;
};
