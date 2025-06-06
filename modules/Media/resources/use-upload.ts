import { useState } from 'react';
import axios from 'axios';
import { route } from 'ziggy-js';
import { Image } from './js/types';

export function useUpload() {
    const [isUploading, setIsUploading] = useState(false);

    const uploadFiles = async (files: File[]): Promise<Image[]> => {
        setIsUploading(true);
        try {
            const uploadPromises = files.map((file) => {
                const formData = new FormData();
                formData.append('file', file);

                return axios.post(route('media.upload'), formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            });

            const responses = await Promise.all(uploadPromises);
            return responses.map((res) => res.data);
        } catch (error) {
            console.error('Upload failed:', error);
            return [];
        } finally {
            setIsUploading(false);
        }
    };

    return {
        isUploading,
        uploadFiles,
    };
}