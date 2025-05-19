
import FrontendLayout from "./layouts/layout";
import { useTranslation } from 'react-i18next';
import {faviconSVG} from '@/assets/images'

export default function About() {
    
    const { t } = useTranslation('Frontend');
  return (
      <FrontendLayout>
        <section className="py-8 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-center gap-2">
                    <img src={faviconSVG} alt="" width={50} height={50}/> 
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-center">{t('about')}</h2>
                <p className="text-lg leading-8 text-muted-foreground text-center mb-5">
                  {t('about_description')}
                </p>

                <div className="max-w-5xl mx-auto py-16 px-4">
                    <h1 className="text-4xl font-bold mb-6 text-primary">{t('about_header')}</h1>
                    <p className="text-lg mb-4">
                        {t('about_p1')}
                    </p>
                    <p className="text-lg mb-4">
                        {t('about_p2')}
                    </p>
                    <p className="text-lg mb-4">
                        {t('about_p3')}
                    </p>
                    <p className="text-lg">
                        {t('about_p4')}
                    </p>
                </div>
            </div>
        </section>
      </FrontendLayout>
  )
}
