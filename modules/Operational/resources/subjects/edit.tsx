import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditSubjectProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import FileInput from '@/modules/Media/resources/js/file-input';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';

export function EditSubject({subject, isOpen, closeModal}: EditSubjectProps) {

    const { t } = useTranslation('Operational');

    const { currentLocale } = useLocale();

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: subject?.id,
        title: subject?.title ? subject?.title[currentLocale] : '',
        description: subject?.description,
        image: subject?.image,
        locale: currentLocale ?? null
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() =>setData('title', subject?.title[data.locale] || '') , [data.locale]);

    const updateSubject: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('subject.update', subject.id), {
            preserveScroll: true,
            onSuccess: () => updatedSubject(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedSubject = () => {
        toast(t('subject_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_subject')}</DialogTitle>
                <DialogDescription>
                    {t('edit_subject_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateSubject}>
                    <Languages currentLocale={data.locale} setData={setData}/>

                     <CustomInput
                        id="title"
                        value={data.title}
                        setFormData={setData}
                        placeholder={t('title')}
                        errorMessage={errors.title}
                    />

                    <FileInput defaultValue={[data.image]} inputName='image' setFormData={setData} />


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
                            <button type="submit">{t('edit_subject')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
