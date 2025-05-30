import React from 'react';

export type DropzoneProps = {
    onUpload: (files: File[]) => void;
};

export type ContainerProps = {
    file: Image;
    handleSelectFile: (file: Image) => void;
    setOpen: (open: boolean) => void;
    selectedFiles: Image[];
};

export type InfoProps = {
    setUploadedFiles: React.Dispatch<React.SetStateAction<Image[]>>;
    setCurrentFile: React.Dispatch<React.SetStateAction<Image | null>>;
    file: Image;
    uploadedFiles: Image[];
};

export type ImageRequest = {
    pageIndex: number;
    filter: string;
};

export type Image = {
    id: number;
    text: string;
    original: string;
    thumb: string;
};

export type FilePreviewProps = {
    selectedFiles: Image[];
    handleSelectFile: (file: Image) => void;
};

export type InputProp = {
    multiple?: boolean;
    inputName?: string;
    defaultValue?: string[];
    setFormData?: (key: string, value: string | string[]) => void;
};

export type GalleryProps = {
    multiple: boolean;
    selectedFiles: Image[];
    uploadedFiles: Image[];
    setOpen: (open: boolean) => void;
    handleSelectFile: (file: Image) => void;
};

export interface UseMediaFilesProps {
    initialPage?: number;
    filter?: string;
}