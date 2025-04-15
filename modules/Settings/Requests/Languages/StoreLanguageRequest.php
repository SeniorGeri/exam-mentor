<?php

declare(strict_types=1);

namespace Modules\Settings\Requests\Languages;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class StoreLanguageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'language' => ['required', 'string', 'max:100'],
            'language_code' => ['required', 'string', 'max:100'],
            'flag' => ['nullable', 'string', 'max:100'],
            'description' =>  ['nullable', 'string'],
        ];
    }
}
