
import FrontendLayout from "./layouts/layout";
import { useTranslation } from 'react-i18next';
import {faviconSVG} from '@/assets/images'

export default function Team() {
    
    const { t } = useTranslation('Frontend');
  return (
      <FrontendLayout>
        <section className="py-8 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-center gap-2">
                    <img src={faviconSVG} alt="" width={50} height={50}/> 
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-center">{t('team')}</h2>
                <p className="text-lg leading-8 text-muted-foreground text-center mb-5">
                  {t('team_description')}
                </p>
            </div>
        </section>
      </FrontendLayout>
  )
}
