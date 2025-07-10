'use client';

import { FormEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { User } from '@/types';
import { ActiveCourseStatus } from '../data';
import { CourseInstructor } from '../../course-instructors/data';
import CustomSelect from '@/components/input/custom-select';
import { SelectItem } from '@/components/ui/select';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/react';
import { InertiaLangPageProps } from '@/types/helpers';

export default function CreateActiveCourse({ statuses, students, courseInstructors }: { statuses: ActiveCourseStatus[], students: User[], courseInstructors: CourseInstructor[] }) {
    const { t } = useTranslation('Operational');

    const { languages } = usePage<InertiaLangPageProps>().props;
    
    const { data, setData, post, processing, errors } = useForm({
        status_id: '',
        student_id: '',
        course_instructor_id: '',
        value: '',
        left: '',
        liquidation_percentage: '',
        description: '',
    });

    const storeActiveCourse: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('active-course.store'), {
            preserveScroll: true,
            onSuccess: () => toast(t('active_course_created_succ'), { position: 'top-right', duration: 2000 }),
        });
    };

    return (
        <form className="space-y-6" onSubmit={storeActiveCourse}>

            <Card>
                <CardHeader>
                    <CardTitle>{t('create_active_course')}</CardTitle>
                    <CardDescription>{t('create_active_course_desc')}</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        
                        <CustomSelect
                            id="status_id"
                            className='col-span-1'
                            value={data.status_id.toString()}
                            text={statuses.find((count: ActiveCourseStatus) => count.id.toString() === data.status_id.toString())?.status[languages.main] || t('select_status')}
                            setFormData={setData}
                            placeholder={t('status')}
                            errorMessage={errors.status_id}
                        >
                            <>
                                {statuses.map((status: ActiveCourseStatus) => (
                                    <SelectItem key={status.id} value={status.id.toString()}>{status.status[languages.main]}</SelectItem>
                                ))}
                            </>
                        </CustomSelect>
                        <CustomSelect
                            id="student_id"
                            className='col-span-1'
                            value={data.student_id.toString()}
                            text={students.find((count: User) => count.id.toString() === data.student_id.toString())?.name || t('select_student')}
                            setFormData={setData}
                            placeholder={t('student')}
                            errorMessage={errors.student_id}
                        >
                            <>
                                {students.map((student: User) => (
                                    <SelectItem key={student.id} value={student.id.toString()}>{student.name}</SelectItem>
                                ))}
                            </>
                        </CustomSelect>
                        <CustomSelect
                            id="course_instructor_id"
                            className='col-span-1'
                            value={data.course_instructor_id.toString()}
                            text={courseInstructors.find((count: CourseInstructor) => count.id.toString() === data.course_instructor_id.toString())?.course.title[languages.main]  || t('select_course_instructor')}
                            setFormData={setData}
                            placeholder={t('course_instructor')}
                            errorMessage={errors.course_instructor_id}
                        >
                            <>
                                {courseInstructors.map((courseInstructor: CourseInstructor) => (
                                    <SelectItem key={courseInstructor.id} value={courseInstructor.id.toString()}>{courseInstructor.course.title[languages.main] + ' - ' + courseInstructor.instructor.name}</SelectItem>
                                ))}
                            </>
                        </CustomSelect>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <CustomInput
                            id="value"
                            type="number"
                            className='col-span-1'
                            value={data.value}
                            setFormData={setData}
                            placeholder={t('value')}
                            errorMessage={errors.value}
                        />
                        <CustomInput
                            id="left"
                            type="number"
                            className='col-span-1'
                            value={data.left}
                            setFormData={setData}
                            placeholder={t('left')}
                            errorMessage={errors.left}
                        />
                        <CustomInput
                            id="liquidation_percentage"
                            type="number"
                            className='col-span-1'
                            value={data.liquidation_percentage}
                            setFormData={setData}
                            placeholder={t('liquidation_percentage')}
                            errorMessage={errors.liquidation_percentage}
                        />
                     
                    </div>
                    <CustomTextarea
                            id="description"
                            className='col-span-1'
                            value={data.description}
                            setFormData={setData}
                            placeholder={t('description')}
                            errorMessage={errors.description}
                        />


                    <div className="flex justify-end items-end mt-4">
                        <Button disabled={processing} variant="default" size="sm" type="submit">
                            {t('create_active_course')}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
}
