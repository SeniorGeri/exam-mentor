
import FrontendLayout from "./layouts/layout";
import { useTranslation } from 'react-i18next';
import {faviconSVG} from '@/assets/images'

export default function Terms() {
    
    const { t } = useTranslation('Frontend');
  return (
        <FrontendLayout>
            <section className="py-8 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-center gap-2">
                        <img src={faviconSVG} alt="" width={50} height={50}/> 
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-center">{t('terms')}</h2>
                    <p className="text-lg leading-8 text-muted-foreground text-center mb-5">
                      {t('terms_description')}
                    </p>

                    <div className="max-w-5xl mx-auto py-16 px-4">
                        <h1 className="text-4xl font-bold mb-6 text-primary">{t('terms_header')}</h1>
                        
                        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms_h1')}</h2>
                        <p className="mb-4 text-lg">
                        {t('terms_p1')}
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms_h2')}</h2>
                        <p className="mb-4 text-lg">
                        {t('terms_p2')}
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms_h3')}</h2>
                        <p className="mb-4 text-lg">
                        {t('terms_p3')}
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms_h4')}</h2>
                        <p className="mb-4 text-lg">
                        {t('terms_p4')}
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms_h5')}</h2>
                        <p className="mb-4 text-lg">
                        {t('terms_p5')}
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms_h6')}</h2>
                        <p className="mb-4 text-lg">
                        {t('terms_p6')}
                        </p>
                    </div>
                </div>
            </section>
        </FrontendLayout>
  )
}
