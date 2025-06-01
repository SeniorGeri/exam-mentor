import type {BreadcrumbItem, User} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";

export const notificationBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Notifications',
        href: route('notification.list'),
    },
];

export type Notification = {
    id: number;
    title: string;
    message: string;
    type: string;
    sender: User;
    receiver: User;
    is_read: boolean;
    created_at: string;
};

export type NotificationActionsProps = {
    notification: Row<Notification>;
};

export type DeleteNotificationProps = {
    notification: Notification;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditNotificationProps = {
    notification: Notification;
    isOpen: boolean;
    closeModal: () => void;
};
