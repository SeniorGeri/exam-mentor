import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const paymentBreadcrumbs: BreadcrumbItem[] = [

    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Payment',
        href: route('payment.list'),

    },
];

export type Payment = {
    id: string;
    payment: object;

    description: string;
};

export type PaymentActionsProps = {
    payment: Row<Payment>;

};

export type DeletePaymentProps = {
    payment: Payment;

    isOpen: boolean;
    closeModal: () => void;
};

export type EditPaymentProps = {
    payment: Payment;

    isOpen: boolean;
    closeModal: () => void;
};
