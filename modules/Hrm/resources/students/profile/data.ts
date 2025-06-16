import { Transaction } from "@/modules/Finance/resources/transactions/data";
import { ActiveCourse } from "@/modules/Operational/resources/active-courses/data";
import { TranslatableField } from "@/types/helpers";

export type Student = {
    active: boolean;
    active_courses: ActiveCourse[];
    address: string;
    bio: TranslatableField;
    city: string;
    city_id: number;
    country: string;
    country_id: number;
    created_at: string;
    deleted_at: string;
    email: string;
    email_verified_at: string;
    gender: string;
    gender_id: number;
    id: number;
    name: string;
    phone: string;
    profile_pic: string;
    specialization: string;
    transactions: Transaction[];
    
}