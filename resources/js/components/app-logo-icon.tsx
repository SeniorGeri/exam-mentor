import {    HTMLAttributes } from 'react';
import { faviconSVG } from '@/assets/images';

export default function AppLogoIcon(props: HTMLAttributes<HTMLImageElement>) {
    return (
        <img {...props} src={faviconSVG} />
    );
}
