<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\GovernmentResponse;
use App\Models\LocalAd;
use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the application home page.
     */
    public function index()
    {
        $recentReports = Report::with('user')
            ->latest()
            ->limit(5)
            ->get()
            ->map(function ($report) {
                return [
                    'id' => $report->id,
                    'category_display' => $report->category_display,
                    'description' => substr($report->description, 0, 100) . (strlen($report->description) > 100 ? '...' : ''),
                    'location' => $report->village . ', ' . $report->district,
                    'status_display' => $report->status_display,
                    'created_at' => $report->created_at->diffForHumans(),
                ];
            });

        $governmentResponses = GovernmentResponse::published()
            ->latest('published_at')
            ->limit(3)
            ->get()
            ->map(function ($response) {
                return [
                    'id' => $response->id,
                    'title' => $response->title,
                    'content' => substr($response->content, 0, 150) . (strlen($response->content) > 150 ? '...' : ''),
                    'agency_name' => $response->agency_name,
                    'published_at' => $response->published_at->diffForHumans(),
                ];
            });

        $localAds = LocalAd::active()
            ->ordered()
            ->limit(4)
            ->get()
            ->map(function ($ad) {
                return [
                    'id' => $ad->id,
                    'business_name' => $ad->business_name,
                    'description' => $ad->description,
                    'image_path' => $ad->image_path,
                    'whatsapp_number' => $ad->whatsapp_number,
                ];
            });

        return Inertia::render('welcome', [
            'recent_reports' => $recentReports,
            'government_responses' => $governmentResponses,
            'local_ads' => $localAds,
            'user' => auth()->user() ? [
                'id' => auth()->user()->id,
                'name' => auth()->user()->name,
                'role' => auth()->user()->role,
            ] : null,
        ]);
    }
}