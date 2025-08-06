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
        Schema::create('local_ads', function (Blueprint $table) {
            $table->id();
            $table->string('business_name');
            $table->text('description');
            $table->string('image_path');
            $table->string('whatsapp_number');
            $table->string('owner_name');
            $table->boolean('is_active')->default(true);
            $table->integer('display_order')->default(0);
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
            
            $table->index('is_active');
            $table->index('display_order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('local_ads');
    }
};