import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import { useTranslation } from 'react-i18next';
import {ViewContactProps} from "./data";

export function ViewContact({contact, isOpen, closeModal}: ViewContactProps) {

    const { t } = useTranslation('Notification');

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent className="sm:max-w-4xl">
            <DialogTitle>{t('view_contact_message')}</DialogTitle>
                <DialogDescription>
                    {t('view_contact_message_desc')}
                </DialogDescription>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-3">

                    {contact.message}
                   
                </div>

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                {t('close')}
                            </Button>
                        </DialogClose>
                    </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
