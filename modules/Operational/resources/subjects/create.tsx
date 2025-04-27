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


export function CreateSubject() {

    const { t } = useTranslation('Operational');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        image: '',
        title: '',
        description: ''
    });

    const storeSubject: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('subject.store'), {
            preserveScroll: true,
            onSuccess: () => subjectCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const subjectCreated = () => {
        toast(t('subject_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_subject')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_subject')}</DialogTitle>
                <DialogDescription>
                    {t('create_subject_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeSubject}>

                    <CustomInput
                        id="title"
                        value={data.title}
                        setFormData={setData}
                        placeholder={t('title')}
                        errorMessage={errors.title}
                    />

                    <FileInput inputName='image' setFormData={setData} />

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
                            <button type="submit">{t('add_subject')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
