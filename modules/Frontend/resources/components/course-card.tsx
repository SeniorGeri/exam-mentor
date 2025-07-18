import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { User } from "lucide-react"
import { CourseInstructor } from "../data"
import { Link } from "@inertiajs/react"
import { useLocale } from '@/contexts/locale';


export default function CourseCard({
  id,
  price,
  instructor,
  longevity,
  image,
  course,
  language,
}: CourseInstructor) {
   
  const { currentLocale } = useLocale();

  const formattedPrice = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "EUR",
  }).format(price)

  return (
    <Link href={route('frontend.course', id)}>

      <Card className="relative overflow-hidden rounded-xl h-[380px] w-full max-w-sm border-0 shadow-lg transition-all duration-300 hover:shadow-xl group cursor-pointer">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={(image ?? course.image )|| "/placeholder.svg"}
            alt={course.title[currentLocale]}
            className="object-cover transition-transform duration-700 group-hover:scale-110  h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
          <div className="absolute top-5 right-5">
            <Badge className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 rounded-full px-3 py-1">
              {formattedPrice}
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-serif font-semibold text-2xl leading-tight tracking-tight">{course.title[currentLocale]}</h3>
              {/* <div className="flex items-center gap-2 text-white/80">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">{instructor.name}</span>
              </div> */}
            </div>

            <div className="pt-3 border-t border-white/20">
              <div className="flex flex-wrap gap-2">
                <Badge
                    key={language.language[currentLocale]}
                    variant="outline"
                    className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                  >
                    {language.language[currentLocale]}
                  </Badge>
                {course.grades.slice(0, 3).map((grade) => (
                  <Badge
                    key={grade.id}
                    variant="outline"
                    className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                  >
                    {grade.title[currentLocale]}
                  </Badge>
                ))}
                 {course.subjects.slice(0, 3).map((subject) => (
                  <Badge
                    key={subject.id}
                    variant="outline"
                    className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                  >
                    {subject.title[currentLocale]}
                  </Badge>
                ))}
              </div>
              <div className="text-xs text-white/60 mt-3">{longevity}</div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
