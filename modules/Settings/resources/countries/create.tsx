'use client';

import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, RefObject, useRef, useState} from 'react';
import {toast} from 'sonner';
import {route} from "../../../../vendor/tightenco/ziggy/src/js";

export function CreateCountry() {

    const countryInput: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        country: '',
        description: '',
    });

    const storeCountCreateCountry: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('country.store'), {
            preserveScroll: true,
            onSuccess: () => countryCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const countryCreated = () => {
        toast('Shteti u krijua me sukses', {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    Krijo Shtet
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Krijo Shtet</DialogTitle>
                <DialogDescription>
                    Meposhte mundesohet krijimi i shteteve
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeCountCreateCountry}>
                    <div className="grid gap-2">
                        <Label htmlFor="country">Shteti</Label>

                        <Input
                            id="country"
                            type="text"
                            name="country"
                            ref={countryInput}
                            value={data.country}
                            onChange={(e) => setData('country', e.target.value)}
                            placeholder="Shteti"
                            autoComplete="country"
                        />

                        <InputError message={errors.country}/>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Shenime</Label>

                        <Textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Shenime"
                            autoComplete="description"
                        />

                        <InputError message={errors.description}/>
                    </div>

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                Mbyll
                            </Button>
                        </DialogClose>

                        <Button variant="default" disabled={processing} asChild>
                            <button type="submit">Shto shtet</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
