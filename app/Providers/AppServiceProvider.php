<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Validator::extend('no_html_tags', function ($attribute, $value, $parameters, $validator) {
            return ! preg_match('/<(script|iframe|embed|object|applet|meta|link|style|form|input|button|textarea|select|option).*?>/i', $value);
        }, 'The :attribute field contains forbidden HTML tags.');
    }
}
