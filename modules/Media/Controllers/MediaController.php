<?php

declare(strict_types=1);

namespace Modules\Media\Controllers;

use App\Enums\RolesEnum;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Modules\Media\Models\Media;
use Modules\Media\Requests\DeleteMediaRequest;
use Modules\Media\Requests\SearchMediaRequest;
use Modules\Media\Requests\UpdateMediaRequest;

final class MediaController
{
    /**
     * Return view to see all media
     */
    public function show(): View
    {
        $medias = Media::orderBy('created_at', 'DESC')
        ->when(!Auth::user()->hasRole(RolesEnum::ADMIN->value), function ($query) {
            $query->where('user_id', Auth::user()->id);
        })
        ->simplePaginate(5);

        return view('storage::media', ['medias' => $medias]);
    }

    /**
     * Update media
     */
    public function update(UpdateMediaRequest $request, Media $media): void
    {
        $media->text = $request->text;
        $media->save();

    }

    /**
     * Delete media
     */
    public function destroy(Media $media): void
    {
        $media->delete();
    }

    /**
     * Search media
     */
    public function search(SearchMediaRequest $request): JsonResponse
    {
        $medias = Media::when(!Auth::user()->hasRole(RolesEnum::ADMIN->value), function ($query) {
            $query->where('user_id', Auth::user()->id);
        })
        ->where(function (Builder $query) use ($request){
            $query->where('original', 'like', '%'.$request->search_key.'%')
            ->orWhere('text', 'like', '%'.$request->search_key.'%');
        })
            ->orderBy('created_at', 'DESC')
            ->simplePaginate(30);

        return response()->json(['medias' => $medias]);
    }
}
