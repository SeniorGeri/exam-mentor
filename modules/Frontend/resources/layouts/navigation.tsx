"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import { Link } from '@inertiajs/react';
import {faviconSVG} from '@/assets/images'
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "../components/language-selector"

export function Navigation() {
    const { t } = useTranslation('Frontend');
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={route('frontend.index')} className="mr-6 flex items-center space-x-2">
          <img src={faviconSVG} alt="" width={20} height={20}/>
            <span className="hidden font-bold sm:inline-block">Exam Mentor</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href={route('frontend.browse')} className="transition-colors hover:text-foreground/80 text-foreground">
              {t('browse')}
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="grid gap-6 px-2 py-6">
              <Link href={route('frontend.browse')} className="hover:text-foreground/80">
                {t('browse')}
              </Link>
              <Link href={route('frontend.about')} className="hover:text-foreground/80">
                {t('about')}
              </Link>
              <Link href={route('frontend.team')} className="hover:text-foreground/80">
                {t('team')}
              </Link>
              <Link href={route('frontend.contact')} className="hover:text-foreground/80">
                {t('contact')}
              </Link>
              <Link href={route('frontend.privacy')} className="hover:text-foreground/80">
                {t('privacy')}
              </Link>
              <Link href={route('frontend.terms')} className="hover:text-foreground/80">
                {t('terms')}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder={t('search_course')} className="pl-8 md:w-[300px] lg:w-[400px]" />
            </div>
          </div>
          <Button variant="outline" className="ml-auto hidden md:flex">
              <Link href={route('login')} className="hover:text-foreground/80">
                {t('login')}
              </Link>
          </Button>

          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}
