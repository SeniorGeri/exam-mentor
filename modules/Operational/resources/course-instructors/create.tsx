'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { courseInstructorBreadcrumbs } from './data';
import { usePage } from '@inertiajs/react';
import { InertiaLangPageProps } from '@/types/helpers';
import { FormEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from '@inertiajs/react';
import { SharedData, User } from '@/types';
import { Course } from '../courses/data';
import { Language, PricingType } from '@/modules/Frontend/resources/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CustomSelect from '@/components/input/custom-select';
import { SelectItem } from '@/components/ui/select';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import FileInput from '../../../Media/resources/js/file-input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function CreateCourseInstructor({ courses, instructors, pricingTypes }: { courses: Course[], instructors: User[], pricingTypes: PricingType[] }) {
    const { t } = useTranslation('Operational');

    const { languages } = usePage<InertiaLangPageProps>().props;
    const { auth } = usePage<SharedData>().props;
    console.log(pricingTypes);
    
    const { data, setData, post, processing, errors } = useForm({
        course_id: '',
        instructor_id: '',
        pricing_type_id: '',
        language_id: '',
        price: 0,
        longevity: '',
        lessons: 0,
        description: '',
        image: '',

    });


    const storeCourseInstructor: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('course-instructor.store'), {
            preserveScroll: true,
            onSuccess: () => toast(t('course_instructor_created_succ'), {position: 'top-right', duration: 2000}),
            // onFinish: () => reset(),
        });
    };
    return (
        <AppLayout breadcrumbs={courseInstructorBreadcrumbs}>
            <Head title="Courses" />
            <div className="flex flex-col gap-2 p-4 ">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('create_course_instructor')}</CardTitle>
                        <CardDescription>{t('create_course_instructor_desc')}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form className="space-y-6" onSubmit={storeCourseInstructor}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CustomSelect
                                    id="pricing_type_id"
                                    className='col-span-1'
                                    value={data.pricing_type_id.toString()}
                                    text={pricingTypes.find((count: PricingType) => count.id.toString() === data.pricing_type_id)?.type || t('select_pricing_type')}
                                    setFormData={setData}
                                    placeholder={t('pricing_type')}
                                    errorMessage={errors.pricing_type_id}
                                >
                                    <>
                                        {pricingTypes.map((pricingType: PricingType) => (
                                            <SelectItem key={pricingType.id} value={pricingType.id.toString()}>{pricingType.type}</SelectItem>
                                        ))}
                                    </>
                                </CustomSelect>

                                <CustomInput
                                    id="price"
                                    type="number"
                                    className='col-span-1'
                                    value={data.price}
                                    setFormData={setData}
                                    placeholder={t('price')}
                                    errorMessage={errors.price}
                                />
                                <CustomInput
                                    id="lessons"
                                    type="number"
                                    className='col-span-1'
                                    value={data.lessons}
                                    setFormData={setData}
                                    placeholder={t('lessons')}
                                    errorMessage={errors.lessons}
                                />
                                <CustomInput
                                    id="longevity"
                                    type="text"
                                    className='col-span-1'
                                    value={data.longevity}
                                    setFormData={setData}
                                    placeholder={t('longevity')}
                                    errorMessage={errors.longevity}
                                />

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <CustomSelect
                                    id="course_id"
                                    className='col-span-1'
                                    value={data.course_id.toString()}
                                    text={courses.find((count: Course) => count.id.toString() === data.course_id)?.title[languages.main] || t('select_course')}
                                    setFormData={setData}
                                    placeholder={t('course')}
                                    errorMessage={errors.course_id}
                                >
                                    <>
                                        {courses.map((course: Course) => (
                                            <SelectItem key={course.id} value={course.id.toString()}>{course.title[languages.main]}</SelectItem>
                                        ))}
                                    </>
                                </CustomSelect>
                        
                                <CustomSelect
                                    id="language_id"
                                    className='col-span-1'
                                    value={data.language_id.toString()}
                                    text={languages.data.find((count: Language) => count.id.toString() === data.language_id)?.language[languages.main] || t('select_language')}
                                    setFormData={setData}
                                    placeholder={t('language')}
                                    errorMessage={errors.language_id}
                                >
                                    <>
                                        {languages.data.map((language: Language) => (
                                            <SelectItem key={language.id} value={language.id.toString()}>{language.language[languages.main]}</SelectItem>
                                        ))}
                                    </>
                                </CustomSelect>
                                { auth.user.roles.find((role) => role.name === 'admin') && (
                                        <CustomSelect
                                        id="instructor_id"
                                        className='col-span-1'
                                        value={data.instructor_id.toString()}
                                        text={instructors.find((count: User) => count.id.toString() === data.instructor_id)?.name || t('select_instructor')}
                                        setFormData={setData}
                                        placeholder={t('instructor')}
                                        errorMessage={errors.instructor_id}
                                    >
                                        <>
                                            {instructors.map((instructor: User) => (
                                                <SelectItem key={instructor.id} value={instructor.id.toString()}>{instructor.name}</SelectItem>
                                            ))}
                                        </>
                                    </CustomSelect> 
                                )}
                            
                            </div>

                                            
                            <CustomTextarea
                                id="description"
                                className='col-span-1'
                                value={data.description}
                                setFormData={setData}
                                placeholder={t('description')}
                                errorMessage={errors.description}
                            />
                            <FileInput inputName='image' setFormData={setData} />

                            <div className="flex justify-end items-end">
                                <Button disabled={processing} variant="default" size="sm" type="submit">
                                    {t('create_course_instructor')}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
