import { Instructor } from '@/modules/Hrm/resources/instructors/data';
import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const liquidationBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Liquidations',
        href: route('liquidation.list'),
    },
];

export type Liquidation = {
    id: number;
    value: number;
    description: string;
    active_course_id: number;
    created_by: number;
    winner_id: number;
    approved: boolean;
    winner: Instructor;
};

export type LiquidationActionsProps = {
    liquidation: Row<Liquidation>;
};

export type DeleteLiquidationProps = {
    liquidation: Liquidation;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditLiquidationProps = {
    liquidation: Liquidation;
    isOpen: boolean;
    closeModal: () => void;
};
export type CreateLiquidationProps = {
    isOpen: boolean;
    closeModal: () => void;
};