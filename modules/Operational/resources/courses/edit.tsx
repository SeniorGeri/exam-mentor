import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditCourseProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import FileInput from 'modules/Media/resources/js/file-input';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';

export function EditCourse({course, isOpen, closeModal}: EditCourseProps) {

    const { t } = useTranslation('Operational');

    const { currentLocale } = useLocale();

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: course?.id,
        title: course?.title ? course?.title[currentLocale] : '',
        description: course?.description,
        image: course?.image,
        locale: currentLocale ?? null
    });

    useEffect(() =>setData('title', course?.title[data.locale] || '') , [data.locale]);

    const updateCourse: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('course.update', course.id), {
            preserveScroll: true,
            onSuccess: () => updatedCourse(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedCourse = () => {
        toast(t('course_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_course')}</DialogTitle>
                <DialogDescription>
                    {t('edit_course_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateCourse}>
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
                            <button type="submit">{t('edit_course')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
