<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReportRequest;
use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reports = Report::with('user')
            ->when(auth()->user()->isUser(), function ($query) {
                return $query->where('user_id', auth()->id());
            })
            ->latest()
            ->paginate(10)
            ->through(function ($report) {
                return [
                    'id' => $report->id,
                    'full_name' => $report->full_name,
                    'location' => $report->village . ', ' . $report->district . ', ' . $report->regency,
                    'category_display' => $report->category_display,
                    'description' => substr($report->description, 0, 100) . (strlen($report->description) > 100 ? '...' : ''),
                    'status_display' => $report->status_display,
                    'created_at' => $report->created_at->format('d M Y H:i'),
                ];
            });

        return Inertia::render('reports/index', [
            'reports' => $reports,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('reports/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReportRequest $request)
    {
        $report = Report::create([
            'user_id' => auth()->id(),
            'full_name' => $request->full_name,
            'province' => $request->province,
            'regency' => $request->regency,
            'district' => $request->district,
            'village' => $request->village,
            'category' => $request->category,
            'description' => $request->description,
            'media_files' => $request->media_files,
        ]);

        // TODO: Implement WhatsApp sending functionality
        // This would typically use a service like Twilio or WhatsApp Business API

        return redirect()->route('reports.show', $report)
            ->with('success', 'Laporan Anda berhasil dikirim dan akan segera diteruskan ke pihak berwenang.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        // Users can only see their own reports, admins can see all
        if (auth()->user()->isUser() && $report->user_id !== auth()->id()) {
            abort(403);
        }

        $report->load(['user', 'responses']);

        return Inertia::render('reports/show', [
            'report' => [
                'id' => $report->id,
                'full_name' => $report->full_name,
                'location' => $report->province . ', ' . $report->regency . ', ' . $report->district . ', ' . $report->village,
                'category_display' => $report->category_display,
                'description' => $report->description,
                'media_files' => $report->media_files,
                'status_display' => $report->status_display,
                'created_at' => $report->created_at->format('d M Y H:i'),
                'responses' => $report->responses->map(function ($response) {
                    return [
                        'id' => $response->id,
                        'title' => $response->title,
                        'content' => $response->content,
                        'agency_name' => $response->agency_name,
                        'published_at' => $response->published_at?->format('d M Y H:i'),
                    ];
                }),
            ],
        ]);
    }
}