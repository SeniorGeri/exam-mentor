import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const transactionBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Transactions',
        href: route('transaction.list'),
    },
];

export type Transaction = {
    id: number;
    value: number;
    description: string;
    income: boolean;
};  

export type TransactionActionsProps = {
    transaction: Row<Transaction>;
};

export type DeleteTransactionProps = {
    transaction: Transaction;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditTransactionProps = {
    transaction: Transaction;
    isOpen: boolean;
    closeModal: () => void;
};
