import { Hero } from "./components/hero"
import { FeaturedCourses } from "./components/featured-courses"
import FrontendLayout from "./layouts/layout";
import { CourseInstructor } from "./data";
import { Slider } from "@/modules/Storage/resources/sliders/data";

export default function Home({courses, sliders}: {courses: CourseInstructor[], sliders: Slider[]}) {
  return (
      <FrontendLayout>
          <main className="flex-1">
            <Hero sliders={sliders} />
            <FeaturedCourses courses={courses} />
          </main>
      </FrontendLayout>
  )
}
