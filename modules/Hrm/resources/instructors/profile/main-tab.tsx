'use client';

import { TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";

interface UserData {
    name: string;
    email: string;
    phone: string;
    location: string;
}

export default function MainTab({ userData, isEditing }: { userData: UserData, isEditing: boolean }) {
    const {t} = useTranslation();

    return (
        <TabsContent value="main" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold dark:text-white">{t('personalInformation')}</h3>
                    <div className="space-y-3">
                        <div>
                            <Label htmlFor="fullName">{t('fullName')}</Label>
                            <Input id="fullName" value={userData.name} disabled={!isEditing} />
                        </div>
                        <div>
                            <Label htmlFor="email">{t('emailAddress')}</Label>
                            <Input id="email" value={userData.email} disabled={!isEditing} />
                        </div>
                        <div>
                            <Label htmlFor="phone">{t('phoneNumber')}</Label>
                            <Input id="phone" value={userData.phone} disabled={!isEditing} />
                        </div>
                        <div>
                            <Label htmlFor="location">{t('location')}</Label>
                            <Input id="location" value={userData.location} disabled={!isEditing} />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold dark:text-white">{t('learningProgress')}</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="dark:text-white">{t('courseCompletionRate')}</span>
                                <span className="dark:text-white">67%</span>
                            </div>
                            <Progress value={67} className="h-2" />
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="dark:text-white">{t('monthlyLearningGoal')}</span>
                                <span className="dark:text-white">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="text-center p-4 bg-gray-50 dark:bg-green-900 rounded-lg">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{t('hoursLearned')}</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 dark:bg-green-900 rounded-lg">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">23</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{t('certificates')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TabsContent>
    );
}
