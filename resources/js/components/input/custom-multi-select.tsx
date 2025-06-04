'use client';

import { X } from 'lucide-react';

import { MultiSelectProps, Option } from '@/components/input/data';
import { Badge } from '@/components/ui/badge';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function CustomMultiSelect<T>({ id, options, selected, onChange, placeholder = 'Select options', className, badgeClassName }: MultiSelectProps<T>) {
    const [open, setOpen] = useState(false);

    const handleUnselect = (value: T) => {
        onChange(selected.filter((item: T) => item !== value));
    };

    const handleSelect = (value: T) => {
        if (selected.includes(value)) {
            onChange(selected.filter((item: T) => item !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    return (
        <label htmlFor={id} className="text-sm font-medium">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <div
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            ' border-input bg-background ring-offset-background focus-within:ring-ring flex min-h-10 w-full flex-wrap items-center justify-between rounded-md border px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2',
                            className,
                        )}
                        onClick={() => setOpen(!open)}  
                    >
                        <div className="flex flex-wrap gap-1">
                            {selected.length === 0 && <span className="text-muted-foreground">{placeholder}</span>}
                            {selected.map((value) => {
                                const option = options.find((opt) => opt.value === value);
                                return (
                                    <Badge key={value.toString()} variant="secondary" className={cn('mr-1 mb-1', badgeClassName)}>
                                        {option?.label}
                                        <button
                                            className="ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleUnselect(value);
                                                }
                                            }}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                            }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleUnselect(value);
                                            }}
                                        >
                                            <X className="h-3 w-3" />
                                            <span className="sr-only">Remove {option?.label}</span>
                                        </button>
                                    </Badge>
                                );
                            })}
                        </div>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 z-9999" align="start" asChild>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Command className="z-9999">
                            <CommandInput placeholder="Search options..." />
                            <CommandList>
                                <CommandEmpty>No options found.</CommandEmpty>
                                <CommandGroup className="max-h-64 overflow-auto">
                                    {options.map((option: Option<T>) => {
                                        const isSelected = selected.includes(option.value);
                                        return (
                                            <CommandItem
                                                key={option.value.toString()}
                                                value={option.value.toString()}
                                                onSelect={() => handleSelect(option.value)}
                                                className={isSelected ? 'bg-muted' : ''}
                                            >
                                                <span>{option.label}</span>
                                            </CommandItem>
                                        );
                                    })}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </div>
                </PopoverContent>
            </Popover>
        </label>
    );
}