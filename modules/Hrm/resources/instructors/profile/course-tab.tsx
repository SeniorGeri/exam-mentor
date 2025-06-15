'use client';

import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CourseData {
    completedCourses: any[];
}

export default function CourseTab({ completedCourses }: CourseData) {

    const {t} = useTranslation();

    return (
        <TabsContent value="courses" className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold dark:text-white">{t('courses')}</h3>
                <Badge variant="secondary">{completedCourses.length} {t('courses')}</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {completedCourses.map((course) => (
                    <Card key={course.id} className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
                        <CardContent className="p-4">
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium dark:text-white">{course.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('by')} {course.instructor}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-medium dark:text-white">{course.rating}</span>
                                    </div>
                                    {course.certificate && (
                                        <Badge variant="outline" className="text-green-900 border-gray-300">
                                            <Award className="h-3 w-3 mr-1" />
                                            {t('certified')}
                                        </Badge>
                                    )}
                                </div>
                                <Progress value={course.completion} className="h-2" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </TabsContent>
    );
}
