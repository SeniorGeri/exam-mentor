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
        Schema::create('liquidations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('active_course_id')->constrained('active_courses');
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('winner_id')->constrained('users')->nullable();
            $table->boolean('approved')->default(false);
            $table->integer('value')->default(0);
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
        Schema::dropIfExists('liquidations');
    }
};
