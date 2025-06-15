<?php

declare(strict_types=1);

namespace Modules\Operational\Requests\ActiveCourses;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Modules\Operational\Models\CourseInstructor;

final class StoreActiveCourseRequest extends FormRequest
{   

    public function prepareForValidation(): void
    {
        $this->merge([
            'instructor_id' => CourseInstructor::find($this->course_instructor_id)->instructor_id,
        ]);
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'status_id' => ['required', 'integer'],
            'instructor_id' => ['required', 'integer'],
            'student_id' => ['required', 'integer'],
            'course_instructor_id' => ['required', 'integer'],
            'value' => ['required', 'integer'],
            'left' => ['required', 'integer'],
            'liquidation_percentage' => ['required', 'integer'],
            'description' => ['nullable', 'string'],
        ];
    }
}
