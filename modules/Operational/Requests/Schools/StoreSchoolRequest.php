<?php

declare(strict_types=1);

namespace Modules\Operational\Requests\Schools;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class StoreSchoolRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'image' => ['nullable', 'string'],
            'country_id' => ['required', 'integer'],
            'description' =>  ['nullable', 'string'],
        ];
    }
}
