
import FrontendLayout from "./layouts/layout";
import { useTranslation } from 'react-i18next';
import {faviconSVG} from '@/assets/images'
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";

export default function Success() {
    
    const { t } = useTranslation('Frontend');
  return (
      <FrontendLayout>
        <section className="py-8 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-center gap-2">
                    <img src={faviconSVG} alt="" width={50} height={50}/> 
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-center">{t('success')}</h2>
                <p className="text-lg leading-8 text-muted-foreground text-center mb-5">
                  {t('success_description')}
                </p>
                <div className="flex items-center justify-center gap-2">
                <Link href={route('frontend.browse')} className="text-primary hover:underline">
                 <Button variant="outline" className="w-full">{t('browse')}</Button>
                </Link>
                </div>
                
            </div>
        </section>
      </FrontendLayout>
  )
}
