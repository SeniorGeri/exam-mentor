import { Hero } from "./components/hero"
import { FeaturedCourses } from "./components/featured-courses"
import FrontendLayout from "./layouts/layout";
import { CoursePrice } from "./data";

export default function Home({courses}: {courses: CoursePrice[]}) {
  return (
      <FrontendLayout>
          <main className="flex-1">
            <Hero />
            <FeaturedCourses courses={courses} />
          </main>
      </FrontendLayout>
  )
}
