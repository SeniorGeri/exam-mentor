'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Grade, GradeActionsProps} from "./data.js";
import {EditGrade} from "./edit.js";
import {DeleteGrade} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions.js';

export function GradeActions({grade}: GradeActionsProps) {

    const { t } = useTranslation('Operational');
    const { hasPermission, hasAnyPermission} = usePermissions();
    const [selectedGrade, setSelectedGrade] = useState<Grade| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((grade: Grade, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedGrade(grade);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['grade.update', 'grade.delete'])) {
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
                    {hasPermission('grade.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(grade.original, 'edit')}>{t('edit_grade')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    {hasPermission('grade.delete') && (
                        <DropdownMenuItem className="text-red-500" onClick={() => handleAction(grade.original, 'delete')}>
                            {t('delete_grade')}
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedGrade && selectedAction === 'edit' && (
                    <EditGrade grade={selectedGrade} isOpen={true} closeModal={() => setSelectedGrade(undefined)}/>
                )}
                {selectedGrade && selectedAction === 'delete' && (
                    <DeleteGrade grade={selectedGrade} isOpen={true} closeModal={() => setSelectedGrade(undefined)}/>
                )}
            </div>
        </>
    );
}
