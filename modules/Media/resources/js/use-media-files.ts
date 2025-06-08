import { useEffect, useState } from 'react';
import {route} from 'ziggy-js';
import { Image, UseMediaFilesProps } from './types';



export function useMediaFiles({ initialPage = 1, filter = '' }: UseMediaFilesProps) {
    const [uploadedFiles, setUploadedFiles] = useState<Image[]>([]);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Optional: for infinite scroll

    const fetchImages = async (page: number, filter: string) => {
        const filterQuery = filter ? `&filter=${filter}` : '';
        const response = await fetch(`${route('media.search')}?page=${page}${filterQuery}`);
        const data = await response.json();
        return data.medias;
    };

    const loadMore = async () => {
        setIsLoading(true);
        try {
            const data = await fetchImages(currentPage, filter);
            if (data.data.length === 0) {
                setHasMore(false);
            } else {
                setUploadedFiles(prev => [...prev, ...data.data]);
                setCurrentPage(prev => prev + 1);
            }
        } catch (error) {
            console.error('Failed to fetch media files:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {loadMore()}, []);

    return {
        uploadedFiles,
        isLoading,
        loadMore,
        hasMore,
        setUploadedFiles, // useful for updates (e.g., after deletion or upload)
    };
}