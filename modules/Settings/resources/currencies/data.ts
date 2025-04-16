import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const currencyBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Currency',
        href: route('currency.list'),
    },
];

export type Currency = {
    id: string;
    symbol: string;
    currency_code: string;
    exchange: number;
    is_primary: boolean;
    description: string;
};

export type CurrencyActionsProps = {
    currency: Row<Currency>;
};

export type DeleteCurrencyProps = {
    currency: Currency;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditCurrencyProps = {
    currency: Currency;
    isOpen: boolean;
    closeModal: () => void;
};
