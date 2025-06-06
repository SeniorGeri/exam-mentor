<?php

declare(strict_types=1);

namespace Modules\Operational\Requests\Courses;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class StoreCourseRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:100'],
            'image' => ['nullable', 'string'],
            'schools' =>  ['nullable', 'array'],
            'subjects' =>  ['nullable', 'array'],
            'grades' =>  ['nullable', 'array'],
            
        ];
    }
}
