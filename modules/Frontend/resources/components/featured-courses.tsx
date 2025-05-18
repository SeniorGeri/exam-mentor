import CourseCard from "./course-card"

const courses = [
  {
    imageUrl: "/images/favicon.svg?height=600&width=400",
    title: "The Art of Modern Photography",
    instructor: "Alexandra Reynolds",
    price: 129.99,
    tags: ["Photography", "Composition", "Editing"],
    modules: 8,
  },
  {
    imageUrl: "/images/favicon.svg?height=600&width=400",
    title: "Business Strategy Masterclass",
    instructor: "Jonathan Blackwell",
    price: 199.99,
    tags: ["Business", "Strategy", "Leadership"],
    modules: 12,
  },
  {
    imageUrl: "/images/favicon.svg?height=600&width=400",
    title: "Culinary Arts: French Cuisine",
    instructor: "Chef Marie Laurent",
    price: 149.99,
    tags: ["Cooking", "French", "Gourmet"],
    modules: 10,
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-16 px-6">
		<div className="mx-auto max-w-7xl">
			<h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Courses</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{courses.map((course, index) => (
				<CourseCard key={index} {...course} />
				))}
			</div>
		</div>
    </section>
  )
}
