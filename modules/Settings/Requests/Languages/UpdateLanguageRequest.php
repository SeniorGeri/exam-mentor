<?php

declare(strict_types=1);

namespace Modules\Settings\Requests\Languages;

use App\Traits\HasTranslationRulesTrait;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdateLanguageRequest extends FormRequest
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
            'language_code' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
            'flag' => ['nullable', 'string'],
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
            'language' => ['required', 'string', 'max:100'],
        ];
    }
}
