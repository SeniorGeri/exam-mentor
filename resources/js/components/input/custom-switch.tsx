import {cn} from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { SwitchInterface } from './data';

export default function CustomSwitch({
    id,
    className = '',
    is_checked = false,
    value = null,
    placeholder = null,
    setFormData
}: SwitchInterface) {
    return (
        <div className={cn('grid gap-2 flex flex-row items-center', className)}>
            <Label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{placeholder}</Label>
            <Switch
                id={id}
                name={id}
                value={value}
                checked={is_checked}
                onCheckedChange={(checked: boolean) => setFormData(id, checked)}
            />
        </div>
    );
}