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
                    <div className="grid gap-2">
                        <Label htmlFor="language">{t('language')}</Label>

                        <Input
                            id="language"
                            type="text"
                            name="language"
                            value={data.language}
                            onChange={(e) => setData('language', e.target.value)}
                            placeholder={t('language')}
                            autoComplete="language"
                        />

                        <InputError message={errors.language}/>
                    </div>

                    <FileInput inputName='flag' setFormData={setData} />
                    <div className="grid gap-2">
                        <Label htmlFor="language_code">{t('language_code')}</Label>

                        <Input
                            id="language_code"
                            type="text"
                            name="language_code"
                            value={data.language_code}
                            onChange={(e) => setData('language_code', e.target.value)}
                            placeholder={t('language_code')}
                            autoComplete="language_code"
                        />

                        <InputError message={errors.language_code}/>
                    </div>

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
                            <button type="submit">{t('add_language')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
