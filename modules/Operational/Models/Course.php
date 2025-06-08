<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Traits\HasTableFilterTrait;
use App\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

final class Course extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasTranslationsTrait;
    use HasFactory;

    protected $fillable = ['title', 'description', 'image'];

    protected $translatable = ['title'];

    public function grades(): HasManyThrough
    {
        return $this->hasManyThrough(Grade::class, CourseGrade::class, 'course_id', 'id', 'id', 'grade_id' );
    }

    public function subjects(): HasManyThrough
    {
        return $this->hasManyThrough(Subject::class, CourseSubject::class, 'course_id', 'id', 'id', 'subject_id' );
    }

    public function schools(): HasManyThrough
    {
        return $this->hasManyThrough(School::class, CourseSchool::class, 'course_id', 'id', 'id', 'school_id' );
    }

    public function gradeIds(): HasMany
    {
        return $this->hasMany(CourseGrade::class, 'course_id', 'id');
    }

    public function subjectIds(): HasMany
    {
        return $this->hasMany(CourseSubject::class, 'course_id', 'id');
    }

    public function schoolIds(): HasMany
    {
        return $this->hasMany(CourseSchool::class, 'course_id', 'id');
    }
}
