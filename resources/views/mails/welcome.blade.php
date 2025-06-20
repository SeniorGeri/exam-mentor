<x-mails-layout>
    <div style="text-align: center;">
        <h1>@lang('mails.welcome')</h1>
        <p>@lang('mails.welcome_message')</p>
    </div>
    <div style="text-align: center; margin: 20px 0;">
        <a href="{{ route('login') }}" role="button" 
            style="background-color: #abe6bf; color: #68c198;
             padding: 10px 20px;
             border-radius: 5px;
             text-decoration: none;
             font-weight: bold;
             border: 2px solid #68c198;
            "
            target="_blank"
            >
            @lang('mails.login')
        </a>
    </div>
</x-mails-layout>