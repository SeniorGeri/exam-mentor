'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {School, SchoolActionsProps} from "./data.js";
import {EditSchool} from "./edit.js";
import {DeleteSchool} from "./delete.js";
import { useTranslation } from 'react-i18next';

export function SchoolActions({school}: SchoolActionsProps) {

    const { t } = useTranslation('Operational');

    const [selectedSchool, setSelectedSchool] = useState<School| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((school: School, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedSchool(school);
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
                    <DropdownMenuItem onClick={() => handleAction(school.original, 'edit')}>{t('edit_school')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(school.original, 'delete')}>
                        {t('delete_school')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedSchool && selectedAction === 'edit' && (
                    <EditSchool school={selectedSchool} isOpen={true} closeModal={() => setSelectedSchool(undefined)}/>
                )}
                {selectedSchool && selectedAction === 'delete' && (
                    <DeleteSchool school={selectedSchool} isOpen={true} closeModal={() => setSelectedSchool(undefined)}/>
                )}
            </div>
        </>
    );
}
