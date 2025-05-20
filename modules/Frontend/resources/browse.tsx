import FrontendLayout from "./layouts/layout";
import { useTranslation } from 'react-i18next';
import {faviconSVG} from '@/assets/images'
import CourseCard from "./components/course-card";
import { CoursePaginate } from './data';

export default function Browse({coursePaginate}: {coursePaginate: CoursePaginate}) {
    console.log(coursePaginate)
    const courses = coursePaginate.data
    // const courses = [
    //     {
    //       imageUrl: "/images/favicon.svg?height=600&width=400",
    //       title: "The Art of Modern Photography",
    //       instructor: "Alexandra Reynolds",
    //       price: 129.99,
    //       tags: ["Photography", "Composition", "Editing"],
    //       modules: 8,
    //     },
    //     {
    //       imageUrl: "/images/favicon.svg?height=600&width=400",
    //       title: "Business Strategy Masterclass",
    //       instructor: "Jonathan Blackwell",
    //       price: 199.99,
    //       tags: ["Business", "Strategy", "Leadership"],
    //       modules: 12,
    //     },
    //     {
    //       imageUrl: "/images/favicon.svg?height=600&width=400",
    //       title: "Culinary Arts: French Cuisine",
    //       instructor: "Chef Marie Laurent",
    //       price: 149.99,
    //       tags: ["Cooking", "French", "Gourmet"],
    //       modules: 10,
    //     },
    //     {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "The Art of Modern Photography",
    //         instructor: "Alexandra Reynolds",
    //         price: 129.99,
    //         tags: ["Photography", "Composition", "Editing"],
    //         modules: 8,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Business Strategy Masterclass",
    //         instructor: "Jonathan Blackwell",
    //         price: 199.99,
    //         tags: ["Business", "Strategy", "Leadership"],
    //         modules: 12,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Culinary Arts: French Cuisine",
    //         instructor: "Chef Marie Laurent",
    //         price: 149.99,
    //         tags: ["Cooking", "French", "Gourmet"],
    //         modules: 10,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "The Art of Modern Photography",
    //         instructor: "Alexandra Reynolds",
    //         price: 129.99,
    //         tags: ["Photography", "Composition", "Editing"],
    //         modules: 8,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Business Strategy Masterclass",
    //         instructor: "Jonathan Blackwell",
    //         price: 199.99,
    //         tags: ["Business", "Strategy", "Leadership"],
    //         modules: 12,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Culinary Arts: French Cuisine",
    //         instructor: "Chef Marie Laurent",
    //         price: 149.99,
    //         tags: ["Cooking", "French", "Gourmet"],
    //         modules: 10,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "The Art of Modern Photography",
    //         instructor: "Alexandra Reynolds",
    //         price: 129.99,
    //         tags: ["Photography", "Composition", "Editing"],
    //         modules: 8,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Business Strategy Masterclass",
    //         instructor: "Jonathan Blackwell",
    //         price: 199.99,
    //         tags: ["Business", "Strategy", "Leadership"],
    //         modules: 12,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Culinary Arts: French Cuisine",
    //         instructor: "Chef Marie Laurent",
    //         price: 149.99,
    //         tags: ["Cooking", "French", "Gourmet"],
    //         modules: 10,
    //       },    {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "The Art of Modern Photography",
    //         instructor: "Alexandra Reynolds",
    //         price: 129.99,
    //         tags: ["Photography", "Composition", "Editing"],
    //         modules: 8,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Business Strategy Masterclass",
    //         instructor: "Jonathan Blackwell",
    //         price: 199.99,
    //         tags: ["Business", "Strategy", "Leadership"],
    //         modules: 12,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Culinary Arts: French Cuisine",
    //         instructor: "Chef Marie Laurent",
    //         price: 149.99,
    //         tags: ["Cooking", "French", "Gourmet"],
    //         modules: 10,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "The Art of Modern Photography",
    //         instructor: "Alexandra Reynolds",
    //         price: 129.99,
    //         tags: ["Photography", "Composition", "Editing"],
    //         modules: 8,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Business Strategy Masterclass",
    //         instructor: "Jonathan Blackwell",
    //         price: 199.99,
    //         tags: ["Business", "Strategy", "Leadership"],
    //         modules: 12,
    //       },
    //       {
    //         imageUrl: "/images/favicon.svg?height=600&width=400",
    //         title: "Culinary Arts: French Cuisine",
    //         instructor: "Chef Marie Laurent",
    //         price: 149.99,
    //         tags: ["Cooking", "French", "Gourmet"],
    //         modules: 10,
    //       },
    //   ]

      
    const { t } = useTranslation('Frontend');
  return (
      <FrontendLayout>
        <section className="py-8 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-center gap-2">
                    <img src={faviconSVG} alt="" width={50} height={50}/> 
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-center">{t('browse')}</h2>
                <p className="text-lg leading-8 text-muted-foreground text-center mb-5">
                  {t('browse_description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </div>
        </section>
      </FrontendLayout>
  )
}
