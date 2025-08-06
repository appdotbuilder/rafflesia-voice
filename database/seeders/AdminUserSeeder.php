<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'riokajut01@gmail.com'],
            [
                'name' => 'Admin Rafflesia Voice',
                'email' => 'riokajut01@gmail.com',
                'phone' => '081310766517',
                'password' => Hash::make('Reas1193'),
                'role' => 'admin',
                'is_active' => true,
                'email_verified_at' => now(),
            ]
        );
    }
}