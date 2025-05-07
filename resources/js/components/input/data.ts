import { Ref } from 'react';

export type InputInterface = {
    className?: string,
    id : string,
    type? : 'text' | 'email' | 'number' | 'password',
    value?: string | number,
    ref?: Ref<HTMLInputElement>,
    placeholder?: string,
    errorMessage?: string,
    step?: number,
    setFormData?: (key: string, value: string | number ) => void
}

export type TextareaInterface = {
    className?: string,
    id : string,
    value?: string,
    ref?: Ref<HTMLTextAreaElement>,
    placeholder?: string,
    errorMessage?: string,
    setFormData?: (key: string, value: string | number) => void
}

export type SwitchInterface = {
    id : string,
    className?: string,
    is_checked? : boolean,
    value?: string,
    placeholder?: string,
    setFormData?: (key: string, value: boolean) => void
}


export type SelectInterface = {
    id : string,
    className?: string,
    is_checked? : boolean,
    value?: string | number,
    placeholder?: string,
    children?: React.ReactNode,
    errorMessage?: string,
    text?: string,
    setFormData?: (key: string, value: string | number) => void
}

export type CheckboxInterface = {
    id : string,
    className?: string,
    is_checked? : boolean,
    value?: string| object,
    placeholder?: string,
    setFormData?: (key: string, checked: boolean, value: string| object) => void
}

export type TextEditorInterface = {
    id: string;
    defaultValue?: string;
    setFormData?: (key: string, value: string | object) => void;
};

