import CourseCard from "./course-card"
import { CourseInstructor } from "../data"

export function FeaturedCourses({courses}: {courses: CourseInstructor[]}) {
  return (
    <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (<CourseCard key={index} {...course} />))}
            </div>
        </div>
    </section>
  )
}
