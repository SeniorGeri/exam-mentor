'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Subject, SubjectActionsProps} from "./data.js";
import {EditSubject} from "./edit.js";
import {DeleteSubject} from "./delete.js";
import { useTranslation } from 'react-i18next';

export function SubjectActions({subject}: SubjectActionsProps) {

    const { t } = useTranslation('Operational');

    const [selectedSubject, setSelectedSubject] = useState<Subject| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((subject: Subject, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedSubject(subject);
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
                    <DropdownMenuItem onClick={() => handleAction(subject.original, 'edit')}>{t('edit_subject')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(subject.original, 'delete')}>
                        {t('delete_subject')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedSubject && selectedAction === 'edit' && (
                    <EditSubject subject={selectedSubject} isOpen={true} closeModal={() => setSelectedSubject(undefined)}/>
                )}
                {selectedSubject && selectedAction === 'delete' && (
                    <DeleteSubject subject={selectedSubject} isOpen={true} closeModal={() => setSelectedSubject(undefined)}/>
                )}
            </div>
        </>
    );
}
