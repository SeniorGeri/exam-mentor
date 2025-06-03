import { TranslatableField } from '@/types/helpers';

export type CoursePaginate = {
    data: CourseInstructor[];
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string | null;
    next_page_url: string | null;
    from: number;
    to: number;
    total: number;
    per_page: number;
    current_page: number;
    links: PaginateLink[];
}

export type CourseInstructor = {
    id: number;
    title: string;
    image: string;
    price: number;
    instructor: Professor;
    language: Language;
    longevity: number;
    pricing_type: PricingType;
    course: Course;
}

export type PricingType = {
    id: number;
    name: string;
}

export type Language = {
    id: number;
    language: TranslatableField;
}

export type Professor = {
    id: number;
    name: string;
}

export type PaginateLink = {
    url: string | null;
    label: string;
    active: boolean;
}

export type Course = {
    id: number;
    title: TranslatableField;
    image:string;
    description?: string;
}