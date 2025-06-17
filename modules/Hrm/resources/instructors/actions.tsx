'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Instructor, InstructorActionsProps} from "./data.js";
import {EditInstructor} from "./edit.js";
import {DeleteInstructor} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions.js';
import { router } from '@inertiajs/react';

export function InstructorActions({instructor}: InstructorActionsProps) {

    const { t } = useTranslation('Hrm');

    const { hasPermission, hasAnyPermission} = usePermissions();

    const [selectedInstructor, setSelectedInstructor] = useState<Instructor| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((Instructor: Instructor, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedInstructor(Instructor);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['instructor.update', 'instructor.delete'])) {
        return null;
    }

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
                    {hasPermission('instructor.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(instructor.original, 'edit')}>{t('edit_instructor')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    <DropdownMenuItem onClick={() =>  router.visit(route('instructor.profile', instructor.original.id))}>{t('profile_instructor')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    
                    {hasPermission('instructor.delete') && (
                        <DropdownMenuItem className="text-red-500" onClick={() => handleAction(instructor.original, 'delete')}>
                            {t('delete_instructor')}
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedInstructor && selectedAction === 'edit' && (
                    <EditInstructor instructor={selectedInstructor} isOpen={true} closeModal={() => setSelectedInstructor(undefined)}/>
                )}
                {selectedInstructor && selectedAction === 'delete' && (
                    <DeleteInstructor instructor={selectedInstructor} isOpen={true} closeModal={() => setSelectedInstructor(undefined)}/>
                )}
            </div>
        </>
    );
}
