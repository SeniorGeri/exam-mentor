<?php

declare(strict_types=1);

namespace Modules\Media\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

final class Media extends Model
{
    use SoftDeletes;

    protected $fillable = ['user_id', 'original', 'thumb', 'text'];
}
