import {Avatar, AvatarImage} from '../../../../resources/js/components/ui/avatar';
import {Button} from '../../../../resources/js/components/ui/button';
import {Textarea} from '../../../../resources/js/components/ui/textarea';
import {router, useForm} from '@inertiajs/react';
import {route} from '../../../../vendor/tightenco/ziggy';
import {toast} from 'sonner';
import InputError from '../../../../resources/js/components/input-error';
import {useEffect} from 'react';
import {Image, InfoProps} from './types';

function FileInfo({file, setUploadedFiles, uploadedFiles, setCurrentFile}: InfoProps) {

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: file?.id,
        text: file?.text ?? '',
        thumb: file?.thumb,
        original: file?.original
    });

    useEffect(() => {
        setData({
            id: file?.id,
            text: file?.text ?? '',
            thumb: file?.thumb,
            original: file?.original
        });
        clearErrors();
    }, [file]);

    const updateImage: () => void = () => {
        put(route('media.update', file?.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast('Imazhi u perditesua me sukses', {position: 'top-right', duration: 2000});
                clearErrors();
                setUploadedFiles(
                    uploadedFiles.map((item: Image) => item.id === data.id ? data : item)
                );
            },
        });
    };

    const deleteImage: () => void = () => {

        router.delete(route('media.destroy', file?.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast('Imazhi u fshi me sukses', {position: 'top-right', duration: 2000});
                clearErrors();
                reset()

                const filteredFiles = uploadedFiles.filter((item) => item.id !== data.id);

                setUploadedFiles(filteredFiles);

                setCurrentFile(null)
            },
        });
    };
    return (
        <div className="p-2">
            <h1>Te dhenat e imazhit</h1>
            <p>Me poshte shfaqen te dhenat e imazhit</p>
            <div className="flex justify-center">
                <Avatar className={'size-28'}>
                    <AvatarImage src={file?.thumb} alt="@shadcn"/>
                </Avatar>
            </div>
            <div className="px-3 text-center">{file?.original}</div>

            <div className="grid gap-2 px-3 my-2">

                <Textarea
                    id="text"
                    name="text"
                    value={data.text}
                    onChange={(e) => setData('text', e.target.value)}
                    placeholder="Shenime"
                    autoComplete="text"
                />
                <InputError message={errors.text}/>
            </div>

            <div className="flex gap-x-3">
                <Button className="w-1/2" onClick={updateImage} disabled={processing}>
                    Edito
                </Button>
                <Button className="w-1/2" onClick={deleteImage}>
                    Fshi
                </Button>
            </div>
        </div>
    );
}

export default FileInfo;