import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { BookOpenCheck, GraduationCap, Landmark, UserPen } from 'lucide-react';
import { ActiveCourseDashboardData } from './data';
import { useTranslation } from 'react-i18next';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ activeCourses }: {activeCourses: ActiveCourseDashboardData }) {
    const {t} = useTranslation('Main');
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <div className="flex h-full items-center justify-around gap-4">
                            <GraduationCap className="h-20 w-20" />
                            <div className="flex flex-col gap-2">
                                <p className="text-center text-lg font-semibold">{t('total_courses')}</p>
                                <p className="text-center text-sm">{t('total')}: {activeCourses.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <div className="flex h-full items-center justify-around gap-4">
                            <BookOpenCheck className="h-20 w-20" />
                            <div className="flex flex-col">
                                <p className="text-center text-lg font-semibold">{t('active_courses')}</p>
                                <p className="text-center text-sm">{t('total')}: {activeCourses.total_active + activeCourses.total_approved + activeCourses.total_finished}</p>
                                <p className="text-center text-sm">{t('active')}: {activeCourses.total_active}</p>
                                <p className="text-center text-sm">{t('approved')}: {activeCourses.total_approved}</p>
                                <p className="text-center text-sm">{t('finished')}: {activeCourses.total_finished}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <div className="flex h-full items-center justify-around gap-4">
                            <UserPen className="h-20 w-20" />
                            <div className="flex flex-col gap-2">
                                <p className="text-center text-lg font-semibold">{t('total_finished')}</p>
                                <p className="text-center text-lg">{t('total_finished')}: {activeCourses.total_finished}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <div className="flex h-full items-center justify-around gap-4">
                            <Landmark className="h-20 w-20" />
                            <div className="flex flex-col">
                                <p className="text-center text-lg font-semibold">{t('total_invested')}</p>
                                <p className="text-center text-sm">{t('total_invested')}: {activeCourses.total_price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AppLayout >
    );
}
