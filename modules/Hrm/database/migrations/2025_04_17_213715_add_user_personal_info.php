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
        Schema::table('user', function (Blueprint $table) {

            $table->foreignId('country_id')->nullable()->constrained('countries')->after('id');
            $table->foreignId('city_id')->nullable()->constrained('cities')->after('id');
            $table->foreignId('gender_id')->nullable()->constrained('genders')->after('id');
            $table->boolean('active')->default(true)->after('email');
            $table->string('address')->nullable()->after('active');
            $table->text('bio')->nullable()->after('address');
            $table->string('profile_pic')->nullable()->after('bio');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user', function (Blueprint $table) {
            $table->dropColumn('active');
            $table->dropColumn('address');
            $table->dropColumn('country_id');
            $table->dropColumn('city_id');
            $table->dropColumn('gender_id');
            $table->dropColumn('bio');
            $table->dropColumn('profile_pic');
        });
    }
};
