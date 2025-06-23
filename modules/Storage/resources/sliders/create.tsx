'use client';

import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import FileInput from '@/modules/Media/resources/js/file-input';
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

                    <CustomInput
                        id="country"
                        value={data.country}
                        setFormData={setData}
                        placeholder={t('country')}
                        errorMessage={errors.country}
                    />

                    <FileInput inputName='flag' setFormData={setData} />

                    <CustomTextarea
                           id="description"
                           value={data.description}
                           setFormData={setData}
                           placeholder={t('description')}
                           errorMessage={errors.description}
                     />

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
