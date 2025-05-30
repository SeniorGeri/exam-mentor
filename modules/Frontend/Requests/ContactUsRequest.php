<?php

declare(strict_types=1);

namespace Modules\Frontend\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class ContactUsRequest extends FormRequest
{

    protected function prepareForValidation(): void
    {
        $this->merge([
            'ip' => $this->ip(),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', 'no_html_tags'],
            'email' => ['required', 'string', 'email', 'max:255', 'no_html_tags'],
            'subject' => ['required', 'string', 'max:255', 'no_html_tags'],
            'message' => ['required', 'string', 'no_html_tags'],
            'phone' => ['nullable', 'string', 'max:255', 'no_html_tags'],
            'ip' => ['required', 'string'],
        ];
    }
}
