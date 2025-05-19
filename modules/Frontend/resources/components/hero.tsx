import { Button } from "@/components/ui/button"
import { Link } from '@inertiajs/react';
import {faviconSVG} from '@/assets/images'
import { useTranslation } from 'react-i18next';

export function Hero() {
      const { t } = useTranslation('Frontend');
  
  return (
    <div className="relative">
      <div className="absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center items-center flex flex-col gap-4">

        <img src={faviconSVG} alt="" width={100} height={100} className="mb-4"/>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {t('exam_mentor')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {t('exam_mentor_description')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={route('frontend.browse')}>
              <Button size="lg" className="rounded-full">
                {t('learn')}
              </Button>
            </Link>
            <Link href="/sell">
              <Button size="lg" variant="outline" className="rounded-full">
                {t('teach')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
