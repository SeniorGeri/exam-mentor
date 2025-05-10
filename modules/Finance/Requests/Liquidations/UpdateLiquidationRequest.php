<?php

declare(strict_types=1);

namespace Modules\Finance\Requests\Liquidations;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class UpdateLiquidationRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'approved' => ['required', 'boolean'],
        ];
    }
}
