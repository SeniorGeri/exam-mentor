'use client';

import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";


export function CreateGrade() {

    const { t } = useTranslation('Operational');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        title: '',
        description: ''
    });

    const storeGradeCreateGrade: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('grade.store'), {
            preserveScroll: true,
            onSuccess: () => gradeCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const gradeCreated = () => {
        toast(t('grade_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_grade')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_grade')}</DialogTitle>
                <DialogDescription>
                    {t('create_grade_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeGradeCreateGrade}>

                    <CustomInput
                        id="title"
                        value={data.title}
                        setFormData={setData}
                        placeholder={t('title')}
                        errorMessage={errors.title}
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
                            <button type="submit">{t('add_grade')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
