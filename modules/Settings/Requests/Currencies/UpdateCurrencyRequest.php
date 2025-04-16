<?php

declare(strict_types=1);

namespace Modules\Settings\Requests\Currencies;

use App\Traits\HasTranslationRulesTrait;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdateCurrencyRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'exchange' => ['required', 'numeric'],
            'symbol' => ['required', 'string', 'max:100'],
            'is_primary' => ['required', 'boolean'],
            'currency_code' => ['nullable', 'string', 'max:100'],
            'description' =>  ['nullable', 'string'],
        ];
    }

}
