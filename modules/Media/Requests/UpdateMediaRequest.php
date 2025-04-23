<?php

declare(strict_types=1);

namespace Modules\Media\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * @property int $media_id
 * @property string $text
 */
final class UpdateMediaRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required', 'integer', 'exists:media,id'],
            'text' => ['required', 'string'],
        ];
    }
}
