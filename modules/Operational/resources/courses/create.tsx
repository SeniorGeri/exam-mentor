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
import { useClassifications } from './classifications-context';
import { CustomMultiSelect } from '@/components/input/custom-multi-select';


export function CreateCourse() {

    const classifications = useClassifications();

    const { t } = useTranslation('Operational');

    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        image: '',
        title: '',
        description: '',
        schools: [],
        subjects: [],
        grades: [],

    });


    const storeCourseCreateCourse: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('course.store'), {
            preserveScroll: true,
            onSuccess: () => courseCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const courseCreated = () => {
        toast(t('course_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_course')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_course')}</DialogTitle>
                <DialogDescription>
                    {t('create_course_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeCourseCreateCourse}>

                    <CustomInput
                        id="title"
                        value={data.title}
                        setFormData={setData}
                        placeholder={t('title')}
                        errorMessage={errors.title}
                    />

                    <FileInput inputName='image' setFormData={setData} />

                    <CustomMultiSelect
                        id="schools"
                        selected={data.schools}
                        onChange={(selected) => setData('schools', selected)}
                        placeholder={t('schools')}
                        options={classifications['schools']}
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
                            <button type="submit">{t('add_course')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
