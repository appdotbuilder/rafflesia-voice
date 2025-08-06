import { Head } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';



export default function GovernmentResponses() {
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
            <Head title="Tanggapan Pemerintah - Rafflesia Voice" />
            
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">🏛️</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Tanggapan Pemerintah</h1>
                            <p className="text-gray-600">Klarifikasi dan respon resmi dari instansi pemerintah</p>
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">📋</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Belum Ada Tanggapan Resmi</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Halaman ini akan menampilkan tanggapan, klarifikasi, dan respon resmi dari berbagai instansi 
                        pemerintah Bengkulu terkait laporan dan aspirasi masyarakat.
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-8 text-left max-w-3xl mx-auto">
                        <h3 className="font-semibold text-blue-900 mb-3">📝 Jenis tanggapan yang akan ditampilkan:</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <p>Klarifikasi resmi instansi terkait</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <p>Update progress penanganan masalah</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <p>Pengumuman kebijakan terbaru</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <p>Dokumentasi hasil tindak lanjut</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <p>File PDF laporan resmi</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <p>Video dokumentasi kegiatan</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <p>Foto before-after penanganan</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <p>Link ke situs resmi pemerintah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span>🔄</span> Alur Tanggapan Pemerintah
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-red-600 font-bold text-sm">1</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Laporan Masuk</h3>
                                <p className="text-sm text-gray-600">
                                    Masyarakat mengirim laporan melalui formulir di Rafflesia Voice
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-yellow-600 font-bold text-sm">2</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Koordinasi Admin</h3>
                                <p className="text-sm text-gray-600">
                                    Admin meneruskan laporan ke instansi terkait via WhatsApp (081310766517)
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-blue-600 font-bold text-sm">3</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Review Instansi</h3>
                                <p className="text-sm text-gray-600">
                                    Instansi pemerintah terkait melakukan review dan verifikasi laporan
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-green-600 font-bold text-sm">4</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Tanggapan Resmi</h3>
                                <p className="text-sm text-gray-600">
                                    Admin mengunggah tanggapan resmi dari instansi ke halaman ini
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-purple-600 font-bold text-sm">5</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Transparansi Publik</h3>
                                <p className="text-sm text-gray-600">
                                    Tanggapan dapat dilihat oleh seluruh masyarakat untuk transparansi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expected Response Time */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span>⏰</span> Estimasi Waktu Tanggapan
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-green-50 p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">🚨</span>
                            </div>
                            <h3 className="font-semibold text-green-700 mb-2">Urgent</h3>
                            <p className="text-2xl font-bold text-green-700 mb-2">1-2 Hari</p>
                            <p className="text-xs text-gray-600">Masalah keamanan, bencana, darurat</p>
                        </div>
                        
                        <div className="bg-yellow-50 p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">⚡</span>
                            </div>
                            <h3 className="font-semibold text-yellow-700 mb-2">Prioritas</h3>
                            <p className="text-2xl font-bold text-yellow-700 mb-2">3-7 Hari</p>
                            <p className="text-xs text-gray-600">Infrastruktur, layanan publik</p>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold">📋</span>
                            </div>
                            <h3 className="font-semibold text-blue-700 mb-2">Reguler</h3>
                            <p className="text-2xl font-bold text-blue-700 mb-2">1-2 Minggu</p>
                            <p className="text-xs text-gray-600">Saran, aspirasi umum</p>
                        </div>
                    </div>
                </div>

                {/* Contact for Government Response */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl text-white text-center mt-8">
                    <h3 className="text-2xl font-bold mb-4">🏛️ Instansi Pemerintah?</h3>
                    <p className="text-lg mb-6 text-white/90">
                        Jika Anda adalah perwakilan instansi pemerintah dan ingin memberikan tanggapan resmi, 
                        silakan hubungi admin untuk koordinasi.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            onClick={() => openWhatsApp('081310766517', 'Halo Admin Rafflesia Voice, saya dari instansi pemerintah dan ingin memberikan tanggapan resmi terkait laporan masyarakat.')}
                            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            💬 Koordinasi via WhatsApp
                        </Button>
                        <a
                            href="mailto:riokajut01@gmail.com?subject=Tanggapan Resmi Pemerintah - Rafflesia Voice"
                            className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                        >
                            ✉️ Email Resmi
                        </a>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}