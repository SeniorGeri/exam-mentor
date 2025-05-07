import { Editor } from '@tinymce/tinymce-react';
import { TextEditorInterface } from '@/components/input/data';
import { Suspense } from 'react';
import { useUpload } from '../../../../modules/Media/resources/js/use-upload';


type BlobInfo = {
    id: () => string;
    name: () => string;
    filename: () => string;
    blob: () => Blob;
    base64: () => string;
    blobUri: () => string;
    uri: () => string | undefined;
}
export default function CustomTextEditor({
    id,
    defaultValue = '',
    setFormData
}: TextEditorInterface) {

    const { uploadFiles } = useUpload();
    const example_image_upload_handler = async (blobInfo: BlobInfo) => {

        const uploaded = await uploadFiles(!Array.isArray(blobInfo) ? [blobInfo.blob()]: blobInfo.map((blob) => blob.blob()));
        return uploaded[0].original;

    }


    return (
        <Suspense fallback="Loading ...">
            <Editor
                tinymceScriptSrc="/tinymce/tinymce.min.js"
                onChange={(e) => setFormData(id, e.target.getContent())}
                initialValue={defaultValue}
                init={{
                    plugins: 'preview searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                    menubar: 'file edit view insert format tools table tc help',
                    toolbar: "undo redo | bold italic underline strikethrough | blocks fontsizeinput | align numlist bullist | link image media emoticons charmap table insertfile template | lineheight outdent indent | forecolor backcolor removeformat | code fullscreen preview save print | pagebreak anchor codesample footnotes | addtemplate inserttemplate | ltr rtl fontfamily fontsize",
                    toolbar_mode: 'sliding',
                    typography_ignore: ['code'],
                    height: 550,
                    image_caption: true,
                    promotion: false,
                    branding: false,
                    image_advtab: true,
                    autosave_ask_before_unload: true,
                    autosave_prefix: '{path}{query}-{id}-',
                    autosave_interval: '30s',
                    autosave_retention: '2m',
                    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                    contextmenu: 'link image table configurepermanentpen',
                    skin_url: '/tinymce/skins/ui/oxide',
                    content_css: '/tinymce/skins/content/default/content.css',
                    base_url: '/tinymce', // important: sets the base path
                    suffix: '.min',       // important: uses minified files
                    images_upload_handler: example_image_upload_handler,

                }}
            />
        </Suspense>
    );
}