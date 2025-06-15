<?php

declare(strict_types=1);

namespace Modules\Operational\Requests\ActiveCourses;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdateActiveCourseRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'status_id' => ['required', 'integer'],
            'value' => ['nullable', 'integer'],
            'left' => ['nullable', 'integer'],
            'liquidation_percentage' => ['nullable', 'integer'],
            'description' => ['nullable', 'string'],
        ];
    }
}
