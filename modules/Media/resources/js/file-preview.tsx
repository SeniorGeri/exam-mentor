import {Button} from '../../../../resources/js/components/ui/button';
import React from 'react';
import {FilePreviewProps, Image} from './types';


function FilePreview({selectedFiles, multiple, handleSelectFile}: FilePreviewProps) {
    const removeFile = (event: React.MouseEvent<HTMLElement>, file: Image) => {
        event.preventDefault();
        handleSelectFile(file);
    };
    console.log(multiple);

    return selectedFiles.length === 0 ? (
        <Button variant="outline" type='button'>Preview</Button>
    ) : (
        <div className="mx-2 mb-2 grid w-full grid-cols-3 gap-2 rounded-lg border-2 border-dashed p-5 lg:grid-cols-4">
            {selectedFiles.map((file: Image) => (
                <div
                    key={file.id}
                    className={`${multiple? 'col-span-1':'col-span-3'} mx-auto overflow-hidden rounded-lg bg-white py-1 shadow-lg`}
                    onClick={(event) => removeFile(event, file)}
                >
                    <img
                        src={file.thumb}
                        alt="Aesthetic Image"
                        className={`h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-105`}
                    />
                </div>
            ))}
        </div>
    );
}

export default FilePreview;