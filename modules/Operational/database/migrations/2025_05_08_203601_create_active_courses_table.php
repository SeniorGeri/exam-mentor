<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('active_courses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_price_id')->constrained('course_pricings');
            $table->foreignId('instructor_id')->constrained('users');
            $table->foreignId('student_id')->constrained('users');
            $table->foreignId('status_id')->constrained('active_course_statuses');
            $table->integer('value');
            $table->integer('left');
            $table->integer('liquidation_percentage');
            $table->string('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('active_courses');
    }
};
