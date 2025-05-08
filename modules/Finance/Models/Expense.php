<?php

declare(strict_types=1);

namespace Modules\Finance\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

final class Expense extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected $fillable = [
        'user_id',
        'value',
        'description',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
