import {cn} from '@/lib/utils';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { SelectInterface } from './data';
import { Select, SelectContent, SelectGroup,  SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

export default function CustomSelect({
    children,
    id,
    className = '',
    value = null,
    errorMessage = null,
    placeholder = null,
    setFormData,
    text = null
}: SelectInterface) {

  return (
      <div className={cn('grid gap-2', className)}>
        <Label htmlFor="id">{placeholder}</Label>
        <Select
            name="id"
            value={value.toString()}
            onValueChange={(value) => setFormData(id, value)}
        >
            <SelectTrigger className="w-full" >
                <SelectValue placeholder={placeholder}>
                    {text}
            </SelectValue>

            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                <SelectLabel>{placeholder}</SelectLabel>
                {children}
                </SelectGroup>
            </SelectContent>
        </Select>
        <InputError message={errorMessage}/>

      </div>
  );
}

