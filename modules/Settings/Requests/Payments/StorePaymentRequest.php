<?php

declare(strict_types=1);

namespace Modules\Settings\Requests\Payments;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class StorePaymentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'method' => ['required', 'string', 'max:100'],
            'is_primary' => ['required', 'boolean'],
            'image' =>  ['nullable', 'string'],
            'description' =>  ['nullable', 'string'],
        ];
    }
}
