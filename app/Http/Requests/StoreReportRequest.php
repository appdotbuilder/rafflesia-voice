<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreReportRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => 'required|string|max:255',
            'province' => 'required|string|max:255',
            'regency' => 'required|string|max:255',
            'district' => 'required|string|max:255',
            'village' => 'required|string|max:255',
            'category' => 'required|in:infrastructure,education,health,public_services,environment,security,economy,others',
            'description' => 'required|string|min:20',
            'media_files' => 'nullable|array',
            'media_files.*' => 'file|mimes:jpg,jpeg,png,pdf,mp3,mp4,wav|max:10240',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'full_name.required' => 'Nama lengkap wajib diisi.',
            'province.required' => 'Provinsi wajib dipilih.',
            'regency.required' => 'Kabupaten wajib dipilih.',
            'district.required' => 'Kecamatan wajib dipilih.',
            'village.required' => 'Desa wajib dipilih.',
            'category.required' => 'Kategori laporan wajib dipilih.',
            'category.in' => 'Kategori laporan tidak valid.',
            'description.required' => 'Deskripsi laporan wajib diisi.',
            'description.min' => 'Deskripsi laporan minimal 20 karakter.',
            'media_files.*.mimes' => 'Format file tidak didukung. Gunakan JPG, PNG, PDF, MP3, MP4, atau WAV.',
            'media_files.*.max' => 'Ukuran file maksimal 10MB.',
        ];
    }
}