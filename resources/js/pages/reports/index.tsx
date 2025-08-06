import { Head, Link, usePage } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';

interface Report {
    id: number;
    full_name: string;
    location: string;
    category_display: string;
    description: string;
    status_display: string;
    created_at: string;
}

interface Props {
    reports: {
        data: Report[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    [key: string]: unknown;
}

export default function ReportsIndex({ reports }: Props) {
    const { auth } = usePage<{ auth: { user: { role: string } } }>().props;

    return (
        <AppShell>
            <Head title="Daftar Laporan - Rafflesia Voice" />
            
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">📋</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                {auth.user?.role === 'admin' ? 'Semua Laporan' : 'Laporan Saya'}
                            </h1>
                            <p className="text-gray-600">
                                {auth.user?.role === 'admin' 
                                    ? 'Kelola semua laporan dari masyarakat' 
                                    : 'Pantau status laporan yang telah Anda kirim'
                                }
                            </p>
                        </div>
                    </div>
                    
                    <Link href={route('reports.create')}>
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                            <span className="mr-2">➕</span>
                            Buat Laporan Baru
                        </Button>
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600">📊</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">{reports.total}</p>
                                <p className="text-sm text-gray-600">Total Laporan</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <span className="text-yellow-600">⏳</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">-</p>
                                <p className="text-sm text-gray-600">Menunggu Review</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600">✅</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">-</p>
                                <p className="text-sm text-gray-600">Sudah Ditanggapi</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-gray-600">🏁</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">-</p>
                                <p className="text-sm text-gray-600">Selesai</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reports List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    {reports.data.length > 0 ? (
                        <div className="divide-y divide-gray-100">
                            {reports.data.map((report) => (
                                <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                                                    {report.category_display}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    📅 {report.created_at}
                                                </span>
                                            </div>
                                            
                                            <h3 className="font-semibold text-gray-900 mb-2">
                                                👤 {report.full_name}
                                            </h3>
                                            
                                            <p className="text-gray-700 mb-3">
                                                {report.description}
                                            </p>
                                            
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-600 flex items-center gap-1">
                                                    📍 {report.location}
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                        {report.status_display}
                                                    </span>
                                                    <Link 
                                                        href={route('reports.show', report.id)}
                                                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                                                    >
                                                        Detail →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📝</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Laporan</h3>
                            <p className="text-gray-600 mb-6">
                                {auth.user?.role === 'admin' 
                                    ? 'Belum ada laporan yang masuk dari masyarakat.'
                                    : 'Anda belum membuat laporan. Mari mulai berpartisipasi!'
                                }
                            </p>
                            <Link href={route('reports.create')}>
                                <Button className="bg-red-600 hover:bg-red-700 text-white">
                                    <span className="mr-2">➕</span>
                                    Buat Laporan Pertama
                                </Button>
                            </Link>
                        </div>
                    )}
                    
                    {/* Pagination */}
                    {reports.last_page > 1 && (
                        <div className="px-6 py-4 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-600">
                                    Menampilkan {((reports.current_page - 1) * reports.per_page) + 1} - {Math.min(reports.current_page * reports.per_page, reports.total)} dari {reports.total} laporan
                                </p>
                                <div className="flex items-center gap-2">
                                    {reports.links.map((link, index) => (
                                        <div key={index}>
                                            {link.url ? (
                                                <Link
                                                    href={link.url}
                                                    className={`px-3 py-1 rounded text-sm ${
                                                        link.active 
                                                            ? 'bg-red-600 text-white' 
                                                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                                                    }`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ) : (
                                                <span 
                                                    className="px-3 py-1 rounded text-sm bg-gray-100 text-gray-400"
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    );
}