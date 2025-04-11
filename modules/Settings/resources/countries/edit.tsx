import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, RefObject, useRef} from 'react';
import {toast} from 'sonner';
import {EditCountryProps} from "./data";
import {route} from "../../../../vendor/tightenco/ziggy/src/js";

export function EditCountry({country, isOpen, closeModal}: EditCountryProps) {
    const countryInput: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: country?.id,
        country: country?.country,
        description: country.description,
    });

    const updateCountry: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('country.update', country.id), {
            preserveScroll: true,
            onSuccess: () => updatedCountry(),
            // onFinish: () => reset(),
        });
    };

    const updatedCountry = () => {
        toast('Shteti u peditesua me sukses', {position: 'top-right', duration: 2000});

        clearErrors();
        reset();
        closeModal();
    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>Editimi shtetit</DialogTitle>
                <DialogDescription>
                    Forma e meposhtme mundeson perditesimin e shtetit
                </DialogDescription>
                <form className="space-y-6" onSubmit={updateCountry}>
                    <div className="grid gap-2">
                        <Label htmlFor="country">Shteti</Label>

                        <Input
                            id="country"
                            type="text"
                            name="country"
                            ref={countryInput}
                            value={data.country}
                            onChange={(e) => setData('country', e.target.value)}
                            placeholder="Shteti"
                            autoComplete="country"
                        />

                        <InputError message={errors.country}/>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Shenime</Label>

                        <Textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Shenime"
                            autoComplete="description"
                        />

                        <InputError message={errors.description}/>
                    </div>

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                Mbyll
                            </Button>
                        </DialogClose>

                        <Button variant="default" disabled={processing} asChild>
                            <button type="submit">Perditeso shtetin</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
