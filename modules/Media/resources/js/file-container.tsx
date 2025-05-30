import { ContainerProps } from './types';

function FileContainer({ file, selectedFiles, handleSelectFile, setOpen }: ContainerProps) {
    return (
        <button
            className={`col-span-1 w-full rounded-lg py-1`}
            role="button"
            onClick={() => handleSelectFile(file)}
            onDoubleClick={() => setOpen(false)}
        >
            <div
                className={`mx-auto overflow-hidden rounded-lg bg-white shadow-lg ${selectedFiles.includes(file) ? 'border-4 border-gray-300' : 'border-none'}`}
            >
                <img
                    src={file.thumb}
                    alt="Aesthetic Image"
                    className="h-20 w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>
        </button>
    );
}

export default FileContainer;