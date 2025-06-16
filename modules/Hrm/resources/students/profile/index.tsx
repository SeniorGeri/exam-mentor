'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { studentBreadcrumbs } from '../data';
import { Student } from './data';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  // CreditCard,
  BookOpen,
  Clock,
} from "lucide-react"
import Header from './header';
import MainTab from './main-tab';
// import TransactionTab from './transaction-tab';
import OngoingTab from './ongoing-tab';import { useTranslation } from 'react-i18next';

export default function StudentProfile({ student }:   { student: Student }) {

  const {t} = useTranslation('Hrm');

  console.log(student);
  return (
    <AppLayout breadcrumbs={studentBreadcrumbs}>
      <Head title="Students" />
      <div className="gap-2 p-4 ">
        <div className="min-h-screen bg-gray-50 dark:bg-stone-950 p-4">
          <div className="mx-auto max-w-6xl">
            {/* Profile Header */}
            <Header student={student} />
            {/* Tabs Section */}
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
              <Tabs defaultValue="main" className="w-full">
                <CardHeader className="pb-4">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-50 dark:bg-green-900">
                    <TabsTrigger value="main" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {t('mainData')}
                    </TabsTrigger>
                    <TabsTrigger value="ongoing" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {t('ongoing')}
                    </TabsTrigger>
                  </TabsList>
                </CardHeader>

                <CardContent className="pt-0">
                  <MainTab student={student} />
                  <OngoingTab ongoingCourses={student.active_courses} />
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
