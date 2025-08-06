import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

interface WelcomeProps {
    recent_reports: Array<{
        id: number;
        category_display: string;
        description: string;
        location: string;
        status_display: string;
        created_at: string;
    }>;
    government_responses: Array<{
        id: number;
        title: string;
        content: string;
        agency_name: string;
        published_at: string;
    }>;
    local_ads: Array<{
        id: number;
        business_name: string;
        description: string;
        image_path: string;
        whatsapp_number: string;
    }>;
    user: {
        id: number;
        name: string;
        role: string;
    } | null;
    [key: string]: unknown;
}

export default function Welcome({ recent_reports, user }: WelcomeProps) {
    const { auth } = usePage<SharedData>().props;

    const openWhatsApp = (number: string, message?: string) => {
        const baseUrl = 'https://wa.me/';
        const cleanNumber = number.replace(/\D/g, '');
        const formattedNumber = cleanNumber.startsWith('62') ? cleanNumber : '62' + cleanNumber.substring(1);
        const encodedMessage = message ? encodeURIComponent(message) : '';
        const url = `${baseUrl}${formattedNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <Head title="Rafflesia Voice - Suaramu Didengar">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <meta name="theme-color" content="#DC2626" />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-red-100">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">🌺</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Rafflesia Voice</h1>
                                    <p className="text-xs text-gray-500">Bengkulu</p>
                                </div>
                            </div>
                            <nav className="flex items-center space-x-2">
                                {auth.user ? (
                                    <div className="flex items-center space-x-3">
                                        <span className="text-sm text-gray-700">Halo, {user?.name}</span>
                                        <Link
                                            href={route('dashboard')}
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                                        >
                                            Dashboard
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <Link
                                            href={route('login')}
                                            className="text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                                        >
                                            Daftar
                                        </Link>
                                    </div>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            🌺 Suaramu Didengar di <br />
                            <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                                Rafflesia Voice
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Jembatan aspirasi, laporan, diskusi, dan komunikasi dua arah antara rakyat dan pemerintah Bengkulu. 
                            Mari bersama membangun Bengkulu yang lebih baik! 🤝
                        </p>
                        
                        {/* Quick Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <button
                                onClick={() => openWhatsApp('081310766517', 'Halo Admin Rafflesia Voice, saya ingin tahu lebih lanjut tentang aplikasi ini.')}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                                📱 WhatsApp Langsung
                            </button>
                            {!auth.user && (
                                <Link
                                    href={route('register')}
                                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                                >
                                    🚀 Mulai Berpartisipasi
                                </Link>
                            )}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-12 px-4 bg-white">
                    <div className="container mx-auto">
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            🎯 Fitur Utama Aplikasi
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Send Report */}
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">📝</div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Kirim Suara/Laporan</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Laporkan masalah infrastruktur, pendidikan, kesehatan, dan layanan publik dengan mudah
                                </p>
                                {auth.user && (
                                    <Link
                                        href={route('reports.create')}
                                        className="text-red-600 font-medium text-sm hover:text-red-700"
                                    >
                                        Buat Laporan →
                                    </Link>
                                )}
                            </div>

                            {/* Forum */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">💬</div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Forum Rakyat</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Area diskusi terbuka antar warga, integrasi dengan Telegram dan Facebook
                                </p>
                                <Link
                                    href={route('forum')}
                                    className="text-blue-600 font-medium text-sm hover:text-blue-700"
                                >
                                    Lihat Forum →
                                </Link>
                            </div>

                            {/* Government Response */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🏛️</div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Tanggapan Pemerintah</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Klarifikasi dan respon resmi dari instansi pemerintah terkait
                                </p>
                                <Link
                                    href={route('government-responses')}
                                    className="text-green-600 font-medium text-sm hover:text-green-700"
                                >
                                    Lihat Tanggapan →
                                </Link>
                            </div>

                            {/* Local UMKM */}
                            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🏪</div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">UMKM Bengkulu</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Dukung usaha lokal Bengkulu dengan iklan khusus UMKM
                                </p>
                                <span className="text-yellow-600 font-medium text-sm">
                                    Segera Hadir →
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Reports (if any) */}
                {recent_reports && recent_reports.length > 0 && (
                    <section className="py-12 px-4">
                        <div className="container mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">📊 Laporan Terbaru</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {recent_reports.map((report) => (
                                    <div key={report.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {report.category_display}
                                            </span>
                                            <span className="text-xs text-gray-500">{report.created_at}</span>
                                        </div>
                                        <p className="text-gray-700 text-sm mb-3">{report.description}</p>
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span>📍 {report.location}</span>
                                            <span className="bg-gray-100 px-2 py-1 rounded">{report.status_display}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact & About */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* About */}
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">🌺 Tentang Rafflesia Voice</h4>
                                <p className="text-gray-600 mb-4">
                                    Dikembangkan oleh <strong>PT Sahabat Kajut Group</strong>, Rafflesia Voice adalah platform 
                                    partisipasi publik yang menghubungkan rakyat Bengkulu dengan pemerintah.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    <strong>Misi:</strong> Menciptakan komunikasi dua arah yang efektif untuk membangun Bengkulu yang lebih baik.
                                </p>
                                <Link
                                    href={route('about')}
                                    className="text-red-600 font-medium hover:text-red-700"
                                >
                                    Selengkapnya →
                                </Link>
                            </div>

                            {/* Contact */}
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">📞 Hubungi Kami</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <span className="text-green-600">📱</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">WhatsApp Admin</p>
                                            <button
                                                onClick={() => openWhatsApp('081310766517')}
                                                className="text-green-600 hover:text-green-700"
                                            >
                                                081310766517
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                            <span className="text-red-600">✉️</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Email</p>
                                            <a 
                                                href="mailto:riokajut01@gmail.com"
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                riokajut01@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12 px-4">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">🌺</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Rafflesia Voice</h5>
                                        <p className="text-xs text-gray-400">Bengkulu</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Platform partisipasi publik untuk masyarakat Bengkulu
                                </p>
                            </div>
                            
                            <div>
                                <h6 className="font-medium mb-3">Menu</h6>
                                <div className="space-y-2 text-sm">
                                    <Link href={route('about')} className="block text-gray-300 hover:text-white">Tentang Aplikasi</Link>
                                    <Link href={route('terms')} className="block text-gray-300 hover:text-white">Syarat & Ketentuan</Link>
                                    <Link href={route('forum')} className="block text-gray-300 hover:text-white">Forum Rakyat</Link>
                                </div>
                            </div>
                            
                            <div>
                                <h6 className="font-medium mb-3">Kontak</h6>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <p>📱 081310766517</p>
                                    <p>✉️ riokajut01@gmail.com</p>
                                    <p>🏢 PT Sahabat Kajut Group</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                            <p>© 2024 Rafflesia Voice - PT Sahabat Kajut Group. Dibuat dengan ❤️ untuk Bengkulu.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}