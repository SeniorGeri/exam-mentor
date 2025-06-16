import { Liquidation } from "@/modules/Finance/resources/liquidations/data";
import { Transaction } from "@/modules/Finance/resources/transactions/data";
import { CourseInstructor } from "@/modules/Frontend/resources/data";
import { ActiveCourse } from "@/modules/Operational/resources/active-courses/data";
import { TranslatableField } from "@/types/helpers";

export type Instructor = {
    active: boolean;
    active_courses: ActiveCourse[];
    address: string;
    bio: TranslatableField;
    city: string;
    city_id: number;
    country: string;
    country_id: number;
    courses: CourseInstructor[];
    created_at: string;
    deleted_at: string;
    email: string;
    email_verified_at: string;
    gender: string;
    gender_id: number;
    id: number;
    liquidations: Liquidation[];
    name: string;
    phone: string;
    profile_pic: string;
    specialization: string;
    transactions: Transaction[];
    
}