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
        Schema::create('course_instructor_videos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_instructor_id')->constrained()->cascadeOnDelete();
            $table->string('title')->nullable();
            $table->string('video_url');
            $table->boolean('is_free')->default(false);
            $table->string('content')->nullable();
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_instructor_videos');
    }
};
