import {cn} from '@/lib/utils';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Textarea } from '@/components/ui/textarea';
import { TextareaInterface } from './data';


export default function CustomTextarea({
    id,
    className = '',
    value = null,
    errorMessage = null,
    placeholder = null,
    ref = null,
    setFormData
}: TextareaInterface) {
    return (
        <div className={cn('grid gap-2', className)}>
            <Label htmlFor={id}>{placeholder}</Label>
                <Textarea
                    id={id}
                    name={id}
                    ref={ref}
                    value={value}
                    onChange={(e) => setFormData(id, e.target.value)}
                    placeholder={placeholder}
                    autoComplete={id}
                />

            <InputError message={errorMessage}/>
        </div>
    );
}