<?php

declare(strict_types=1);

namespace Modules\Settings\Requests\Payments;

use App\Traits\HasTranslationRulesTrait;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdatePaymentRequest extends FormRequest
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
            'is_primary' => ['required', 'boolean'],
            'active' => ['required', 'boolean'],
            'image' =>  ['nullable', 'string'],
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
            'method' => ['required', 'string', 'max:100'],
        ];
    }
}
