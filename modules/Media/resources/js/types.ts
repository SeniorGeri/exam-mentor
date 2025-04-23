import React from 'react';

export type DropzoneProps = {
    onUpload: (files: File[]) => void;
};

export type ContainerProps = {
    file: Image;
    index: number;
    setCurrentFile: (file: Image) => void;
    selectedFiles: Image[];
    setSelectedFile: (files: Image[]) => void;
    multiple: boolean;
};

export type InfoProps = {
    setUploadedFiles: React.Dispatch<React.SetStateAction<Image[]>>;
    setCurrentFile: React.Dispatch<React.SetStateAction<Image|null>>;
    file: Image;
    uploadedFiles: Image[]
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
    setSelectedFile: React.Dispatch<React.SetStateAction<Image[]>>;
};

export type InputProp = {
    multiple: boolean,
    inputName: string,
    setFormData: (key: string, value: string | string[]) => void
}
