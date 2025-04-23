<?php

declare(strict_types=1);

namespace Modules\Media\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * @property string $search_key
 */
final class SearchMediaRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'search_key' => ['nullable', 'string'],
        ];
    }
}
