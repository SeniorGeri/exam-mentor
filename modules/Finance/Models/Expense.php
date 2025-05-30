<?php

declare(strict_types=1);

namespace Modules\Finance\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class Expense extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected $fillable = [
        'user_id',
        'value',
        'description',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
