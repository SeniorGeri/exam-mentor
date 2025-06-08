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

export type CourseInstructor = {
    id: number;
    course_id: number;
    instructor_id: number;
    pricing_type_id: number;
    language_id: number;
    price: number;
    longevity: string;
    description: string;
    lessons: number;
    image: string;
}

export type Curriculum = {
    id: number;
    title: string;
    description: string;
}

export type Include = {
    id: number;
    title: string;
}