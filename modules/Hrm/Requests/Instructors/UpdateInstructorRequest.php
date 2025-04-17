<?php

declare(strict_types=1);

namespace Modules\Hrm\Requests\Instructors;

use App\Traits\HasTranslationRulesTrait;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdateInstructorRequest extends FormRequest
{
    use HasTranslationRulesTrait;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required','integer'],
            'profile_pic' => ['nullable', 'string'],
            'active' => ['required','boolean'],
            'name' => ['required','string'],
            'email' => ['required','string'],
            'password' => ['required','string'],
            'city_id' => ['nullable', 'integer', 'exists:cities,id'],
            'country_id' => ['nullable', 'integer', 'exists:countries,id'],
            'gender_id' => ['nullable', 'integer', 'exists:genders,id'],
            'address' => ['nullable','string'],
        ];
    }

        /**
     * Get the validation translations rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function translationsRules(): array
    {
        return [
            'bio' =>  ['nullable', 'string'],
        ];
    }
}
