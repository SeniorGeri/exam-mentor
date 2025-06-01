'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Contact, ContactActionsProps} from "./data.js";
// import {EditContact} from "./edit.js";
import {DeleteContact} from "./delete.js";
import {ViewContact} from "./view";
import { useTranslation } from 'react-i18next';
import { useForm } from '@inertiajs/react';


export function ContactActions({contact}: ContactActionsProps) {
    const { put } = useForm();
    const markAsRead = (id: number) => {
        put(route('contact.update', id));
    };
    const { t } = useTranslation('Notification');

    const [selectedContact, setSelectedContact] = useState<Contact| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | 'view' | null>(null);

    const handleAction = useCallback((contact: Contact, action: 'edit' | 'delete' | 'view') => {
        setTimeout(() => {
            setSelectedContact(contact);
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
                    <DropdownMenuItem onClick={() => handleAction(contact.original, 'view')}>{t('view_content')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>    
                    <DropdownMenuItem onClick={() => markAsRead(contact.original.id)}>{t('mark_read')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(contact.original, 'delete')}>
                        {t('delete')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedContact && selectedAction === 'delete' && (
                    <DeleteContact contact={selectedContact} isOpen={true} closeModal={() => setSelectedContact(undefined)}/>
                )}
                {selectedContact && selectedAction === 'view' && (
                    <ViewContact contact={selectedContact} isOpen={true} closeModal={() => setSelectedContact(undefined)}/>
                )}
            </div>
        </>
    );
}
