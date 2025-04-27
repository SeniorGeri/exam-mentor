import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CheckboxInterface } from './data';

export default function CustomCheckbox({
    id,
    className = '',
    value = null,
    placeholder = null,
    is_checked = false,
    setFormData
}: CheckboxInterface) {
  const checkboxUniqueId =id + Math.random().toString(36).substring(2,7)
  return (
   <div  className={cn('items-top flex space-x-2', className)}>
        <Checkbox id={checkboxUniqueId} onCheckedChange={(checked: boolean) => setFormData(id, checked, value)} checked={is_checked}/>
        <div className="grid gap-1.5 leading-none">
            <label htmlFor={checkboxUniqueId} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {placeholder}
            
            </label>
        </div>
    </div>
  );
}


