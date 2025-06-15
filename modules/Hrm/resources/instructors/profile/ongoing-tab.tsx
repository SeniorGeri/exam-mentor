'use client';

import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface OngoingData {
    ongoingCourses: any[];
}

export default function OngoingTab({ ongoingCourses }: OngoingData) {
    const { t } = useTranslation();

    return (
        <TabsContent value="ongoing" className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold dark:text-white">{t('ongoingCourses')}</h3>
                <Badge variant="secondary">{ongoingCourses.length} {t('active')}</Badge>
            </div>
            <div className="space-y-4">
                {ongoingCourses.map((course) => (
                    <Card key={course.id} className="border shadow-sm dark:bg-stone-950 dark:border-green-900">
                        <CardContent className="p-4">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-medium dark:text-white">{course.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">by {course.instructor}</p>
                                    </div>
                                    <Badge variant="outline">Due {course.dueDate}</Badge>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="dark:text-white">{t('progress')}</span>
                                        <span className="dark:text-white">{course.progress}%</span>
                                    </div>
                                    <Progress value={course.progress} className="h-2" />
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <div>
                                        <p className="text-sm font-medium dark:text-white">{t('nextLesson')}: {course.nextLesson}</p>
                                    </div>
                                    <Button size="sm">{t('continue')}</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </TabsContent>
    );
}
