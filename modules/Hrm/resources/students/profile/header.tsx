'use client';

import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, MapPin, Calendar } from "lucide-react"
import { useTranslation } from "react-i18next";
import { Student } from "./data";

export default function Header({ student }: { student: Student }) {
    const {t} = useTranslation('Hrm');

    return (
        <Card className="mb-8 overflow-hidden border shadow-sm dark:bg-stone-950 dark:border-green-900">
            <div className="h-24 bg-gray-100 dark:bg-green-900"></div>
            <CardContent className="relative px-8 pb-8">
                <div className="flex flex-col items-center sm:flex-row sm:items-end sm:space-x-6">
                    <Avatar className="h-28 w-28 -mt-14 border-4 border-white shadow-lg">
                        <AvatarImage src={student.profile_pic || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback className="text-xl font-semibold bg-gray-600 dark:bg-gray-500 text-white">
                            {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{student.name}</h1>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {student.email}
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {student.address}
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {t('joined')} {Date.parse(student.created_at)}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
