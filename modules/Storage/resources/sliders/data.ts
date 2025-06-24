import type {BreadcrumbItem} from '@/types';
import {Row} from '@tanstack/react-table';
import {route} from "ziggy-js";
import { TranslatableField } from '@/types/helpers';

export const sliderBreadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Slider',
        href: route('slider.list'),
    },
];

export type Slider = {
    id: number;
    title: TranslatableField;
    subtitle: TranslatableField;
    button_text: TranslatableField;
    button_url: string;
    active: boolean;
    description: string;
    image: string;
};

export type SliderActionsProps = {
    slider: Row<Slider>;
};

export type DeleteSliderProps = {
    slider: Slider;
    isOpen: boolean;
    closeModal: () => void;
};

export type EditSliderProps = {
    slider: Slider;
    isOpen: boolean;
    closeModal: () => void;
};
