import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { User } from "lucide-react"
import { CoursePrice } from "../data"



export default function CourseCard({
  price = 89.99,
  instructor,
  longevity,
  course,
  language,
}: CoursePrice) {
  return (
    <Card className="relative overflow-hidden rounded-xl h-[380px] w-full max-w-sm border-0 shadow-lg transition-all duration-300 hover:shadow-xl group cursor-pointer">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title['en']}
          className="object-cover transition-transform duration-700 group-hover:scale-110  h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
        <div className="absolute top-5 right-5">
          <Badge className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 rounded-full px-3 py-1">
            ${price.toFixed(2)}
          </Badge>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-serif font-semibold text-2xl leading-tight tracking-tight">{course.title['en']}</h3>
            <div className="flex items-center gap-2 text-white/80">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">{instructor.name}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/20">
            <div className="flex flex-wrap gap-2">
            <Badge
                  key={language.language['en']}
                  variant="outline"
                  className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                >
                  {language.language['en']}
                </Badge>
              {/* {language.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="font-normal text-xs rounded-full px-2.5 py-0.5 border-white/30 text-white/90 bg-transparent"
                >
                  {tag}
                </Badge>
              ))} */}
            </div>
            <div className="text-xs text-white/60 mt-3">{longevity}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}
