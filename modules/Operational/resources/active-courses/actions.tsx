'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {ActiveCourseActionsProps} from "./data";
import { useTranslation } from 'react-i18next';
import { ActiveCourse } from './data';
import { EditActiveCourse } from './edit';
import { DeleteActiveCourse } from './delete';

export function ActiveCourseActions({activeCourse}: ActiveCourseActionsProps) {

    const { t } = useTranslation('Operational');

    const [selectedCourse, setSelectedCourse] = useState<ActiveCourse| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((course: ActiveCourse, action: 'edit' | 'delete') => {
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
                    <DropdownMenuItem onClick={() => handleAction(activeCourse.original, 'edit')}>{t('edit_course')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(activeCourse.original, 'delete')}>
                        {t('delete_course')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedCourse && selectedAction === 'edit' && (
                    <EditActiveCourse activeCourse={selectedCourse} isOpen={true} closeModal={() => setSelectedCourse(undefined)}/>
                )}
                {selectedCourse && selectedAction === 'delete' && (
                    <DeleteActiveCourse activeCourse={selectedCourse} isOpen={true} closeModal={() => setSelectedCourse(undefined)}/>
                )}
            </div>
        </>
    );
}
