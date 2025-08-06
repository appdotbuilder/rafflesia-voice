import { Head } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';



export default function About() {
    const openWhatsApp = (number: string, message?: string) => {
        const baseUrl = 'https://wa.me/';
        const cleanNumber = number.replace(/\D/g, '');
        const formattedNumber = cleanNumber.startsWith('62') ? cleanNumber : '62' + cleanNumber.substring(1);
        const encodedMessage = message ? encodeURIComponent(message) : '';
        const url = `${baseUrl}${formattedNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
        window.open(url, '_blank');
    };

    return (
        <AppShell>
            <Head title="Tentang Aplikasi - Rafflesia Voice" />
            
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">🌺</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Tentang Rafflesia Voice</h1>
                            <p className="text-gray-600">Platform Partisipasi Publik Masyarakat Bengkulu</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Mission & Vision */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>🎯</span> Misi & Visi
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-red-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center gap-2">
                                    <span>🚀</span> Misi
                                </h3>
                                <p className="text-gray-700">
                                    Menciptakan platform komunikasi dua arah yang efektif antara masyarakat Bengkulu 
                                    dengan pemerintah untuk mewujudkan partisipasi publik yang optimal dalam pembangunan daerah.
                                </p>
                            </div>
                            
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                                    <span>👁️</span> Visi
                                </h3>
                                <p className="text-gray-700">
                                    Menjadi jembatan aspirasi terpercaya yang menghubungkan suara rakyat dengan kebijakan 
                                    pemerintah untuk mewujudkan Bengkulu yang maju, sejahtera, dan berkelanjutan.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* About Company */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>🏢</span> Tentang Pengembang
                        </h2>
                        
                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-2xl font-bold">PT</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">PT Sahabat Kajut Group</h3>
                                <p className="text-gray-700 mb-4">
                                    Perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk 
                                    meningkatkan kualitas hidup masyarakat dan efisiensi pelayanan publik.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Komitmen Kami:</h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <span>✅</span> Transparansi dalam pelayanan publik
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span>✅</span> Inovasi teknologi untuk kemajuan daerah
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span>✅</span> Pemberdayaan masyarakat melalui partisipasi aktif
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span>✅</span> Membangun ekosistem digital yang inklusif
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Overview */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>⚡</span> Fitur Utama Aplikasi
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span>📝</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Kirim Suara/Laporan</h4>
                                        <p className="text-sm text-gray-600">
                                            Laporkan masalah infrastruktur, pendidikan, kesehatan, dan layanan publik
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span>💬</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Forum Rakyat</h4>
                                        <p className="text-sm text-gray-600">
                                            Area diskusi terbuka dengan integrasi Telegram dan Facebook
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span>🏛️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Tanggapan Pemerintah</h4>
                                        <p className="text-sm text-gray-600">
                                            Respon dan klarifikasi resmi dari instansi pemerintah terkait
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span>🏪</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">UMKM Bengkulu</h4>
                                        <p className="text-sm text-gray-600">
                                            Slot banner iklan khusus untuk mendukung usaha lokal Bengkulu
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span>⭐</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Fitur Premium</h4>
                                        <p className="text-sm text-gray-600">
                                            Upload tanpa batas, prioritas tampil, verifikasi akun, dan notifikasi langsung
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span>📱</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Progressive Web App</h4>
                                        <p className="text-sm text-gray-600">
                                            Dapat disimpan ke home screen seperti aplikasi native
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>📞</span> Hubungi Admin
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-lg">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xl">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                                        <p className="text-green-700 font-medium">081310766517</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    Hubungi kami untuk pertanyaan, saran, atau bantuan teknis
                                </p>
                                <button
                                    onClick={() => openWhatsApp('081310766517', 'Halo Admin Rafflesia Voice, saya ingin bertanya tentang aplikasi ini.')}
                                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Chat WhatsApp
                                </button>
                            </div>
                            
                            <div className="bg-red-50 p-6 rounded-lg">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xl">✉️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <p className="text-red-700 font-medium">riokajut01@gmail.com</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    Kirim email untuk kerjasama, feedback, atau laporan detail
                                </p>
                                <a
                                    href="mailto:riokajut01@gmail.com?subject=Rafflesia Voice - Pertanyaan"
                                    className="block w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-center"
                                >
                                    Kirim Email
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-red-600 to-green-600 p-8 rounded-xl text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">🌟 Bergabunglah dengan Gerakan Partisipasi Publik!</h3>
                        <p className="text-lg mb-6 text-white/90">
                            Mari bersama-sama membangun Bengkulu yang lebih baik melalui aspirasi dan partisipasi aktif Anda
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => openWhatsApp('081310766517', 'Saya tertarik untuk berpartisipasi di Rafflesia Voice!')}
                                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                🚀 Mulai Berpartisipasi
                            </button>
                            <a
                                href="mailto:riokajut01@gmail.com?subject=Kerjasama Rafflesia Voice"
                                className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                            >
                                🤝 Kerjasama
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}