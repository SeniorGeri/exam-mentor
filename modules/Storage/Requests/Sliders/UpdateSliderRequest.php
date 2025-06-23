<?php

declare(strict_types=1);

namespace Modules\Storage\Requests\Sliders;

use App\Traits\HasTranslationRulesTrait;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdateSliderRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:100'],
            'subtitle' => ['required', 'string', 'max:100'],
            'button_text' => ['required', 'string', 'max:100'],
            'button_url' => ['required', 'string', 'max:100'],
            'image' => ['required', 'string', 'max:100'],
            'active' => ['required', 'boolean'],
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
            'title' => ['required', 'string', 'max:100'],
            'subtitle' => ['required', 'string', 'max:100'],
            'button_text' => ['required', 'string', 'max:100'],
        ];
    }
}
