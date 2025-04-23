import React, { RefObject, useRef, useState } from 'react';
import { DropzoneProps } from './types';



const Dropzone = ({ onUpload }: DropzoneProps) => {
    const [isDragActive, setIsDragActive] = useState<boolean>(false);
    const fileInput: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const handleDragEnter = () => {
        setIsDragActive(true);
    };

    const handleDragLeave = () => {
        setIsDragActive(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragActive(false);
        const files = Array.from(e.dataTransfer.files);
        onUpload(files);
    };

    return (
        <div
            className={`mb-2 flex h-32 w-2/3 items-center justify-center rounded-lg border-2 border-dashed p-5 ${isDragActive ? 'border-sky-400 bg-sky-50' : 'border-gray-300'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInput.current?.click()}
        >
            <input
                type="file"
                className="hidden"
                multiple
                name="image_upload"
                id="image_upload"
                ref={fileInput}
                onChange={(e) => onUpload(Array.from(e.target.files))}
            />

            <p className={`text-sm ${isDragActive ? 'text-sky-800' : 'text-gray-400'} `}>
                {isDragActive ? 'Leave Your File Here' : 'Drag and drop your files here'}
            </p>
        </div>
    );
};

export default Dropzone;
