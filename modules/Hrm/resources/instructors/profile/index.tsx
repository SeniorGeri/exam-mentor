'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { instructorBreadcrumbs } from '../data';
import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  CreditCard,
  BookOpen,
  Clock,
} from "lucide-react"
import DataCards from './data-cards';
import Header from './header';
import MainTab from './main-tab';
import TransactionTab from './transaction-tab';
import CourseTab from './course-tab';
import OngoingTab from './ongoing-tab';
import { useTranslation } from 'react-i18next';

export default function InstructorProfile() {

  const [isEditing, setIsEditing] = useState(false)

  const {t} = useTranslation();

  const userData = {
    name: "Alexandra Chen",
    email: "alexandra.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "March 2023",
    avatar: "/placeholder.svg?height=120&width=120",
    bio: "Passionate learner and technology enthusiast with a focus on web development and design.",
    totalCourses: 12,
    completedCourses: 8,
    ongoingCourses: 4,
    totalSpent: 2450,
  }

  const transactions = [
    { id: 1, course: "Advanced React Development", amount: 299, date: "2024-01-15", status: "Completed" },
    { id: 2, course: "UI/UX Design Masterclass", amount: 199, date: "2024-01-10", status: "Completed" },
    { id: 3, course: "Node.js Backend Development", amount: 249, date: "2023-12-28", status: "Completed" },
    { id: 4, course: "Python for Data Science", amount: 179, date: "2023-12-15", status: "Refunded" },
  ]

  const completedCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "John Smith",
      rating: 4.8,
      completion: 100,
      certificate: true,
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Sarah Johnson",
      rating: 4.9,
      completion: 100,
      certificate: true,
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      instructor: "Mike Wilson",
      rating: 4.7,
      completion: 100,
      certificate: true,
    },
    { id: 4, title: "CSS Grid & Flexbox", instructor: "Emma Davis", rating: 4.6, completion: 100, certificate: false },
  ]

  const ongoingCourses = [
    {
      id: 1,
      title: "Node.js Backend Development",
      instructor: "David Brown",
      progress: 65,
      nextLesson: "Authentication & Security",
      dueDate: "2024-02-15",
    },
    {
      id: 2,
      title: "TypeScript Deep Dive",
      instructor: "Lisa Anderson",
      progress: 40,
      nextLesson: "Advanced Types",
      dueDate: "2024-02-20",
    },
    {
      id: 3,
      title: "GraphQL Fundamentals",
      instructor: "Tom Garcia",
      progress: 25,
      nextLesson: "Mutations & Subscriptions",
      dueDate: "2024-02-25",
    },
  ]

  return (
    <AppLayout breadcrumbs={instructorBreadcrumbs}>
      <Head title="Instructors" />
      <div className="gap-2 p-4 ">
        <div className="min-h-screen bg-gray-50 dark:bg-stone-950 p-4">
          <div className="mx-auto max-w-6xl">
            {/* Profile Header */}
            <Header userData={userData} />

            {/* Cards Section */}
            <DataCards userData={userData} />

            {/* Tabs Section */}
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
              <Tabs defaultValue="main" className="w-full">
                <CardHeader className="pb-4">
                  <TabsList className="grid w-full grid-cols-4 bg-gray-50 dark:bg-green-900">
                    <TabsTrigger value="main" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {t('mainData')}
                    </TabsTrigger>
                    <TabsTrigger value="transactions" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      {t('transactions')}
                    </TabsTrigger>
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
                  <MainTab userData={userData} isEditing={isEditing} />

                  <TransactionTab transactions={transactions} />

                  <CourseTab completedCourses={completedCourses} />

                  <OngoingTab ongoingCourses={ongoingCourses} />
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
