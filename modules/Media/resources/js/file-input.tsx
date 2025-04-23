import {Button} from '../../../../resources/js/components/ui/button';
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from '../../../../resources/js/components/ui/resizable';
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from '../../../../resources/js/components/ui/sheet';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {route} from '../../../../vendor/tightenco/ziggy';
import Dropzone from './drop-zone';
import FileContainer from './file-container';
import FileInfo from './file-info';
import FilePreview from './file-preview';
import {Image, ImageRequest, InputProp} from './types';

export async function fetchImages({pageIndex, filter}: ImageRequest) {
    const filterKey: string = filter !== '' ? `&filter=${filter}` : '';
    const response = await fetch(`${route('media.search')}?page=${pageIndex}${filterKey}`);

    const data = await response.json();
    return data.medias;
}

function FileInput({multiple = false, inputName = 'image', setFormData}: InputProp) {
    const [uploadedFiles, setUploadedFiles] = useState<Image[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentFile, setCurrentFile] = useState<Image | null>(null);
    const [selectedFiles, setSelectedFile] = useState<Image[]>([]);
    const loadInitialFiles = async () => {
        try {
            const images = await fetchImages({pageIndex: currentPage, filter: ''});
            setUploadedFiles(uploadedFiles.concat(images.data));
        } catch (error) {
            console.log('Failed to fetch initial images:', error);
        }
    };

    useEffect(() => {
        loadInitialFiles();
    }, [currentPage]);

    useEffect(() => {
        if (multiple) {
            setFormData(inputName, selectedFiles.map((file: Image) => file.original));
        } else {
            setFormData(inputName, selectedFiles[0]?.original);
        }
    }, [selectedFiles]);

    const handleUpload = async (files: File[]) => {
        try {
            setIsUploading(true);
            const uploadPromises = files.map((file: File) => {
                const formData = new FormData();
                formData.append('file', file);

                return axios.post(route('media.upload'), formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            });

            const responses = await Promise.all(uploadPromises);

            // Collect all uploaded file data
            const newUploadedFiles = responses.map((response) => response.data);

            // Update state with all uploaded files (prepend to existing)
            setUploadedFiles((prev) => [...newUploadedFiles, ...prev]);

        } catch (error) {
            console.log(error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <Sheet key={'bottom'}>
            <SheetTrigger asChild>
                <div>
                    <FilePreview selectedFiles={selectedFiles} setSelectedFile={setSelectedFile}/>
                </div>
            </SheetTrigger>
            <SheetContent side={'top'} className="flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle>Media</SheetTitle>
                    <SheetDescription>Perzgjidh imazh</SheetDescription>
                </SheetHeader>
                <div className="flex-1  overflow-y-auto w-full">
                    {isUploading ? (
                        <div className="flex h-48 w-1/3 items-center justify-center rounded-lg border-2 border-dashed p-4">
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-center">
                                <Dropzone onUpload={handleUpload}/>

                            </div>
                            {uploadedFiles.length > 0 && (
                                <ResizablePanelGroup direction={'horizontal'} className="w-full rounded-lg  flex-1">
                                    <ResizablePanel defaultSize={80}>
                                        <div className="mx-2 grid grid-cols-4 gap-2 lg:grid-cols-12">
                                            {uploadedFiles.map((file) => (
                                                <FileContainer
                                                    multiple={multiple}
                                                    file={file}
                                                    index={file.id}
                                                    key={file.id}
                                                    setCurrentFile={setCurrentFile}
                                                    selectedFiles={selectedFiles}
                                                    setSelectedFile={setSelectedFile}
                                                />
                                            ))}
                                        </div>
                                    </ResizablePanel>
                                    <ResizableHandle/>
                                    <ResizablePanel defaultSize={20}>
                                        {currentFile &&
                                            <FileInfo file={currentFile} setUploadedFiles={setUploadedFiles} uploadedFiles={uploadedFiles} setCurrentFile={setCurrentFile}/>
                                        }
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            )}
                        </>
                    )}
                </div>
                <SheetFooter>
                    <>
                        <Button type="button" onClick={() => setCurrentPage(currentPage => currentPage + 1)}>
                            Load More
                        </Button>
                        <SheetClose asChild></SheetClose>
                    </>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

export default FileInput;
