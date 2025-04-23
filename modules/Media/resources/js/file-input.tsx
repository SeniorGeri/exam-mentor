import {Button} from '../../../../resources/js/components/ui/button';
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from '../../../../resources/js/components/ui/resizable';
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from '../../../../resources/js/components/ui/sheet';
import { useEffect, useState } from 'react';
import Dropzone from './drop-zone';
import FileInfo from './file-info';
import FilePreview from './file-preview';
import {Image, InputProp} from './types';
import FileGallery from './file-gallery';
import { useMediaFiles } from './use-media-files';
import { useUpload } from './use-upload';

function FileInput({multiple = false, inputName = 'image', setFormData, defaultValue = []}: InputProp) {

    const [currentFile, setCurrentFile] = useState<Image | null>(null);
    const [selectedFiles, setSelectedFile] = useState<Image[]>([]);
    const { uploadedFiles, isLoading, loadMore, setUploadedFiles, hasMore } = useMediaFiles({});
    const { isUploading, uploadFiles } = useUpload();

    useEffect(() => {
        if(defaultValue.length > 0){
            const mappedValues: Image[] = defaultValue.map((image: string) => {
                return {
                    id: 0,
                    text: '',
                    original: image,
                    thumb: image,
                }
            })
            setSelectedFile(mappedValues)
        }
    }, []);

    const handleSelectFile = (file: Image) => {
        setCurrentFile(file);
        if (!multiple) {
            setSelectedFile([file]);
            return;
        }
        if (selectedFiles.includes(file)) {
            setSelectedFile(selectedFiles.filter((item: Image) => item != file));
        } else {
            setSelectedFile([...selectedFiles, file]);
        }
    }

    useEffect(() => {
        if (multiple) {
            setFormData(inputName, selectedFiles.map(file => file.original));
        } else {
            setFormData(inputName, selectedFiles[0]?.original);
        }
    }, [selectedFiles]);

    const handleUpload = async (files: File[]) => {
        const uploaded = await uploadFiles(files);
        setUploadedFiles(prev => [...uploaded, ...prev]);
    };

    return (
        <Sheet key={'bottom'}>
            <SheetTrigger asChild>
                <div>
                    <FilePreview selectedFiles={selectedFiles} handleSelectFile={handleSelectFile}/>
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
                                        <FileGallery
                                            uploadedFiles={uploadedFiles}
                                            multiple={multiple}
                                            selectedFiles={selectedFiles}
                                            handleSelectFile={handleSelectFile}
                                        />
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
                    <div className="grid md:grid-cols-4 gap-2">
                        <Button className="md:col-span-3" type="button" onClick={() => loadMore()}  disabled={!hasMore || isLoading}>
                            {isLoading ? 'Loading...' : 'Load More'}
                        </Button>
                        <SheetClose asChild className="col-span-1">
                            <Button>close</Button>
                        </SheetClose>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

export default FileInput;