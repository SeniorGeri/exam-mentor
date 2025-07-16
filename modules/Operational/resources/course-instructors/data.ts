import type {BreadcrumbItem} from '@/types';
import { TranslatableField } from '@/types/helpers';
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
    curricula: Curriculum[];
    includes: Include[];
}

export type FormCurriculum = {
    id: number;
    title: string;
    description: string;
}

export type FormInclude = {
    id: number;
    title: string;
}



export type Curriculum = {
    id: number;
    title: TranslatableField;
    description: TranslatableField;
}

export type Video = {
    id: number;
    title: TranslatableField;
    video_url: string;
    is_free: boolean;
    description: TranslatableField;
}



export type Include = {
    id: number;
    title: TranslatableField;
}