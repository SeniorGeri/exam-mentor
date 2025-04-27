import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditGradeProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';

export function EditGrade({grade, isOpen, closeModal}: EditGradeProps) {

    const { t } = useTranslation('Operational');

    const { currentLocale } = useLocale();

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: grade?.id,
        title: grade?.title ? grade?.title[currentLocale] : '',
        description: grade?.description,
        locale: currentLocale ?? null
    });

    useEffect(() =>setData('title', grade?.title[data.locale] || '') , [data.locale]);

    const updateGrade: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('grade.update', grade.id), {
            preserveScroll: true,
            onSuccess: () => updatedGrade(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedGrade = () => {
        toast(t('grade_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_grade')}</DialogTitle>
                <DialogDescription>
                    {t('edit_grade_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateGrade}>
                    <Languages currentLocale={data.locale} setData={setData}/>

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
                            <button type="submit">{t('edit_grade')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
