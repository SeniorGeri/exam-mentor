<x-mails-layout>

    <div style="text-align">
        <h1>@lang('mails.liquidation_request')</h1>
        <p>@lang('mails.liquidation_request_message')</p>

    </div>

    <div style="text-align: start; margin: 20px 0;">
        <p style="margin: 2px 0;"><b>@lang('mails.course')</b>: {{ $liquidation->activeCourse->courseInstructor->course->title }}</p>
        <p style="margin: 2px 0;"><b>@lang('mails.student')</b>: {{ $liquidation->activeCourse->student->name }}</p>
        <p style="margin: 2px 0;"><b>@lang('mails.value')</b>: {{ $liquidation->value }}</p>
        <p style="margin: 2px 0;"><b>@lang('mails.description')</b>: {{ $liquidation->description }}</p>
    </div>
</x-mails-layout>