'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "../../../../vendor/tightenco/ziggy/src/js";
import {DeleteCountryProps} from "./data";

export function DeleteCountry({country, isOpen, closeModal}: DeleteCountryProps) {
    const destroyCountry = () => {
        router.delete(route('country.destroy', country.id), {
            preserveScroll: true,
            onSuccess: () => countryDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const countryDeleted = () => {
        toast('Kategoria u fshi me sukses', {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Deshironi ta fshini shtetin {country?.country}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Nese po ky shtet nuk do te shfaqet me ne sistem.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>Mbyll</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyCountry}>Fshij</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
