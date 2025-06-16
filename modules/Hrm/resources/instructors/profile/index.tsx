'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { instructorBreadcrumbs } from '../data';
import { Instructor } from './data';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  // CreditCard,
  BookOpen,
  Clock,
} from "lucide-react"
import DataCards from './data-cards';
import Header from './header';
import MainTab from './main-tab';
// import TransactionTab from './transaction-tab';
import CourseTab from './course-tab';
import OngoingTab from './ongoing-tab';import { useTranslation } from 'react-i18next';

export default function InstructorProfile({ instructor }:   { instructor: Instructor }) {

  const {t} = useTranslation('Hrm');

  console.log(instructor);
  return (
    <AppLayout breadcrumbs={instructorBreadcrumbs}>
      <Head title="Instructors" />
      <div className="gap-2 p-4 ">
        <div className="min-h-screen bg-gray-50 dark:bg-stone-950 p-4">
          <div className="mx-auto max-w-6xl">
            {/* Profile Header */}
            <Header instructor={instructor} />

            {/* Cards Section */}
            <DataCards totalCourses={instructor.active_courses.length} totalOngoingCourses={instructor.active_courses.length} totalLiquidations={instructor.liquidations.length} />

            {/* Tabs Section */}
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
              <Tabs defaultValue="main" className="w-full">
                <CardHeader className="pb-4">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-50 dark:bg-green-900">
                    <TabsTrigger value="main" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {t('mainData')}
                    </TabsTrigger>
                    {/* <TabsTrigger value="transactions" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      {t('transactions')}
                    </TabsTrigger> */}
                    <TabsTrigger value="courses" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {t('courses')}
                    </TabsTrigger>
                    <TabsTrigger value="ongoing" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {t('ongoing')}
                    </TabsTrigger>
                  </TabsList>
                </CardHeader>

                <CardContent className="pt-0">
                  <MainTab instructor={instructor} />

                  {/* <TransactionTab transactions={instructor.transactions} /> */}

                  <CourseTab completedCourses={instructor.courses} />

                  <OngoingTab ongoingCourses={instructor.active_courses} />
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
