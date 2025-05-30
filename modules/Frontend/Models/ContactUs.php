<?php

namespace Modules\Frontend\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactUs extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'name',
        'ip',
        'email',
        'subject',
        'message',
        'phone',
    ];
}
