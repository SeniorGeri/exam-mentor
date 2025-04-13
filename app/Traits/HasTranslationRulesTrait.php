<?php

declare(strict_types=1);

namespace App\Traits;

use Illuminate\Support\Facades\Validator;

trait HasTranslationRulesTrait
{
    public function translationsRules(): array
    {
        return [];
    }

    /**
     * validate translatable keys
     */
    public function translated(): array
    {
        $validator = Validator::make($this->all(), $this->translationsRules());

        // Throw an exception if validation fails
        $validator->validate();

        return $validator->validated();
    }
}