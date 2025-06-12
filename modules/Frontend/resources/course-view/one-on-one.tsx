import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, BookOpen, Award, Users, CheckCircle } from "lucide-react"
import { useTranslation } from 'react-i18next';
import { useLocale } from "@/contexts/locale";
import { CourseInstructor } from "../data";
import { Curriculum } from "@/modules/Operational/resources/course-instructors/data"
import { OrderModal } from "../components/order-modal"

export default function OneOnOne({ course }: { course: CourseInstructor }) {
    const { t } = useTranslation('Frontend');
    const { currentLocale } = useLocale();
    const formattedPrice = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "EUR",
      }).format(course.price)
      
      return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    {/* Course Image */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                        <img
                            src={course.image ?? course.course.image}
                            alt="Course thumbnail"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Course Title and Instructor */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{course.course.title[currentLocale]}</h1>
                        <div className="flex items-center gap-3 mb-4">
                            <Avatar>
                                <AvatarImage src={course.instructor?.profile_pic} alt="Instructor" />
                                <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">{course.instructor.name}</p>
                                <p className="text-sm text-muted-foreground">{course.instructor.specialization}</p>
                            </div>
                        </div>
                    </div>

                    {/* Course Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <Badge key={course.language.language[currentLocale]}
                            variant="outline"
                            className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                        >
                            {course.language.language[currentLocale]}
                        </Badge>
                        {course.course.subjects.map((subject) => (
                            <Badge
                                key={subject.id}
                                variant="secondary"
                                className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                            >
                                {subject.title[currentLocale]}
                            </Badge>
                        ))}
                        {course.course.grades.map((grade) => (
                            <Badge
                                key={grade.id}
                                variant="secondary"
                                className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                            >
                                {grade.title[currentLocale]}
                            </Badge>
                        ))}
                        {course.course.schools.map((school) => (
                            <Badge
                                key={school.id}
                                variant="secondary"
                                className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                            >
                                {school.title[currentLocale]}
                            </Badge>
                        ))}

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
                                <span>{course.longevity}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-muted-foreground" />
                                <span>{course.lessons} {t('lessons')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-muted-foreground" />
                                <span>{t('certificate')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-muted-foreground" />
                                <span>+{course.course_active_count} {t('students')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Course Modules */}
                    {course.curricula.length > 0 && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">{t('course_curriculum')}</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {course.curricula.map((curriculum: Curriculum) => (
                                    <AccordionItem value={`curriculum-${curriculum.id}`}>
                                        <AccordionTrigger>
                                            <div className="flex justify-between w-full pr-4">
                                                <span>{curriculum.title[currentLocale]}</span>
                                                {/* <span className="text-sm text-muted-foreground">5 lessons • 3.5 hours</span> */}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div dangerouslySetInnerHTML={{ __html: curriculum.description[currentLocale] }} />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    )}
                </div>

                {/* Purchase Card */}
                <div className="md:col-span-1">
                    <div className="sticky top-8 border rounded-xl p-6 shadow-sm space-y-6">
                        <div className="text-3xl font-bold">{formattedPrice}</div>
                        <div className="space-y-2">
                            <OrderModal courseInstructor={course} />
                            {/* <Button className="w-full text-lg py-6">{t('register_now')}</Button> */}
                            <Button variant="outline" className="w-full">
                                {t('whatsapp_us')}
                            </Button>
                        </div>
                        <div className="space-y-4 pt-4 border-t">
                            {
                                course.includes.length > 0 && (
                                    <>
                                        <h3 className="font-semibold">{t('this_course_includes')}:</h3>
                                        <ul className="space-y-2">
                                            {
                                                course.includes.map((include) => (
                                                    <li key={include.id} className="flex items-center gap-2">
                                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                                        <span>{include.title[currentLocale]}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
