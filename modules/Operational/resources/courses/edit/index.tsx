'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { courseBreadcrumbs } from '../data';
import { Subject } from '../../subjects/data';
import { Grade } from '../../grades/data';
import { School } from '../../schools/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Course } from '../data';
import EditCourseForm from './form';
import { useTranslation } from 'react-i18next';

export default function EditCourse({ schools, subjects, grades, course }: { schools: School[], subjects: Subject[], grades: Grade[], course: Course }) {
    const { t } = useTranslation('Operational');

    return (
            <AppLayout breadcrumbs={courseBreadcrumbs}>
                <Head title="Courses" />
                <div className="flex flex-col gap-2 p-4 ">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('edit_course')}</CardTitle>
                            <CardDescription>{t('edit_course_desc')}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <EditCourseForm schools={schools} subjects={subjects} grades={grades} course={course}/>
                        </CardContent>
                    </Card>
                </div>
            </AppLayout>
    );
}
