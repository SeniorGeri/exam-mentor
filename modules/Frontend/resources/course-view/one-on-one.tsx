import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, BookOpen, Award, Users, CheckCircle } from "lucide-react"
import { useTranslation } from 'react-i18next';
import { useLocale } from "@/contexts/locale";
import { CourseInstructor } from "../data";

export default function OneOnOne({ course }: { course: CourseInstructor }) {
    const { t } = useTranslation('Frontend');
    const { currentLocale } = useLocale();
    console.log(course)
    return (
            <div className="container mx-auto py-8 px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                        {/* Course Image */}
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                            <img
                                src={course.course.image}
                                alt="Course thumbnail"
                                className="object-cover"
                            />
                        </div>

                        {/* Course Title and Instructor */}
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{course.course.title[currentLocale]}</h1>
                            <div className="flex items-center gap-3 mb-4">
                                <Avatar>
                                    <AvatarImage src={course.instructor.image} alt="Instructor" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">{course.instructor.name}</p>
                                    <p className="text-sm text-muted-foreground">Senior Web Developer</p>
                                </div>
                            </div>
                        </div>

                        {/* Course Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            <Badge variant="secondary">Web Development</Badge>
                            <Badge variant="secondary">React</Badge>
                            <Badge variant="secondary">Next.js</Badge>
                            <Badge variant="secondary">Frontend</Badge>
                            <Badge variant="secondary">JavaScript</Badge>
                        </div>

                        {/* Course Description */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">{t('about_course')}</h2>
                            <p>
                                {course.description}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-muted-foreground" />
                                    <span>42 hours</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                                    <span>72 lessons</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="h-5 w-5 text-muted-foreground" />
                                    <span>Certificate</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-muted-foreground" />
                                    <span>5,234 students</span>
                                </div>
                            </div>
                        </div>

                        {/* Course Modules */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">{t('course_curriculum')}</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="module-1">
                                    <AccordionTrigger>
                                        <div className="flex justify-between w-full pr-4">
                                            <span>Module 1: Introduction to React</span>
                                            <span className="text-sm text-muted-foreground">5 lessons • 3.5 hours</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 pl-6">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>React Fundamentals</span>
                                                <span className="ml-auto text-sm text-muted-foreground">45 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Components and Props</span>
                                                <span className="ml-auto text-sm text-muted-foreground">50 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>State and Lifecycle</span>
                                                <span className="ml-auto text-sm text-muted-foreground">55 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Handling Events</span>
                                                <span className="ml-auto text-sm text-muted-foreground">40 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Conditional Rendering</span>
                                                <span className="ml-auto text-sm text-muted-foreground">30 min</span>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="module-2">
                                    <AccordionTrigger>
                                        <div className="flex justify-between w-full pr-4">
                                            <span>Module 2: Next.js Essentials</span>
                                            <span className="text-sm text-muted-foreground">6 lessons • 4 hours</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 pl-6">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Introduction to Next.js</span>
                                                <span className="ml-auto text-sm text-muted-foreground">40 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Routing in Next.js</span>
                                                <span className="ml-auto text-sm text-muted-foreground">45 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Data Fetching Strategies</span>
                                                <span className="ml-auto text-sm text-muted-foreground">50 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>API Routes</span>
                                                <span className="ml-auto text-sm text-muted-foreground">45 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Static Site Generation</span>
                                                <span className="ml-auto text-sm text-muted-foreground">40 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Server-side Rendering</span>
                                                <span className="ml-auto text-sm text-muted-foreground">40 min</span>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="module-3">
                                    <AccordionTrigger>
                                        <div className="flex justify-between w-full pr-4">
                                            <span>Module 3: Advanced React Patterns</span>
                                            <span className="text-sm text-muted-foreground">7 lessons • 5 hours</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 pl-6">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Context API</span>
                                                <span className="ml-auto text-sm text-muted-foreground">45 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Hooks in Depth</span>
                                                <span className="ml-auto text-sm text-muted-foreground">50 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Custom Hooks</span>
                                                <span className="ml-auto text-sm text-muted-foreground">45 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Render Props</span>
                                                <span className="ml-auto text-sm text-muted-foreground">40 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Higher-Order Components</span>
                                                <span className="ml-auto text-sm text-muted-foreground">45 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Performance Optimization</span>
                                                <span className="ml-auto text-sm text-muted-foreground">50 min</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>Testing React Components</span>
                                                <span className="ml-auto text-sm text-muted-foreground">45 min</span>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    {/* Purchase Card */}
                    <div className="md:col-span-1">
                        <div className="sticky top-8 border rounded-xl p-6 shadow-sm space-y-6">
                            <div className="text-3xl font-bold">$129.99</div>
                            <div className="space-y-2">
                                <Button className="w-full text-lg py-6">{t('register_now')}</Button>
                                <Button variant="outline" className="w-full">
                                    {t('whatsapp_us')}
                                </Button>
                            </div>
                            <div className="space-y-4 pt-4 border-t">
                                <h3 className="font-semibold">{t('this_course_includes')}:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>42 hours on-demand video</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>72 downloadable resources</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>Full lifetime access</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>Access on mobile and TV</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>Certificate of completion</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            )


}
