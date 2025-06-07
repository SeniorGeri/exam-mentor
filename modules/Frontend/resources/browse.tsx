import FrontendLayout from "./layouts/layout";
import { useTranslation } from 'react-i18next';
import {faviconSVG} from '@/assets/images'
import CourseCard from "./components/course-card";
import { CoursePaginate } from './data';

export default function Browse({coursePaginate}: {coursePaginate: CoursePaginate}) {
    console.log(coursePaginate)
    const courses = coursePaginate.data
      
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
