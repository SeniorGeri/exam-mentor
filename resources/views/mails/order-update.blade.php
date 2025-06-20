<x-mails-layout>
    <div style="text-align: center;">
        <h1>@lang('mails.order_update')</h1>
        <p>@lang('mails.order_update_message')</p>
    </div>
    <div style="text-align: start; margin: 20px 0;">
        <p style="margin: 2px 0;"><b>@lang('mails.course')</b>: {{ $activeCourse->courseInstructor->course->title }}</p>
        <p style="margin: 2px 0;"><b>@lang('mails.instructor')</b>: {{ $activeCourse->instructor->name }}</p>
        <p style="margin: 2px 0;"><b>@lang('mails.value')</b>: {{ $activeCourse->value }}</p>
        <p style="margin: 2px 0;"><b>@lang('mails.status')</b>: {{ $activeCourse->status->status }}</p>
        <p style="margin: 2px 0;"><b>@lang('mails.description')</b>: {{ $activeCourse->description }}</p>
    </div>
</x-mails-layout>