import { Curriculum, Include, Video } from '@/modules/Operational/resources/course-instructors/data';
import { Grade } from '@/modules/Operational/resources/grades/data';
import { School } from '@/modules/Operational/resources/schools/data';
import { Subject } from '@/modules/Operational/resources/subjects/data';
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
    instructor_id: number;
    instructor: Instructor;
    language: Language;
    longevity: string;
    lessons: number;
    pricing_type: PricingType;
    course: Course;
    includes: Include[];
    curricula: Curriculum[];
    course_active_count: number;
    description: string;
    videos: Video[];
}

export type PricingType = {
    id: number;
    type: string;
}

export type Language = {
    id: number;
    language: TranslatableField;
    language_code: string;
    flag: string;
}

export type Instructor = {
    id: number;
    name: string;
    profile_pic: string;
    specialization: string;
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
    grades: Grade[];
    subjects: Subject[];
    schools: School[];
}