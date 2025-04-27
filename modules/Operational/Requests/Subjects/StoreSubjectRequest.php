<?php

declare(strict_types=1);

namespace Modules\Operational\Requests\Subjects;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class StoreSubjectRequest extends FormRequest
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
            'description' =>  ['nullable', 'string'],
        ];
    }
}
