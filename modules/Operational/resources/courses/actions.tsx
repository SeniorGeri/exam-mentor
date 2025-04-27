'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Course, CourseActionsProps} from "./data.js";
import {EditCourse} from "./edit.js";
import {DeleteCourse} from "./delete.js";
import { useTranslation } from 'react-i18next';

export function CourseActions({course}: CourseActionsProps) {

    const { t } = useTranslation('Operational');

    const [selectedCourse, setSelectedCourse] = useState<Course| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((course: Course, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedCourse(course);
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
                    <DropdownMenuItem onClick={() => handleAction(course.original, 'edit')}>{t('edit_course')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(course.original, 'delete')}>
                        {t('delete_course')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedCourse && selectedAction === 'edit' && (
                    <EditCourse course={selectedCourse} isOpen={true} closeModal={() => setSelectedCourse(undefined)}/>
                )}
                {selectedCourse && selectedAction === 'delete' && (
                    <DeleteCourse course={selectedCourse} isOpen={true} closeModal={() => setSelectedCourse(undefined)}/>
                )}
            </div>
        </>
    );
}
