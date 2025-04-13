<?php

declare(strict_types=1);

namespace App\Traits;

use Spatie\Translatable\HasTranslations;

trait HasTranslationsTrait
{
    use HasTranslations;

    public function setMultipleTranslations(array $attributes, string $locale): static
    {
        foreach ($attributes as $key => $value) {
            if (in_array($key, $this->translatable)) {
                $this->setTranslation($key, $locale, $value);
            }
        }

        return $this;
    }
}