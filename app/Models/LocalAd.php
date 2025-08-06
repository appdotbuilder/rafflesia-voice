<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\LocalAd
 *
 * @property int $id
 * @property string $business_name
 * @property string $description
 * @property string $image_path
 * @property string $whatsapp_number
 * @property string $owner_name
 * @property bool $is_active
 * @property int $display_order
 * @property \Illuminate\Support\Carbon|null $expires_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd query()
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereBusinessName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereDisplayOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereExpiresAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereImagePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereOwnerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LocalAd whereWhatsappNumber($value)

 * 
 * @mixin \Eloquent
 */
class LocalAd extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'business_name',
        'description',
        'image_path',
        'whatsapp_number',
        'owner_name',
        'is_active',
        'display_order',
        'expires_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'display_order' => 'integer',
        'expires_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active ads.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true)
                    ->where(function ($q) {
                        $q->whereNull('expires_at')
                          ->orWhere('expires_at', '>', now());
                    });
    }

    /**
     * Scope a query to order by display order.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('display_order', 'asc');
    }
}