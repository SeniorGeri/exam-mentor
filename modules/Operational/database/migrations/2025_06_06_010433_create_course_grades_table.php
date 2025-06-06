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
        Schema::create('course_grades', function (Blueprint $table) {
            $table->foreignId('course_id')->constrained('courses');
            $table->foreignId('grade_id')->constrained('grades');
            $table->primary(['course_id', 'grade_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_grades');
    }
};
