<?php

declare(strict_types=1);

namespace Modules\Finance\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Operational\Models\ActiveCourse;

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

    public function activeCourse()
    {
        return $this->belongsTo(ActiveCourse::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }

    public function winner()
    {
        return $this->belongsTo(User::class);
    }
}
