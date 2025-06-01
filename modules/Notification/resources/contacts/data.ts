import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const contactBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Contacts',
        href: route('contact.list'),
    },
];

export type Contact = {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    phone: string;
    is_read: boolean;
    ip: string;
    created_at: string;
};

export type ContactActionsProps = {
    contact: Row<Contact>;
};

export type DeleteContactProps = {
    contact: Contact;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditContactProps = {
    contact: Contact;
    isOpen: boolean;
    closeModal: () => void;
};

export type ViewContactProps = {
    contact: Contact;
    isOpen: boolean;
    closeModal: () => void;
};
