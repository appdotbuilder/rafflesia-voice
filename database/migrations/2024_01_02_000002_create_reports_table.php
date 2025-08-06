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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('full_name');
            $table->string('province');
            $table->string('regency');
            $table->string('district');
            $table->string('village');
            $table->enum('category', [
                'infrastructure',
                'education', 
                'health',
                'public_services',
                'environment',
                'security',
                'economy',
                'others'
            ]);
            $table->text('description');
            $table->json('media_files')->nullable();
            $table->enum('status', ['pending', 'reviewed', 'responded', 'closed'])->default('pending');
            $table->boolean('is_sent_to_whatsapp')->default(false);
            $table->timestamp('sent_at')->nullable();
            $table->timestamps();
            
            $table->index('category');
            $table->index('status');
            $table->index(['created_at', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};