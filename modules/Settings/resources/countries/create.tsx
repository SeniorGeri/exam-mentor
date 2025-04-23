'use client';

import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import FileInput from 'modules/Media/resources/js/file-input';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";


export function CreateCountry() {

    const { t } = useTranslation('Settings');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        country: '',
        description: '',
        flag: ''
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
        toast(t('country_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_country')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_country')}</DialogTitle>
                <DialogDescription>
                    {t('create_country_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeCountCreateCountry}>
                    <div className="grid gap-2">
                        <Label htmlFor="country">{t('country')}</Label>

                        <Input
                            id="country"
                            type="text"
                            name="country"
                            value={data.country}
                            onChange={(e) => setData('country', e.target.value)}
                            placeholder={t('country')}
                            autoComplete="country"
                        />

                        <InputError message={errors.country} />
                    </div>

                    <FileInput inputName='flag' setFormData={setData} />
                    <div className="grid gap-2">
                        <Label htmlFor="description">{t('description')}</Label>

                        <Textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder={t('description')}
                            autoComplete="description"
                        />

                        <InputError message={errors.description}/>
                    </div>

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                {t('close')}
                            </Button>
                        </DialogClose>

                        <Button variant="default" disabled={processing} asChild>
                            <button type="submit">{t('add_country')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
