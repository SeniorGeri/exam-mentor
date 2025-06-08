import {cn} from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { InputInterface } from './data';

export default function CustomInput({
    id,
    type = 'text',
    className = '',
    value = null,
    errorMessage = null,
    placeholder = null,
    ref = null,
    step = null,
    disabled = false,
    setFormData
}: InputInterface) {

  return (
      <div className={cn('grid gap-2', className)}>
          <Label htmlFor={id}>{placeholder}</Label>

          <Input
              id={id}
              type={type}
              name={id}
              ref={ref}
              value={value}
              step={step}
              onChange={(e) => setFormData(id, e.target.value)}
              placeholder={placeholder}
              autoComplete={id}
              disabled={disabled}
          />

          <InputError message={errorMessage}/>
      </div>
  );
}