import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react" 
import { Facebook, Instagram, Youtube } from "lucide-react"
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation('Frontend');
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-10 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('about')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={route('frontend.about')} className="text-sm text-muted-foreground hover:text-foreground">
                  {t('about_us')}
                </Link>
              </li>
              <li>
                <Link href={route('frontend.team')} className="text-sm text-muted-foreground hover:text-foreground">
                  {t('team')}
                </Link>
              </li>
              <li>
                <Link href={route('frontend.contact')} className="text-sm text-muted-foreground hover:text-foreground">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href={route('frontend.privacy')} className="text-sm text-muted-foreground hover:text-foreground">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href={route('frontend.terms')} className="text-sm text-muted-foreground hover:text-foreground">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/OnlyStudy" target="_blank">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/OnlyStudy" target="_blank">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.youtube.com/OnlyStudy" target="_blank">
                <Button variant="ghost" size="icon">
                  <Youtube className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OnlyStudy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
