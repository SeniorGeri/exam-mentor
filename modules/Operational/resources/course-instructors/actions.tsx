'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {CourseInstructor, CourseInstructorActionsProps} from "./data.js";
import {EditCourseInstructor} from "./edit.js";
import {DeleteCourseInstructor} from "./delete.js";
import { useTranslation } from 'react-i18next';

export function CourseInstructorActions({courseInstructor}: CourseInstructorActionsProps) {

    const { t } = useTranslation('Operational');

    const [selectedCourseInstructor, setSelectedCourseInstructor] = useState<CourseInstructor| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((courseInstructor: CourseInstructor, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedCourseInstructor(courseInstructor);
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
                    <DropdownMenuItem onClick={() => handleAction(courseInstructor.original, 'edit')}>{t('edit_expense')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(courseInstructor.original, 'delete')}>
                        {t('delete_expense')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedCourseInstructor && selectedAction === 'edit' && (
                    <EditCourseInstructor courseInstructor={selectedCourseInstructor} isOpen={true} closeModal={() => setSelectedCourseInstructor(undefined)}/>
                )}
                {selectedCourseInstructor && selectedAction === 'delete' && (
                    <DeleteCourseInstructor courseInstructor={selectedCourseInstructor} isOpen={true} closeModal={() => setSelectedCourseInstructor(undefined)}/>
                )}
            </div>
        </>
    );
}
