<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\GovernmentResponse
 *
 * @property int $id
 * @property int|null $report_id
 * @property string $title
 * @property string $content
 * @property string $type
 * @property string|null $file_path
 * @property string|null $external_link
 * @property string $agency_name
 * @property bool $is_published
 * @property \Illuminate\Support\Carbon|null $published_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Report|null $report
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse query()
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereAgencyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereExternalLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereFilePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereIsPublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse wherePublishedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereReportId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentResponse whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class GovernmentResponse extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'report_id',
        'title',
        'content',
        'type',
        'file_path',
        'external_link',
        'agency_name',
        'is_published',
        'published_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the report that owns the response.
     */
    public function report(): BelongsTo
    {
        return $this->belongsTo(Report::class);
    }

    /**
     * Scope a query to only include published responses.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true)
                    ->whereNotNull('published_at')
                    ->where('published_at', '<=', now());
    }
}