import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler} from 'react';
import {toast} from 'sonner';
import {ActiveCourseStatus, EditActiveCourseProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { useTranslation } from 'react-i18next';
import CustomSelect from '@/components/input/custom-select';
import { SelectItem } from '@/components/ui/select';
import { useStatuses } from './status-context';

export function EditActiveCourseStatus({activeCourse, isOpen, closeModal}: EditActiveCourseProps) {

    const { t } = useTranslation('Operational');

    const { currentLocale } = useLocale();
    const statuses = useStatuses(); // Access directly from context

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: activeCourse?.id,
        status_id: activeCourse?.status_id,
    });

    const updateActiveCourse: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('active-course.update', activeCourse.id), {
            preserveScroll: true,
            onSuccess: () => updatedActiveCourse(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedActiveCourse = () => {
        toast(t('active_course_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_active_course')}</DialogTitle>
                <DialogDescription>
                    {t('edit_active_course_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateActiveCourse}>

                <CustomSelect
                        id="status_id"
                        value={data.status_id}
                        text = {statuses.find((count: ActiveCourseStatus) => count.id.toString() === data.status_id.toString())?.status['en'] || t('select_status')}
                        setFormData={setData}
                        placeholder={t('status')}
                        errorMessage={errors.status_id}
                    >   
                        <>
                            {statuses.map((status : ActiveCourseStatus) => (
                                <SelectItem key={status.id} value={status.id.toString()}>{status.status[currentLocale]}</SelectItem>
                            ))}
                        </>
                    </CustomSelect>

               

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                {t('close')}
                            </Button>
                        </DialogClose>

                        <Button variant="default" disabled={processing} asChild>
                            <button type="submit">{t('edit_active_course')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
