import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Award, Star, UserPen, Users } from 'lucide-react';
import { ActiveCourseDashboardData, UserDashboardData } from './data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Avatar } from '@/components/ui/avatar';
import { Instructor } from '@/modules/Hrm/resources/instructors/data';
import { Student } from '@/modules/Hrm/resources/students/profile/data';
import { useTranslation } from 'react-i18next';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ instructors, students, courses, activeCourses, instructorList   , studentList }: { instructors: UserDashboardData, students: UserDashboardData, courses: number, activeCourses: ActiveCourseDashboardData, instructorList: Instructor[], studentList: Student[] }) {
    const {t} = useTranslation('Main');
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <div className="flex h-full items-center justify-around gap-4">
                            <UserPen className="h-20 w-20" />
                            <div className="flex flex-col gap-2">
                                <p className="text-center text-lg font-semibold">{t('instructors')}</p>
                                <p className="text-center text-lg">{t('total')}: {instructors.total}</p>
                                <p className="text-center text-lg">{t('active')}: {instructors.total_active}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <div className="flex h-full items-center justify-around gap-4">
                            <UserPen className="h-20 w-20" />
                            <div className="flex flex-col gap-2">
                                <p className="text-center text-lg font-semibold">{t('students')}</p>
                                <p className="text-center text-lg">{t('total')}: {students.total}</p>
                                <p className="text-center text-lg">{t('active')}: {students.total_active}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <div className="flex h-full items-center justify-around gap-4">
                            <UserPen className="h-20 w-20" />
                            <div className="flex flex-col gap-2">
                                <p className="text-center text-lg font-semibold">{t('courses')}</p>
                                <p className="text-center text-lg">{t('total')}: {courses}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <div className="flex h-full items-center justify-around gap-4">
                            <UserPen className="h-20 w-20" />
                            <div className="flex flex-col">
                                <p className="text-center text-lg font-semibold">{t('active_courses')}</p>
                                <p className="text-center text-sm">{t('total')}: {activeCourses.total}</p>
                                <p className="text-center text-sm">{t('active')}: {activeCourses.total_active}</p>
                                <p className="text-center text-sm">{t('rejected')}: {activeCourses.total_rejected}</p>
                                <p className="text-center text-sm">{t('finished')}: {activeCourses.total_finished}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <Card className="w-full max-w-2xl mx-auto col-span-1">
                        <CardHeader className="text-center">
                            <div className="flex items-center justify-center gap-1">
                                <Award className="h-6 w-6 text-yellow-500" />
                                <CardTitle className="text-2xl font-bold">{t('top_5_instructors')}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {instructorList.map((instructor, index) => (
                                <div
                                    key={instructor.id}
                                    className="flex items-center gap-4 p-1 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="relative">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src={instructor.profile_pic || "/placeholder.svg"} alt={instructor.name} />
                                            </Avatar>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-lg truncate">{instructor.name}</h3>
                                                <Badge variant="secondary" className="text-xs">
                                                    {instructor.specialization}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-4 w-4" />
                                                    <span>{instructor.active_courses_count} {t('courses')}</span>
                                                </div>
                                                <div className="hidden sm:block">
                                                    <span> {t('joined')} {new Date(instructor.created_at).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-2xl mx-auto col-span-1">
                        <CardHeader className="text-center">
                            <div className="flex items-center justify-center gap-1">
                                <Award className="h-6 w-6 text-yellow-500" />
                                <CardTitle className="text-2xl font-bold">{t('top_5_students')}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {studentList.map((student, index) => (
                                <div
                                    key={student.id}
                                    className="flex items-center gap-4 p-1 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="relative">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src={student.profile_pic || "/placeholder.svg"} alt={student.name} />
                                            </Avatar>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-lg truncate">{student.name}</h3>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-4 w-4" />
                                                    <span>{student.active_courses_count} {t('courses')}</span>
                                                </div>
                                                <div className="hidden sm:block">
                                                    <span>{t('joined')} {new Date(student.created_at).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

        </AppLayout >
    );
}
