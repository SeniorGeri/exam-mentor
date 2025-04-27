<?php

declare(strict_types=1);

namespace Modules\Operational\Requests\Grades;

use App\Traits\HasTranslationRulesTrait;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdateGradeRequest extends FormRequest
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
            'description' =>  ['nullable', 'string'],
            'locale' => ['required', 'string']
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
            'title' => ['required', 'string', 'max:100'],
        ];
    }
}
