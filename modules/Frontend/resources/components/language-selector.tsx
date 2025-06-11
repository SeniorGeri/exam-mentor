"use client"

import { useEffect, useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { InertiaLangPageProps, LanguageData } from "@/types/helpers"
import { usePage } from "@inertiajs/react"
import i18n from '@/i18n';
import { useLocale } from '@/contexts/locale';


export function LanguageSelector() {

    const { setLocale } = useLocale();
    const { languages } = usePage<InertiaLangPageProps>().props;
    const currentLanguage = languages.data.find((language) => language.language_code === (localStorage.getItem('language') ?? languages.main)); 
    const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage.language_code);
      }, [selectedLanguage.language_code]);

    const handleSelectLanguage = (language: LanguageData) => {
        setSelectedLanguage(language)
        setIsOpen(false)
        localStorage.setItem('language', language.language_code)
        setLocale(language.language_code)
    }

    return (
        <div className="relative">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                        aria-label="Select language"
                    >
                        <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                            <img
                                src={selectedLanguage.flag || "/placeholder.svg"}
                                alt={`${selectedLanguage.language_code} flag`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-medium text-sm hidden sm:inline">{selectedLanguage.language[selectedLanguage.language_code]}</span>
                        <ChevronDown
                            className={cn("h-4 w-4 text-gray-500 transition-transform duration-200", isOpen ? "rotate-180" : "")}
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[180px] p-2 rounded-xl border border-gray-200 shadow-lg">
                    <AnimatePresence>
                        {languages.data.map((language) => (
                            <motion.div
                                key={language.language_code}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.15 }}
                            >
                                <DropdownMenuItem
                                    className={cn(
                                        "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer",
                                        selectedLanguage.language_code === language.language_code ? "bg-gray-100 text-gray-700" : "hover:bg-gray-50",
                                    )}
                                    onClick={() => handleSelectLanguage(language)}
                                >
                                    <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={language.flag || "/placeholder.svg"}
                                            alt={`${language.language_code} flag`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="font-medium text-sm flex-1">{language.language[language.language_code]}</span>
                                    {selectedLanguage.language_code === language.language_code && <Check className="h-4 w-4 text-green-500" />}
                                </DropdownMenuItem>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
