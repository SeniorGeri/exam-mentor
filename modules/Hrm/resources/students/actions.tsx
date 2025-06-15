'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Student, StudentActionsProps} from "./data.js";
import {EditStudent} from "./edit.js";
import {DeleteStudent} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions.js';

export function StudentActions({student}: StudentActionsProps) {

    const { t } = useTranslation('Hrm');

    const { hasPermission, hasAnyPermission} = usePermissions();

    const [selectedStudent, setSelectedStudent] = useState<Student| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((student: Student, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedStudent(student);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['student.update', 'student.delete'])) {
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
                    {hasPermission('student.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(student.original, 'edit')}>{t('edit_student')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    {hasPermission('student.delete') && (
                        <DropdownMenuItem className="text-red-500" onClick={() => handleAction(student.original, 'delete')}>
                            {t('delete_student')}
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedStudent && selectedAction === 'edit' && (
                    <EditStudent student={selectedStudent} isOpen={true} closeModal={() => setSelectedStudent(undefined)}/>
                )}
                {selectedStudent && selectedAction === 'delete' && (
                    <DeleteStudent student={selectedStudent} isOpen={true} closeModal={() => setSelectedStudent(undefined)}/>
                )}
            </div>
        </>
    );
}
