<style>
    a {
        color: #155d86;
    }
</style>

<style>
    @media screen and (min-width: 812px) and (max-width: 812px), screen and (min-width: 736px) and (max-width: 736px), screen and (min-width: 667px) and (max-width: 667px), screen and (min-width: 568px) and (max-width: 568px), screen and (min-width: 414px) and (max-width: 414px), screen and (min-width: 375px) and (max-width: 375px), screen and (min-width: 320px) and (max-width: 320px) {
        .body {
            min-width: 100vw !important;
            margin: 0 !important;
            padding: 0 !important;
        }
    }
</style>
<table style="max-width: 600px; width: 100%; margin:0 auto; background: #ffffff;">

    <tr>
        <td dir=ltr style="border-bottom: 3px solid #68c198; display: flex; justify-content: center;">
            <img src="{{ asset('images/favicon-no-bg.png') }}" width="220"
                    alt="Commerce">
        </td>
    </tr>

</table>

<div style="text-align: center; color: #68c198;  max-width: 600px; width: 100%; margin:0 auto;">
    {{ $slot }}
</div>

<table style="max-width: 600px; width: 100%; margin:0 auto;">
    <tr>
        <td>
            <div
                style="font-family: Roboto, Segoe UI, Helvetica Neue, Frutiger, Frutiger Linotype, Dejavu Sans, Trebuchet MS, Verdana, Arial, sans-serif;
                color: #68c198; font-size: 14px; font-weight: normal; line-height: 24px; margin: 0 auto; padding: 0; max-width: 600px;">

                <div
                    style="border-top: 3px solid #68c198; background-color: #abe6bf; padding-top: 10px; padding-bottom: 10px; text-align:center; line-height: 21px; border-radius: 5px;">
                    <div>

                        <div style="font-size: 12px; line-height: 18px; font-weight: bold;">

                            @lang('mails.footer')

                        </div>
                            @lang('mails.footer_system')
                    </div>

                </div>
            </div>
        </td>
    </tr>
</table>