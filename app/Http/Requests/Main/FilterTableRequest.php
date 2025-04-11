<?php

declare(strict_types=1);

namespace App\Http\Requests\Main;

use Illuminate\Foundation\Http\FormRequest;

final class FilterTableRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'limit' => ['nullable', 'integer', 'min:1', 'max:100'],
            'page' => ['nullable', 'integer', 'min:1'],
            'sort' => ['nullable', 'string', 'max:255'],
            'direction' => ['nullable', 'string', 'max:255'],
            'columns' => ['nullable', 'string', 'max:255'],
            'filter' => ['nullable', 'string', 'max:255'],
        ];
    }
}
