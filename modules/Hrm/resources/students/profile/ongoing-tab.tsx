'use client';

import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { ActiveCourse } from "@/modules/Operational/resources/active-courses/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLocale } from "@/contexts/locale";

export default function OngoingTab({ ongoingCourses }: {ongoingCourses: ActiveCourse[]}) {
    const { t } = useTranslation('Hrm');
    const { currentLocale } = useLocale();
    return (
        <TabsContent value="ongoing" className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold dark:text-white">{t('ongoingCourses')}</h3>
                <Badge variant="secondary">{ongoingCourses.length} {t('active')}</Badge>
            </div>
            <div className="space-y-4">
            <Table>
                <TableHeader>
                    <TableRow key={'header'}>
                        <TableHead key={'id'}>
                           {t('id')}
                        </TableHead>
                        <TableHead key={'image'}>
                           {t('image')}
                        </TableHead>
                        <TableHead key={'course'}>
                           {t('title')}
                        </TableHead>
                        <TableHead key={'status'}>
                           {t('status')}
                        </TableHead>
                        <TableHead key={'instructor'}>
                           {t('instructor')}
                        </TableHead>
                        <TableHead key={'lessons_left'}>
                           {t('lessonsLeft')}
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {ongoingCourses.map((cell : ActiveCourse) => (
                
                    <TableRow
                        // key={ongoingCourses.id}
                        // data-state={ongoingCourses.getIsSelected() && "selected"}
                    >
                        <TableCell key={cell.id}>
                            {cell.id}
                        </TableCell>
                        <TableCell key={cell.course_instructor.image}>
                            <img src={cell.course_instructor.image} alt={cell.course_instructor.description} className="w-16 h-16 object-cover rounded" />
                        </TableCell>
                        <TableCell key={cell.course_instructor.description}>
                            {cell.course_instructor.description}
                        </TableCell>
                        <TableCell key={cell.status.status[currentLocale]}>
                            <Badge variant="secondary">{cell.status.status[currentLocale]}</Badge>
                        </TableCell>
                        <TableCell key={cell.instructor.name}>
                            {cell.instructor.name}
                        </TableCell>
                        <TableCell key={cell.left}>
                            {cell.left}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </div>
        </TabsContent>
    );
}
