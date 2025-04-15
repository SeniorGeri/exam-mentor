<?php

declare(strict_types=1);

namespace Modules\Settings\Requests\Cities;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class StoreCityRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'city' => ['required', 'string', 'max:100'],
            'country_id' => ['required', 'integer'],
            'description' =>  ['nullable', 'string'],
        ];
    }
}
