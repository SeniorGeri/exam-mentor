<?php

declare(strict_types=1);

namespace App\Traits;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Database\Eloquent\Builder;

trait HasTableFilterTrait
{
    public static function filter(FilterTableRequest $request): Builder
    {
        $query = static::query();

        if ($request->has('filter') && $request->filter !== '') {
            $query->where(function ($query) use ($request) {
                foreach (explode(',', $request->columns) as $column) {
                    $query->orWhere($column, 'like', '%' . $request->filter . '%');
                }
            });
        }

        if ($request->has('sort') && $request->sort !== '') {
            $query->orderBy($request->sort, $request->direction);
        }

        return $query;
    }
}