'use client';

import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import FileInput from 'modules/Media/resources/js/file-input';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";


export function CreateLanguage() {

    const { t } = useTranslation('Settings');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        language: '',
        language_code: '',
        description: '',
        flag: ''

    });

    const storeCountCreateLanguage: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('language.store'), {
            preserveScroll: true,
            onSuccess: () => languageCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const languageCreated = () => {
        toast(t('language_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_language')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_language')}</DialogTitle>
                <DialogDescription>
                    {t('create_language_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeCountCreateLanguage}>

                    <CustomInput
                        id="language"
                        value={data.language}
                        setFormData={setData}
                        placeholder={t('language')}
                        errorMessage={errors.language}
                    />

                    <FileInput inputName='flag' setFormData={setData} />

                    <CustomInput
                        id="language_code"
                        value={data.language_code}
                        setFormData={setData}
                        placeholder={t('language_code')}
                        errorMessage={errors.language_code}
                    />

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
                            <button type="submit">{t('add_language')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
