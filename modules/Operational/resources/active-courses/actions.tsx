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
import { EditActiveCourseStatus } from './edit-status';
import { CreateLiquidation } from './liquidation';
import { router } from '@inertiajs/react';
import { usePermissions } from '@/hooks/use-permissions.js';

export function ActiveCourseActions({activeCourse}: ActiveCourseActionsProps) {

    const { t } = useTranslation('Operational');
    const { hasPermission, hasAnyPermission} = usePermissions();

    const [selectedCourse, setSelectedCourse] = useState<ActiveCourse| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit-status' | 'edit' | 'finish_lesson' | 'liquidation' | 'delete' | null>(null);

    const handleAction = useCallback((course: ActiveCourse, action: 'edit-status' | 'edit' | 'finish_lesson' | 'liquidation' | 'delete') => {
        setTimeout(() => {
            setSelectedCourse(course);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['active-course.update', 'active-course.delete', 'active-course.lessons'])) {
        return null;
    }
    console.log(activeCourse.original);
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
                    {hasPermission('active-course.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(activeCourse.original, 'edit-status')}>{t('update_status')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    {hasPermission('active-course.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(activeCourse.original, 'edit')}>{t('edit_course')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                   )}
                    {hasPermission('active-course.lessons') && activeCourse.original.status_id === 3 && (
                        <>
                            <DropdownMenuItem onClick={() =>  router.visit(route('active-course.lessons', activeCourse.original.id))}>{t('finish_lesson')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    {hasPermission('liquidation.create') && activeCourse.original.status_id === 4 
                    && activeCourse.original.liquidation === null && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(activeCourse.original, 'liquidation')}>{t('liquidation')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                   )}
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(activeCourse.original, 'delete')}>
                        {t('delete_course')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedCourse && selectedAction === 'edit-status' && (
                    <EditActiveCourseStatus activeCourse={selectedCourse} isOpen={true} closeModal={() => setSelectedCourse(undefined)}/>
                )}
                {selectedCourse && selectedAction === 'delete' && (
                    <DeleteActiveCourse activeCourse={selectedCourse} isOpen={true} closeModal={() => setSelectedCourse(undefined)}/>
                )}
                {selectedCourse && selectedAction === 'edit' && (
                    <EditActiveCourse activeCourse={selectedCourse} isOpen={true} closeModal={() => setSelectedCourse(undefined)}/>
                )}
                {selectedCourse && selectedAction === 'liquidation' && (
                    <CreateLiquidation activeCourse={selectedCourse} isOpen={true} closeModal={() => setSelectedCourse(undefined)}/>
                )}
            </div>
        </>
    );
}
