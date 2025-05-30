import FileContainer from './file-container';
import { GalleryProps } from './types';

export default function FileGallery({ selectedFiles, uploadedFiles, handleSelectFile, setOpen }: GalleryProps) {
    return (
        <div className="mx-2 grid grid-cols-4 gap-2 lg:grid-cols-12">
            {uploadedFiles.map((file) => (
                <FileContainer file={file} key={file.id} handleSelectFile={handleSelectFile} selectedFiles={selectedFiles} setOpen={setOpen} />
            ))}
        </div>
    );
}