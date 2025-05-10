'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Expense, ExpenseActionsProps} from "./data.js";
import {EditExpense} from "./edit.js";
import {DeleteExpense} from "./delete.js";
import { useTranslation } from 'react-i18next';

export function ExpenseActions({expense}: ExpenseActionsProps) {

    const { t } = useTranslation('Finance');

    const [selectedExpense, setSelectedExpense] = useState<Expense| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((expense: Expense, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedExpense(expense);
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
                    <DropdownMenuItem onClick={() => handleAction(expense.original, 'edit')}>{t('edit_expense')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(expense.original, 'delete')}>
                        {t('delete_expense')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedExpense && selectedAction === 'edit' && (
                    <EditExpense expense={selectedExpense} isOpen={true} closeModal={() => setSelectedExpense(undefined)}/>
                )}
                {selectedExpense && selectedAction === 'delete' && (
                    <DeleteExpense expense={selectedExpense} isOpen={true} closeModal={() => setSelectedExpense(undefined)}/>
                )}
            </div>
        </>
    );
}
