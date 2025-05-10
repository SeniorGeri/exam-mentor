import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const expenseBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Expenses',
        href: route('expense.list'),
    },
];

export type Expense = {
    id: number;
    value: number;
    description: string;
};

export type ExpenseActionsProps = {
    expense: Row<Expense>;
};

export type DeleteExpenseProps = {
    expense: Expense;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditExpenseProps = {
    expense: Expense;
    isOpen: boolean;
    closeModal: () => void;
};
