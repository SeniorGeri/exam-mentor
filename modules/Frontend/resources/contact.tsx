import FrontendLayout from "./layouts/layout";
import { useTranslation } from 'react-i18next';
import { faviconSVG } from '@/assets/images'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function Contact() {

    const { t } = useTranslation('Frontend');
     const {data, setData, post} = useForm({
            name: '',
            email: '',
            subject: '',
            message: '',
            phone: ''
        });
    
        const storeContact: FormEventHandler<HTMLFormElement> = (e) => {
            e.preventDefault();
            post(route('frontend.contact.store'), {
                preserveScroll: true,
                onSuccess: () => contacted(),
                // onFinish: () => reset(),
            });
        };

        const contacted = () => {
            toast(t('contacted_succ'), {position: 'top-right', duration: 2000});
        };
        
    return (
        <FrontendLayout>
            <section className="py-8 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 flex items-center">
                        <div className="mx-auto max-w-7xl">
                            <div className="flex items-center justify-center gap-2">
                                <img src={faviconSVG} alt="" width={50} height={50} />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-center">{t('contact')}</h2>
                            <p className="text-lg leading-8 text-muted-foreground text-center mb-5">
                                {t('contact_description')}
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-2 col-span-1">
                        <Card className="p-6 shadow-sm mb-8">
                            <form className="space-y-4" onSubmit={storeContact}>
                                <div className="space-y-2">
                                    <Label htmlFor="name">{t('name')}</Label>
                                    <Input id="name" placeholder={t('your_name')} value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">{t('email')}</Label>
                                    <Input id="email" type="email" placeholder={t('your_email')} value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">{t('subject')}</Label>
                                    <Input id="subject" placeholder={t('what_is_this_regarding')} value={data.subject} onChange={(e) => setData('subject', e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">{t('phone')}</Label>
                                    <Input id="phone" placeholder={t('your_phone')} value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">{t('message')}</Label>
                                    <Textarea id="message" placeholder={t('your_message')} className="min-h-[120px]" value={data.message} onChange={(e) => setData('message', e.target.value)} />
                                </div>

                                <Button className="w-full" type="submit">
                                    {t('send_message')}
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                        <div className="mx-auto bg-muted p-3 rounded-full w-fit mb-3">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <h3 className="font-medium mb-1">{t('address')}</h3>
                        <p className="text-muted-foreground text-sm">
                            {t('company_address')}
                    
                        </p>
                    </div>

                    <div className="text-center p-4">
                        <div className="mx-auto bg-muted p-3 rounded-full w-fit mb-3">
                            <Mail className="h-5 w-5" />
                        </div>
                        <h3 className="font-medium mb-1">{t('email')}</h3>
                        <p className="text-muted-foreground text-sm">
                            {t('company_email')}
                        </p>
                    </div>

                    <div className="text-center p-4">
                        <div className="mx-auto bg-muted p-3 rounded-full w-fit mb-3">
                            <Phone className="h-5 w-5" />
                        </div>
                        <h3 className="font-medium mb-1">{t('phone')}</h3>
                        <p className="text-muted-foreground text-sm">
                            {t('company_phone')}
                        </p>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    )
}
