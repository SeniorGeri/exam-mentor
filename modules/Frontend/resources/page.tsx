import { Hero } from "./components/hero"
import { FeaturedPrompts } from "./components/featured-prompts"
import { Footer } from "./layouts/footer"
import FrontendLayout from "./layouts/layout";

export default function Home() {
  return (
      <FrontendLayout>
          <main className="flex-1">
            <Hero />
            <FeaturedPrompts />
          </main>
          <Footer />
      </FrontendLayout>
  )
}
