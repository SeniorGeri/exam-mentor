<?php

declare(strict_types=1);

namespace Modules\Finance\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Operational\Models\ActiveCourse;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class Liquidation extends Model
{

    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected $fillable = [
        'active_course_id',
        'created_by',
        'winner_id',
        'approved',
        'value',
        'description',
    ];

    public function activeCourse(): BelongsTo
    {
        return $this->belongsTo(ActiveCourse::class);
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function winner(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
