<?php

declare(strict_types=1);

namespace Modules\Media\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Modules\Media\Helpers\StorageService;
use Modules\Media\Requests\UploadFileRequest;

final class MediaUploadController
{
    /**
     * Upload file
     *
     * @param UploadFileRequest $request
     * @return JsonResponse
     */
    public function upload(UploadFileRequest $request): JsonResponse
    {
        $data = StorageService::upload($request);

        return response()->json($data);
    }

    /**
     * Remove file
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function remove(Request $request): JsonResponse
    {
        StorageService::delete($request->path);

        return response()->json(['file' => $request->path]);
    }
}
