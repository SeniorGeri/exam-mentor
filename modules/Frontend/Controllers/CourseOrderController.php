<?php

declare(strict_types=1);

namespace Modules\Frontend\Controllers;

use App\Mail\NewOrderMail;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Frontend\Requests\CourseOrderRequest;
use Modules\Notification\Models\Notification;
use Modules\Notification\Enums\NotificationTypeEnum;
use Modules\Operational\Models\ActiveCourse;
use Modules\Operational\Models\CourseInstructor;

final class CourseOrderController
{



    /**
     * Store contact form data
     *
     * @return RedirectResponse
     */
    public function store(CourseOrderRequest $request): RedirectResponse
    {

        DB::beginTransaction();
        
        $student_id = $request->student_id;
        if(!$student_id) {

            $student = User::updateOrCreate([
                'email' => $request->email,
            ], [
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => '12345678',
                'active' => true,
            ]);

            $student_id = $student->id;

        }
        $activeCourse = ActiveCourse::create([...$request->validated(), 'student_id' => $student_id]);

        Notification::create([
            'title' => __('notification.new_order'),
            'description' => __('notification.new_order_message'),
            'notification_type_id' => NotificationTypeEnum::ORDER->value,
            'receiver_id' => User::first()->id,
            'sender_id' => $request->student_id,
        ]);
            
        Mail::to($request->email)->queue(new NewOrderMail($activeCourse));
        Mail::to('ghoxha472@gmail.com')->queue(new NewOrderMail($activeCourse));

        DB::commit();
      
        return redirect()->route('frontend.course', $request->course_instructor_id);

    }
    

       /**
     * Store contact form data
     *
     * @return Response
     */
    public function success(): Response
    {

       
        return Inertia::render('Frontend::success');

    }
    

}
