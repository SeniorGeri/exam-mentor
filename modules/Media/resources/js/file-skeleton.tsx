import React from 'react';
import { Skeleton } from '@/components/ui/skeleton.js';

export function FileSkeleton() {

    return  (
        <div className="p-3">
            <Skeleton className="h-48 w-full"/>
            <div className="my-3  grid grid-cols-4 gap-2 lg:grid-cols-12">
                {[...Array(36)].map((_: number, i: number) => (
                    <Skeleton key={i} className="h-36" />
                ))}
            </div>
        </div>
    );
}