'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Notification, NotificationActionsProps} from "./data.js";
import {DeleteNotification} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { useForm } from '@inertiajs/react';


export function NotificationActions({notification}: NotificationActionsProps) {
    const { put } = useForm();
    const markAsRead = (id: number) => {
        put(route('notification.update', id));
    };
    const { t } = useTranslation('Notification');

    const [selectedNotification, setSelectedNotification] = useState<Notification| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | 'view' | null>(null);

    const handleAction = useCallback((notification: Notification, action: 'edit' | 'delete' | 'view') => {
        setTimeout(() => {
            setSelectedNotification(notification);
            setSelectedAction(action);
        }, 10)
    }, []);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="data-[state=open]:bg-muted flex h-6 w-8 p-0">
                        <MoreHorizontal/>
                        <span className="sr-only">{t('open_menu')}</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[160px]">  
                    <DropdownMenuItem onClick={() => markAsRead(notification.original.id)}>{t('mark_read')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(notification.original, 'delete')}>
                        {t('delete')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedNotification && selectedAction === 'delete' && (
                    <DeleteNotification notification={selectedNotification} isOpen={true} closeModal={() => setSelectedNotification(undefined)}/>
                )}
            </div>
        </>
    );
}
