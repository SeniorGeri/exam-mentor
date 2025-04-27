<?php

declare(strict_types=1);

namespace Modules\Operational\Requests\Subjects;

use App\Traits\HasTranslationRulesTrait;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdateSubjectRequest extends FormRequest
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
            'image' => ['nullable', 'string'],
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
