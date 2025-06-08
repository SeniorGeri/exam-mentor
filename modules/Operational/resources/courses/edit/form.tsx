'use client';

import { useLocale } from '@/contexts/locale';
import CustomTextarea from '@/components/input/custom-textarea';
import { CustomMultiSelect } from '@/components/input/custom-multi-select';
import CustomInput from '@/components/input/custom-input';
import { FormEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from '@inertiajs/react';
import { Subject } from '../../subjects/data';
import { Grade } from '../../grades/data';
import { School } from '../../schools/data';
import FileInput from '../../../../Media/resources/js/file-input';
import { Button } from '@/components/ui/button';
import { Course } from '../data';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { Languages } from '@/components/languages';

export default function EditCourseForm({ schools, subjects, grades, course }: { schools: School[], subjects: Subject[], grades: Grade[], course: Course }) {
    const { t } = useTranslation('Operational');

    const { currentLocale } = useLocale();
    const {data, setData, put, processing, errors} = useForm({
        id: course?.id,
        title: course?.title ? course?.title[currentLocale] : '',
        description: course?.description,
        image: course?.image,
        locale: currentLocale ?? null,
        schools: course?.school_ids.map((school) => school.school_id),
        subjects: course?.subject_ids.map((subject) => subject.subject_id),
        grades: course?.grade_ids.map((grade) => grade.grade_id),
    });

    useEffect(() =>setData('title', course?.title[data.locale] || '') , [data.locale]);

    const storeCourseCreateCourse: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('course.update', course.id), {
            preserveScroll: true,
            onSuccess: () => toast(t('course_updated_succ'), {position: 'top-right', duration: 2000}),
        });
    };
    return (
        <form className="space-y-6" onSubmit={storeCourseCreateCourse}>

            <Languages currentLocale={data.locale} setData={setData}/>
            <CustomInput
                id="title"
                value={data.title}
                setFormData={setData}
                placeholder={t('title')}
                errorMessage={errors.title}
            />


            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <CustomMultiSelect
                    id="schools"
                    selected={data.schools}
                    onChange={(selected) => setData('schools', selected)}
                    placeholder={t('schools')}
                    options={schools.map((school) => { return { value: school.id, label: school.title[currentLocale] } })}
                />

                <CustomMultiSelect
                    id="subjects"
                    selected={data.subjects}
                    onChange={(selected) => setData('subjects', selected)}
                    placeholder={t('subjects')}
                    options={subjects.map((subject) => { return { value: subject.id, label: subject.title[currentLocale] } })}
                />

                <CustomMultiSelect
                    id="grades"
                    selected={data.grades}
                    onChange={(selected) => setData('grades', selected)}
                    placeholder={t('grades')}
                    options={grades.map((grade) => { return { value: grade.id, label: grade.title[currentLocale] } })}
                />
            </div>
            <CustomTextarea
                    className="col-span-2"
                    id="description"
                    value={data.description}
                    setFormData={setData}
                    placeholder={t('description')}
                    errorMessage={errors.description}
                />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        
                <FileInput inputName='image' setFormData={setData} defaultValue={[data.image]}/>
                <div className="flex justify-end items-end">
                    <Button variant="default" disabled={processing} size="sm" type="submit">
                        {t('edit_course')}
                    </Button>
                </div>
            </div>
        

    
        </form>    
    );
}
