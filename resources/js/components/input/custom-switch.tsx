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
        <div className={cn('grid gap-2', className)}>
            <Switch
                id={id}
                name={id}
                value={value}
                checked={is_checked}
                onCheckedChange={(checked: boolean) => setFormData(id, checked)}
            />
            <Label htmlFor={id}>{placeholder}</Label>
        </div>
    );
}