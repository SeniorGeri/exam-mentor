<?php

declare(strict_types=1);

namespace Modules\Settings\Requests\Countries;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class StoreCountryRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'country' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
            'flag' => ['nullable', 'string'],
        ];
    }
}
