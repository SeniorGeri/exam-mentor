import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler} from 'react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import { useTranslation } from 'react-i18next';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import {EditCourseInstructorProps} from "./data";

export function EditCourseInstructor({courseInstructor, isOpen, closeModal}: EditCourseInstructorProps) {

    const { t } = useTranslation('Operational');


    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: courseInstructor?.id,
        value: courseInstructor?.value,
        description: courseInstructor?.description,
    });

    const updateCourseInstructor: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('course-instructor.update', courseInstructor.id), {
            preserveScroll: true,
            onSuccess: () => updatedCourseInstructor(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedCourseInstructor = () => {
        toast(t('course_instructor_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_course_instructor')}</DialogTitle>
                <DialogDescription>
                    {t('edit_course_instructor_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateCourseInstructor}>

                     <CustomInput
                        id="value"
                        type="number"
                        value={data.value}
                        setFormData={setData}
                        placeholder={t('value')}
                        errorMessage={errors.value}
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
                            <button type="submit">{t('edit_course_instructor')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
