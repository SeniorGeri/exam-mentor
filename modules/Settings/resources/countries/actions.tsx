'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Country, CountryActionsProps} from "./data.js";
import {EditCountry} from "./edit.js";
import {DeleteCountry} from "./delete.js";

export function CountryActions({country}: CountryActionsProps) {

    const [selectedCountry, setSelectedCountry] = useState<Country| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((country: Country, action: 'edit' | 'delete') => {
        setSelectedCountry(country);
        setSelectedAction(action);
    }, []);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="data-[state=open]:bg-muted flex h-6 w-8 p-0">
                        <MoreHorizontal/>
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuItem onClick={() => handleAction(country.original, 'edit')}>Edito shtetin</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="text-red-500" onClick={() => handleAction(country.original, 'delete')}>
                        Fshi shtetin
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedCountry && selectedAction === 'edit' && (
                    <EditCountry country={selectedCountry} isOpen={true} closeModal={() => setSelectedCountry(undefined)}/>
                )}
                {selectedCountry && selectedAction === 'delete' && (
                    <DeleteCountry country={selectedCountry} isOpen={true} closeModal={() => setSelectedCountry(undefined)}/>
                )}
            </div>
        </>
    );
}
