'use client';

import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {  Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CourseInstructor } from "@/modules/Frontend/resources/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export default function CourseTab({ completedCourses }: {completedCourses: CourseInstructor[]}) {

    const {t} = useTranslation('Hrm');

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
                            <div className="space-y-2 flex items-center justify-start gap-4">
                                <Avatar className="h-28 w-28 border-4 border-white shadow-lg">
                                    <AvatarImage src={course.course.image || "/placeholder.svg"} alt={course.course.title["en"]} />
                                    <AvatarFallback className="text-xl font-semibold bg-gray-600 dark:bg-gray-500 text-white">
                                        {course.course.title["en"]
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <h4 className="font-medium dark:text-white">{course.course.title["en"]}</h4>
                                    <Badge variant="outline" className="text-green-600 border-gray-300 mx-2">
                                            <Award className="h-3 w-3 mr-1" />
                                            {t('lessons')}: {course.lessons}
                                    </Badge>
                                    <Badge variant="outline" className="text-green-600 border-gray-300 mx-2">
                                            <Award className="h-3 w-3 mr-1" />
                                            {t('time')}: {course.longevity}
                                    </Badge>
                                    <Badge variant="outline" className="text-green-600 border-gray-300 mx-2">
                                            <Award className="h-3 w-3 mr-1" />
                                            {t('price')}: {course.price}
                                    </Badge>
                                 
                                </div>
                             
                            </div>
                            <Button size="sm" className="mt-2 float-right" variant="outline">
                                <Link href={route('frontend.course', course.id)} target="_blank">
                                    {t('viewCourse')}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </TabsContent>
    );
}
