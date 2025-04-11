<?php

declare (strict_types= 1);

namespace Modules\Settings\Models;

use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

final class Country extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;

    protected $fillable = ['country', 'description', 'flag'];
}
