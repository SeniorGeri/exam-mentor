<?php

declare(strict_types=1);

namespace Modules\Media\Helpers;

use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Modules\Media\Models\Media;
use Modules\Media\Requests\UploadFileRequest;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

final class StorageService
{
    /**
     * Upload new file
     */
    public static function upload(UploadFileRequest $request): array
    {
        $imageManager = new ImageManager(new Driver);

        $tempUploadedPath = $request->file->store('temp-uploads');

        $imageData = $imageManager->read(storage_path('app/public/' . $tempUploadedPath));

        $folderPath = 'uploads/' . date('y') . '/' . date('m');

        $convertedNameThumb = Str::beforeLast($request->file('file')->hashName(), '.') . '.webp';

        $imageData->pad(200, 200)->toWebp()->save(storage_path('app/public/') . $folderPath . '/thumb_' . $convertedNameThumb);

        $request->file('file')->store($folderPath, ['disk' => 'public']);

        unlink(storage_path('app/public/temp-uploads/' . $request->file('file')->hashName()));

        $image = Media::create([
            'user_id' => $request->user()->id,
            'original' => '/storage/' . $folderPath . '/' . $request->file('file')->hashName(),
            'thumb' => '/storage/' . $folderPath . '/thumb_' . $convertedNameThumb,
        ]);

        return [
            'id' => $image->id,
            'name' => $request->file('file')->hashName(),
            'original' => '/storage/' . $folderPath . '/' . $request->file('file')->hashName(),
            'original_name' => $request->file('file')->getClientOriginalName(),
            'extension' => $request->file('file')->getClientOriginalExtension(),
            'thumb' => '/storage/' . $folderPath . '/thumb_' . $convertedNameThumb,
        ];
    }

    public static function delete(string $path): void
    {
        try {
            unlink(storage_path('app/public' . Str::replace('/storage', '', $path)));

            unlink(storage_path('app/public' . Str::replace('/storage', '', 'thumb_' . $path)));

            DB::table('medias_table')->where('original', '=', $path)->delete();
        } catch (Exception) {
        }
    }
}
