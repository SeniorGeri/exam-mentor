'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {CoursePrice, CoursePriceActionsProps} from "./data.js";
import {EditCoursePrice} from "./edit.js";
import {DeleteCoursePrice} from "./delete.js";
import { useTranslation } from 'react-i18next';

export function CoursePriceActions({coursePrice}: CoursePriceActionsProps) {

    const { t } = useTranslation('Finance');

    const [selectedCoursePrice, setSelectedCoursePrice] = useState<CoursePrice| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((coursePrice: CoursePrice, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedCoursePrice(coursePrice);
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
                    <DropdownMenuItem onClick={() => handleAction(coursePrice.original, 'edit')}>{t('edit_expense')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(coursePrice.original, 'delete')}>
                        {t('delete_expense')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedCoursePrice && selectedAction === 'edit' && (
                    <EditCoursePrice coursePrice={selectedCoursePrice} isOpen={true} closeModal={() => setSelectedCoursePrice(undefined)}/>
                )}
                {selectedCoursePrice && selectedAction === 'delete' && (
                    <DeleteCoursePrice coursePrice={selectedCoursePrice} isOpen={true} closeModal={() => setSelectedCoursePrice(undefined)}/>
                )}
            </div>
        </>
    );
}
