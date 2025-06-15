'use client';

import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card"
import { BookOpen, Award, Clock, TrendingUp } from "lucide-react"
import { useTranslation } from "react-i18next";

interface UserData {
    totalCourses: number;
    completedCourses: number;
    ongoingCourses: number;
    totalSpent: number;
}

export default function DataCards({ userData }: { userData: UserData }) {

    const {t} = useTranslation();
    
   return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('totalCourses')}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{userData.totalCourses}</p>
                </div>
                <BookOpen className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
            </CardContent>
            </Card>
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('completedCourses')}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{userData.completedCourses}</p>
                </div>
                <Award className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
            </CardContent>
            </Card>
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('inProgress')}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{userData.ongoingCourses}</p>
                </div>
                <Clock className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
            </CardContent>
            </Card>
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('totalSpent')}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">${userData.totalSpent}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
            </CardContent>
            </Card>
        </div>
   );
}
