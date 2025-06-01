<?php

namespace Modules\Frontend\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\HasTableFilterTrait;

class ContactUs extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected $fillable = [
        'name',
        'ip',
        'email',
        'subject',
        'message',
        'phone',
        'is_read'
    ];
}
