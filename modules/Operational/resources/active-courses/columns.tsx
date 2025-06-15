'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {ActiveCourse, ActiveCourseStatus} from "./data";
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { CourseInstructor } from '../course-instructors/data';
import { User } from '@/types';



export const ActiveCourseColumns = (currentLocale :string): ColumnDef<ActiveCourse>[] => {
    const { t } = useTranslation('Operational');


    return [
        {
            accessorKey: 'NR',
            header: () => t('nr'),
            cell: ({row, table}) => {
                return (
                    <div className="flex space-x-2 px-4">
                        <span className="max-w-[50px] truncate font-light">
                            {row.index + 1 + table.getState().pagination.pageIndex * table.getState().pagination.pageSize}
                        </span>
                    </div>
                );
            },
        },
        {
            accessorKey: 'course_instructor',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('image')}/>,
            cell: ({row}) => {
                const course : CourseInstructor = row.getValue('course_instructor')
                console.log(course)
                return (
                    <Avatar>
                        <AvatarImage className="h-12 w-12" src={course?.image} alt={''} />
                    </Avatar>
                )
            },
            enableColumnFilter: false,
            enableSorting: false,
        },
        {
            accessorKey: 'title',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('title')}/>,
            cell: ({row}) => {
                const course : CourseInstructor = row.getValue('course_instructor')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{course?.description }</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'status',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('status')}/>,
            cell: ({row}) => {
                const course : ActiveCourseStatus = row.getValue('status')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{course?.status[currentLocale] || t('not_translated')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'instructor',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('instructor')}/>,
            cell: ({row}) => {
                const instructor : User = row.getValue('instructor')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{instructor?.name }</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'student',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('student')}/>,
            cell: ({row}) => {
                const student : User = row.getValue('student')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{student?.name }</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'left',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('lessons_left')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{row.getValue('left')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'description',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('description')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{row.getValue('description')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: false,
        },
    ];
}
