import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler} from 'react';
import {toast} from 'sonner';
import {EditExpenseProps} from "./data";
import {route} from "ziggy-js";
import { useTranslation } from 'react-i18next';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';

export function EditExpense({expense, isOpen, closeModal}: EditExpenseProps) {

    const { t } = useTranslation('Finance');


    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: expense?.id,
        value: expense?.value,
        description: expense?.description,
    });

    const updateExpense: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('expense.update', expense.id), {
            preserveScroll: true,
            onSuccess: () => updatedExpense(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedExpense = () => {
        toast(t('expense_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_expense')}</DialogTitle>
                <DialogDescription>
                    {t('edit_expense_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateExpense}>

                     <CustomInput
                        id="value"
                        type="number"
                        value={data.value}
                        setFormData={setData}
                        placeholder={t('value')}
                        errorMessage={errors.value}
                    />


                    <CustomTextarea
                        id="description"
                        value={data.description}
                        setFormData={setData}
                        placeholder={t('description')}
                        errorMessage={errors.description}
                    />

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                {t('close')}
                            </Button>
                        </DialogClose>

                        <Button variant="default" disabled={processing} asChild>
                            <button type="submit">{t('edit_expense')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
