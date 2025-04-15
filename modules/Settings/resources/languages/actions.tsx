'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Language, LanguageActionsProps} from "./data.js";
import {EditLanguage} from "./edit.js";
import {DeleteLanguage} from "./delete.js";
import { useTranslation } from 'react-i18next';

export function LanguageActions({language}: LanguageActionsProps) {

    const { t } = useTranslation('Settings');

    const [selectedLanguage, setSelectedLanguage] = useState<Language| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((language: Language, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedLanguage(language);
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
                    <DropdownMenuItem onClick={() => handleAction(language.original, 'edit')}>{t('edit_language')}</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(language.original, 'delete')}>
                        {t('delete_language')}
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedLanguage && selectedAction === 'edit' && (
                    <EditLanguage language={selectedLanguage} isOpen={true} closeModal={() => setSelectedLanguage(undefined)}/>
                )}
                {selectedLanguage && selectedAction === 'delete' && (
                    <DeleteLanguage language={selectedLanguage} isOpen={true} closeModal={() => setSelectedLanguage(undefined)}/>
                )}
            </div>
        </>
    );
}
