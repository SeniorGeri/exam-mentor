<?php

declare(strict_types=1);

namespace Modules\Finance\Requests\CoursePricing;

use App\Enums\RolesEnum;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class StoreCoursePricingRequest extends FormRequest
{
    public function prepareForValidation(): void
    {
        if($this->user()->hasRole(RolesEnum::INSTRUCTOR->value)) {
            $this->merge([
                'instructor_id' => $this->user()->id,
            ]);
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
            'course_id' => ['required', 'integer'],
            'instructor_id' => ['required', 'integer'],
            'pricing_type_id' => ['required', 'integer'],
            'language_id' => ['required', 'integer'],
            'price' => ['required', 'integer'],
            'longevity' => ['required', 'integer'],
            'description' => ['required', 'string'],
        ];
    }
}
