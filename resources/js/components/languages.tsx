import { usePage } from '@inertiajs/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Languages = {
    data : LanguageData[]
    main: string
}

type LanguageData = {
    language_code : string
    flag : string
}

type InertiaPageProps = {
    languages: Languages;
};

export function Languages({currentLocale, setData}){
    const { languages } = usePage<InertiaPageProps>().props;

    return (
        <div className='flex justify-end gap-2 w-full'>
            {languages?.data.map((lang: LanguageData, index: number) => (
                    <label
                    key={lang.language_code}
                    className={`cursor-pointer max-w-16 max-h-16  border rounded-2xl p-1 flex flex-col items-center justify-center transition-all duration-200 ${
                      currentLocale === lang.language_code
                        ? "border-primary ring-2 ring-primary"
                        : "border-muted"
                    }`}
                  >
                    <input
                      type="radio"
                      name="destination"
                      value={lang.language_code}
                      checked={currentLocale === lang.language_code}
                      onChange={() => setData('locale',lang.language_code)}
                      className="sr-only"
                    />
                    <Avatar className='w-8 h-6'  key={index} >
                        <AvatarImage src={lang.flag} />
                        <AvatarFallback>{lang.language_code}</AvatarFallback>
                    </Avatar>
                </label>


            ))}
        </div>
    )
};
