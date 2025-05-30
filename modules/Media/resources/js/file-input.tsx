import { Button } from '@/components/ui/button';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dropzone from './drop-zone';
import FileGallery from './file-gallery';
import FileInfo from './file-info';
import FilePreview from './file-preview';
import { FileSkeleton } from './file-skeleton';
import { Image, InputProp } from './types';
import { useMediaFiles } from './use-media-files';
import { useUpload } from './use-upload';

function FileInput({ multiple = false, inputName = 'image', setFormData, defaultValue = [] }: InputProp) {
    const { t } = useTranslation('Media');

    const [currentFile, setCurrentFile] = useState<Image | null>(null);
    const [selectedFiles, setSelectedFile] = useState<Image[]>([]);
    const { uploadedFiles, isLoading, loadMore, setUploadedFiles, hasMore } = useMediaFiles({});
    const { isUploading, uploadFiles } = useUpload();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (defaultValue.length > 0) {
            const mappedValues: Image[] = defaultValue.map((image: string) => {
                return {
                    id: 0,
                    text: '',
                    original: image,
                    thumb: image,
                };
            });
            setSelectedFile(mappedValues);
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
    };

    useEffect(() => {
        if (multiple) {
            setFormData(
                inputName,
                selectedFiles.map((file) => file.original),
            );
        } else {
            setFormData(inputName, selectedFiles[0]?.original);
        }
    }, [selectedFiles]);

    const handleUpload = async (files: File[]) => {
        const uploaded = await uploadFiles(files);
        setUploadedFiles((prev) => [...uploaded, ...prev]);
    };

    return (
        <Sheet key={'bottom'} open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <div>
                    <FilePreview selectedFiles={selectedFiles} handleSelectFile={handleSelectFile} />
                </div>
            </SheetTrigger>
            <SheetContent side={'top'} className="flex h-full flex-col">
                <SheetHeader>
                    <SheetTitle>{t('media')}</SheetTitle>
                    <SheetDescription>{t('media_description')}</SheetDescription>
                </SheetHeader>
                {isUploading ? (
                    <FileSkeleton />
                ) : (
                    <div className="w-full flex-1 overflow-y-auto">
                        <div className="mb-5 flex items-center justify-center">
                            <Dropzone onUpload={handleUpload} />
                        </div>
                        {uploadedFiles.length > 0 && (
                            <ResizablePanelGroup direction={'horizontal'} className="w-full flex-1 rounded-lg">
                                <ResizablePanel defaultSize={80}>
                                    <FileGallery
                                        uploadedFiles={uploadedFiles}
                                        multiple={multiple}
                                        selectedFiles={selectedFiles}
                                        handleSelectFile={handleSelectFile}
                                        setOpen={setOpen}
                                    />
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel defaultSize={20} className="hidden sm:block">
                                    {currentFile && (
                                        <FileInfo
                                            file={currentFile}
                                            setUploadedFiles={setUploadedFiles}
                                            uploadedFiles={uploadedFiles}
                                            setCurrentFile={setCurrentFile}
                                        />
                                    )}
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        )}
                    </div>
                )}
                <SheetFooter>
                    <div className="grid gap-2 md:grid-cols-4">
                        <Button className="md:col-span-3" type="button" onClick={() => loadMore()} disabled={!hasMore || isLoading}>
                            {isLoading ? t('loading') : t('load_more')}
                        </Button>
                        <SheetClose asChild className="col-span-1">
                            <Button>{t('close')}</Button>
                        </SheetClose>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

export default FileInput;