'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Notification, NotificationActionsProps} from "./data.js";
// import {EditContact} from "./edit.js";
import {DeleteContact} from "./delete.js";
import { useTranslation } from 'react-i18next';

export function NotificationActions({notification}: NotificationActionsProps) {

    const { t } = useTranslation('Notification');

    const [selectedNotification, setSelectedNotification] = useState<Notification| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((notification: Notification, action: 'edit' | 'delete') => {
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
                    <DropdownMenuItem onClick={() => handleAction(notification.original, 'edit')}>{t('edit_instructor')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(notification.original, 'delete')}>
                        {t('delete_instructor')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {/* {selectedContact && selectedAction === 'edit' && (
                    <EditContact contact={selectedContact} isOpen={true} closeModal={() => setSelectedContact(undefined)}/>
                )} */}
                {selectedNotification && selectedAction === 'delete' && (
                    <DeleteContact notification={selectedNotification} isOpen={true} closeModal={() => setSelectedNotification(undefined)}/>
                )}
            </div>
        </>
    );
}
