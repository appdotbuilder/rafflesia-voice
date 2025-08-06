<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Report
 *
 * @property int $id
 * @property int $user_id
 * @property string $full_name
 * @property string $province
 * @property string $regency
 * @property string $district
 * @property string $village
 * @property string $category
 * @property string $description
 * @property array|null $media_files
 * @property string $status
 * @property bool $is_sent_to_whatsapp
 * @property \Illuminate\Support\Carbon|null $sent_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\GovernmentResponse> $responses
 * @property-read int|null $responses_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Report newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Report newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Report query()
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereDistrict($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereIsSentToWhatsapp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereMediaFiles($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereRegency($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereSentAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Report whereVillage($value)

 * 
 * @mixin \Eloquent
 */
class Report extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'full_name',
        'province',
        'regency',
        'district',
        'village',
        'category',
        'description',
        'media_files',
        'status',
        'is_sent_to_whatsapp',
        'sent_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'media_files' => 'array',
        'is_sent_to_whatsapp' => 'boolean',
        'sent_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user that owns the report.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the government responses for the report.
     */
    public function responses(): HasMany
    {
        return $this->hasMany(GovernmentResponse::class);
    }

    /**
     * Get category display name.
     */
    public function getCategoryDisplayAttribute(): string
    {
        $categories = [
            'infrastructure' => 'Infrastruktur',
            'education' => 'Pendidikan',
            'health' => 'Kesehatan',
            'public_services' => 'Layanan Publik',
            'environment' => 'Lingkungan',
            'security' => 'Keamanan',
            'economy' => 'Ekonomi',
            'others' => 'Lainnya',
        ];

        return $categories[$this->category] ?? $this->category;
    }

    /**
     * Get status display name.
     */
    public function getStatusDisplayAttribute(): string
    {
        $statuses = [
            'pending' => 'Menunggu Review',
            'reviewed' => 'Sedang Diproses',
            'responded' => 'Sudah Ditanggapi',
            'closed' => 'Selesai',
        ];

        return $statuses[$this->status] ?? $this->status;
    }
}