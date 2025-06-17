import type { BreadcrumbItem } from '@/types';
import { Row } from '@tanstack/react-table';
import { route } from "ziggy-js";
import { TranslatableField } from '@/types/helpers';
import { CourseInstructor } from '../course-instructors/data';
import { Student } from '@/modules/Hrm/resources/students/data';
import { Instructor } from '@/modules/Frontend/resources/data';

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
    course_instructor: CourseInstructor;
    student: Student;
    instructor: Instructor;
    status: ActiveCourseStatus;
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