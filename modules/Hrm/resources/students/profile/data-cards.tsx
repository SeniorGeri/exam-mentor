'use client';

import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card"
import { BookOpen, Award, TrendingUp } from "lucide-react"
import { useTranslation } from "react-i18next";

export default function DataCards({ totalCourses, totalOngoingCourses, totalLiquidations }: { totalCourses: number, totalOngoingCourses: number, totalLiquidations: number }) {

    const {t} = useTranslation('Hrm');
    
   return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('totalCourses')}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalCourses}</p>
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
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalOngoingCourses}</p>
                </div>
                <Award className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
            </CardContent>
            </Card>
            <Card className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('totalLiquidations')}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">${totalLiquidations}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
            </CardContent>
            </Card>
        </div>
   );
}
