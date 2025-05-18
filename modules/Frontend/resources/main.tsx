import { Hero } from "./components/hero"
import { FeaturedCourses } from "./components/featured-courses"
import FrontendLayout from "./layouts/layout";

export default function Home() {
  return (
      <FrontendLayout>
          <main className="flex-1">
            <Hero />
            <FeaturedCourses />
          </main>
      </FrontendLayout>
  )
}
