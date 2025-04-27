import {Button} from '@/components/ui/button';
import React from 'react';
import {FilePreviewProps, Image} from './types';
import { useTranslation } from 'react-i18next';


function FilePreview({selectedFiles, handleSelectFile}: FilePreviewProps) {

    const {t} = useTranslation('Media');

    const removeFile = (event: React.MouseEvent<HTMLElement>, file: Image) => {
        event.preventDefault();
        handleSelectFile(file);
    };

    return selectedFiles.length === 0 ? (
        <Button variant="outline" type="button">
            {t('preview')}
        </Button>
    ) : (
        <div className="mx-2 mb-2 grid w-full grid-cols-3 gap-2 rounded-lg border-2 border-dashed p-5 lg:grid-cols-4">
            {selectedFiles.map((file: Image) => (
                <div
                    key={file.id}
                    className={`col-span-4 mx-auto h-full w-auto max-w-[200px] overflow-hidden rounded-lg bg-white py-1 shadow-lg`}
                    onClick={(event) => removeFile(event, file)}
                >
                    <img
                        src={file.thumb}
                        alt="Aesthetic Image"
                        className={`object-fit h-20 w-full transition-transform duration-300 ease-in-out hover:scale-105`}
                    />
                </div>
            ))}
        </div>
    );
}

export default FilePreview;