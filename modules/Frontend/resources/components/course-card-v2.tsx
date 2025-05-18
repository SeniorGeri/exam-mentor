import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"

const course = {
    id: 3,
    title: "Code Refactoring Assistant",
    description: "Improve your code quality with smart refactoring suggestions.",
    price: "0.15 ETH",
    category: "Programming",
    rating: 4.7,
};


export function CourseCardV2() {
  return (

    <Card key={course.id} className="group relative overflow-hidden transition-all hover:shadow-lg">
        <CardHeader>
        <div className="flex justify-between items-start">
            <div>
            <CardTitle>{course.title}</CardTitle>
            <CardDescription className="mt-2">{course.description}</CardDescription>
            </div>
            <Badge variant="secondary">{course.category}</Badge>
        </div>
        </CardHeader>
        <CardContent>
        <div className="flex items-center gap-1 text-yellow-500">
            <StarIcon className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{course.rating}</span>
        </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold">{course.price}</span>
        <Button>Buy Now</Button>
        </CardFooter>
    </Card>
  )
}
