import { Head, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';

interface Response {
    id: number;
    title: string;
    content: string;
    agency_name: string;
    published_at: string;
}

interface Report {
    id: number;
    full_name: string;
    location: string;
    category_display: string;
    description: string;
    media_files: string[] | null;
    status_display: string;
    created_at: string;
    responses: Response[];
}

interface Props {
    report: Report;
    [key: string]: unknown;
}

export default function ShowReport({ report }: Props) {
    const openWhatsApp = (number: string, message?: string) => {
        const baseUrl = 'https://wa.me/';
        const cleanNumber = number.replace(/\D/g, '');
        const formattedNumber = cleanNumber.startsWith('62') ? cleanNumber : '62' + cleanNumber.substring(1);
        const encodedMessage = message ? encodeURIComponent(message) : '';
        const url = `${baseUrl}${formattedNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
        window.open(url, '_blank');
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'menunggu review':
                return 'bg-yellow-100 text-yellow-700';
            case 'sedang diproses':
                return 'bg-blue-100 text-blue-700';
            case 'sudah ditanggapi':
                return 'bg-green-100 text-green-700';
            case 'selesai':
                return 'bg-gray-100 text-gray-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <AppShell>
            <Head title={`Laporan #${report.id} - Rafflesia Voice`} />
            
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Link href={route('reports.index')}>
                            <Button variant="outline" className="flex items-center gap-2">
                                <span>←</span> Kembali
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Laporan #{report.id}
                            </h1>
                            <p className="text-gray-600">Detail laporan dan tanggapan</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(report.status_display)}`}>
                            {report.status_display}
                        </span>
                        <Button
                            onClick={() => openWhatsApp('081310766517', `Saya ingin menanyakan status laporan #${report.id} yang saya kirim.`)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                        >
                            💬 Hubungi Admin
                        </Button>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Report Details */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xl">📝</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Detail Laporan</h2>
                                <p className="text-gray-600">Informasi lengkap laporan yang disampaikan</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Nama Pelapor</label>
                                    <p className="text-gray-900 font-medium">{report.full_name}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Lokasi</label>
                                    <p className="text-gray-900">{report.location}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Kategori</label>
                                    <span className="block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium w-fit">
                                        {report.category_display}
                                    </span>
                                </div>
                                
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Tanggal Laporan</label>
                                    <p className="text-gray-900">{report.created_at}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <label className="text-sm font-medium text-gray-500">Deskripsi Laporan</label>
                            <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                                <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                                    {report.description}
                                </p>
                            </div>
                        </div>

                        {report.media_files && report.media_files.length > 0 && (
                            <div className="border-t pt-6 mt-6">
                                <label className="text-sm font-medium text-gray-500 block mb-3">Media Pendukung</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {report.media_files.map((file, index) => (
                                        <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                                            <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                                <span className="text-gray-600">📄</span>
                                            </div>
                                            <p className="text-xs text-gray-600 truncate">{file}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Government Responses */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xl">🏛️</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Tanggapan Pemerintah</h2>
                                <p className="text-gray-600">
                                    {report.responses.length > 0 
                                        ? `${report.responses.length} tanggapan resmi` 
                                        : 'Belum ada tanggapan resmi'
                                    }
                                </p>
                            </div>
                        </div>

                        {report.responses.length > 0 ? (
                            <div className="space-y-6">
                                {report.responses.map((response) => (
                                    <div key={response.id} className="border border-green-200 bg-green-50 rounded-lg p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">🏢</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{response.title}</h3>
                                                    <p className="text-sm text-gray-600">{response.agency_name}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-500">{response.published_at}</span>
                                        </div>
                                        
                                        <div className="prose prose-sm max-w-none">
                                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                                {response.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⏳</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Menunggu Tanggapan</h3>
                                <p className="text-gray-600 mb-4">
                                    Laporan Anda sedang diproses. Admin akan menghubungi instansi terkait 
                                    dan tanggapan resmi akan muncul di sini.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg text-left max-w-md mx-auto">
                                    <h4 className="font-medium text-blue-900 mb-2">📋 Proses selanjutnya:</h4>
                                    <ul className="text-sm text-blue-800 space-y-1">
                                        <li>• Admin meneruskan laporan ke instansi terkait</li>
                                        <li>• Instansi melakukan verifikasi lapangan</li>
                                        <li>• Tanggapan resmi akan dipublikasikan</li>
                                        <li>• Anda akan mendapat notifikasi</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={() => openWhatsApp('081310766517', 
                                    `Halo Admin, saya ingin bertanya tentang status laporan #${report.id}.\n\n` +
                                    `Detail laporan:\n` +
                                    `- Kategori: ${report.category_display}\n` +
                                    `- Lokasi: ${report.location}\n` +
                                    `- Tanggal: ${report.created_at}`
                                )}
                                className="bg-green-600 hover:bg-green-700 text-white"
                            >
                                💬 Tanya Status via WhatsApp
                            </Button>
                            
                            <Link href={route('reports.create')}>
                                <Button variant="outline">
                                    ➕ Buat Laporan Baru
                                </Button>
                            </Link>
                            
                            <Button
                                onClick={() => window.print()}
                                variant="outline"
                            >
                                🖨️ Cetak Laporan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}