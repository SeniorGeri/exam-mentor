'use client';

import { CourseInstructor, Curriculum, FormCurriculum, FormInclude, Include } from '../data';
import { FormEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from '@inertiajs/react';
import { User } from '@/types';
import { Course } from '../../courses/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CustomSelect from '@/components/input/custom-select';
import { Button } from '@/components/ui/button';
import FileInput from '../../../../Media/resources/js/file-input';
import CustomTextarea from '@/components/input/custom-textarea';
import { SelectItem } from '@/components/ui/select';
import { Language, PricingType } from '@/modules/Frontend/resources/data';
import CustomInput from '@/components/input/custom-input';
import { toast } from 'sonner';
import { Plus, Trash2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import CustomTextEditor from '@/components/input/custom-text-editor';
import { useLocale } from '@/contexts/locale';
import { usePage } from '@inertiajs/react';
import { InertiaLangPageProps } from '@/types/helpers';
import { SharedData } from '@/types';

export default function EditCourseInstructorForm({ courseInstructor, courses, instructors, pricingTypes }: { courseInstructor: CourseInstructor, courses: Course[], instructors: User[], pricingTypes: PricingType[] }) {
    const { t } = useTranslation('Operational');

    const { currentLocale } = useLocale();
    const { languages } = usePage<InertiaLangPageProps>().props;
    const { auth } = usePage<SharedData>().props;

    const { data, setData, put, processing, errors } = useForm({
        id: courseInstructor.id,
        course_id: courseInstructor.course_id,
        instructor_id: courseInstructor.instructor_id,
        pricing_type_id: courseInstructor.pricing_type_id,
        language_id: courseInstructor.language_id,
        price: courseInstructor.price,
        longevity: courseInstructor.longevity,
        lessons: courseInstructor.lessons,
        description: courseInstructor.description,
        image: courseInstructor.image,
        curricula: courseInstructor.curricula.map((curriculum: Curriculum) => {
            return {
                id: curriculum.id,
                title: curriculum.title[currentLocale],
                description: curriculum.description[currentLocale],
            };
        }),
        includes: courseInstructor.includes.map((include: Include) => {
            return {
                id: include.id,
                title: include.title[currentLocale],
            };
        }),
    });

    const generateRandomNum = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

    const setCurriculum = (key: string, value: string) => {
        const [curriculumKey, id]: ['title' | 'description', string] = key.split('.') as ['title' | 'description', string];
        setData(
            'curricula',
            data.curricula.map((curriculum: FormCurriculum) => {
                if (curriculum.id.toString() === id) {
                    curriculum[curriculumKey] = value;
                }
                return curriculum;
            }),
        );
    };


    const setInclude = (key: string, value: string) => {
        const [includeKey, id]: ['title', string] = key.split('.') as ['title', string];
        setData(
            'includes',
            data.includes.map((include: FormInclude) => {
                if (include.id.toString() === id) {
                    include[includeKey] = value;
                }
                return include;
            }),
        );
    };

    const updateCourseInstructor: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('course-instructor.update', courseInstructor.id), {
            preserveScroll: true,
            onSuccess: () => toast(t('course_instructor_updated_succ'), { position: 'top-right', duration: 2000 }),
        });
    };
    return (
        <form className="space-y-6" onSubmit={updateCourseInstructor}>

            <Card>
                <CardHeader>
                    <CardTitle>{t('update_course_instructor')}</CardTitle>
                    <CardDescription>{t('update_course_instructor_desc')}</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CustomSelect
                            id="pricing_type_id"
                            className='col-span-1'
                            value={data.pricing_type_id.toString()}
                            text={pricingTypes.find((count: PricingType) => count.id.toString() === data.pricing_type_id.toString())?.type || t('select_pricing_type')}
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
                            text={courses.find((count: Course) => count.id.toString() === data.course_id.toString())?.title[languages.main] || t('select_course')}
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
                            text={languages.data.find((count: Language) => count.id.toString() === data.language_id.toString())?.language[languages.main] || t('select_language')}
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
                        {auth.user.roles.find((role) => role.name === 'admin') && (
                            <CustomSelect
                                id="instructor_id"
                                className='col-span-1'
                                value={data.instructor_id.toString()}
                                text={instructors.find((count: User) => count.id.toString() === data.instructor_id.toString())?.name || t('select_instructor')}
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



                </CardContent>
            </Card>

            <Card>
                <CardContent className='space-y-3'>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                        <Label> {t('includes')}</Label>
                        <Button
                            type="button"
                            size="sm"
                            onClick={() =>
                                setData('includes', [
                                    ...data.includes,
                                    {
                                        id: generateRandomNum(),
                                        title: 'New curricula',
                                    },
                                ])
                            }
                        >
                            <Plus className="mr-1 h-4 w-4" />
                            {t('add_includes')}
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.includes.map((include : FormInclude, index : number) => (
                            <div key={index} className="space-y-2 p-3 col-span-1">
                                <div className="flex items-center">
                                    <CustomInput
                                        className="w-full"
                                        value={include.title}
                                        setFormData={setInclude}
                                        id={'title.' + include.id}
                                        placeholder={t('title')}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="mt-4 ml-2"
                                        onClick={() => {
                                            setData(
                                                'includes',
                                                data.includes.filter((_, i) => i !== index),
                                            );
                                        }}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                        <Label> {t('curricula')}</Label>
                        <Button
                            type="button"
                            size="sm"
                            onClick={() =>
                                setData('curricula', [
                                    ...data.curricula,
                                    {
                                        id: generateRandomNum(),
                                        title: 'New include',
                                        description: '',

                                    },
                                ])
                            }
                        >
                            <Plus className="mr-1 h-4 w-4" />
                            {t('add_curricula')}
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.curricula.map((curriculum : FormCurriculum, index : number) => (
                            <div key={index} className="space-y-2 p-3 col-span-2">
                                <div className="flex items-center">
                                    <CustomInput
                                        className="w-full"
                                        value={curriculum.title}
                                        setFormData={setCurriculum}
                                        id={'title.' + curriculum.id}
                                        placeholder={t('title')}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="mt-4 ml-2"
                                        onClick={() => {
                                            setData(
                                                'curricula',
                                                data.curricula.filter((_, i) => i !== index),
                                            );
                                        }}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                                <CustomTextEditor id={'description.' + curriculum.id} defaultValue={curriculum.description} setFormData={setCurriculum} />

                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className='space-y-6'>
                    <CustomTextarea
                        id="description"
                        className='col-span-1'
                        value={data.description}
                        setFormData={setData}
                        placeholder={t('description')}
                        errorMessage={errors.description}
                    />
                    <FileInput inputName='image' setFormData={setData} defaultValue={[data.image]}/>

                    <div className="flex justify-end items-end">
                        <Button disabled={processing} variant="default" size="sm" type="submit">
                            {t('update_course_instructor')}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
}
