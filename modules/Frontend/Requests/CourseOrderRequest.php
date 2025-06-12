<?php

declare(strict_types=1);

namespace Modules\Frontend\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Modules\Operational\Enums\CourseStatusEnum;
use Modules\Operational\Models\CourseInstructor;

final class CourseOrderRequest extends FormRequest
{

    protected function prepareForValidation(): void
    {
        $user = Auth::guard('sanctum')->user();
        $courseInstructor = CourseInstructor::find($this->input('course_instructor_id'));

        $this->merge([
            'instructor_id' => $courseInstructor->instructor_id,
            'status_id' => CourseStatusEnum::REQUESTED->value,
            'liquidation_percentage' => 0,
            'left' => $courseInstructor->lessons,
            'value' => $courseInstructor->price,
        ]);
        if($user) {
            $this->merge(['student_id' => $user->id,]);
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'course_instructor_id' => ['required', 'integer'],
            'instructor_id' => ['required', 'integer'],
            'value' => ['required', 'integer'],
            'left' => ['required', 'integer'],
            'liquidation_percentage' => ['required', 'integer'],
            'status_id' => ['required', 'integer'],
            'student_id' => ['nullable', 'integer'],
            'name' => ['nullable', 'string', 'max:255', 'no_html_tags'],
            'email' => ['nullable', 'string', 'email', 'max:255', 'no_html_tags'],
            'phone' => ['nullable', 'string', 'max:255', 'no_html_tags'],
        ];
    }
}
