import { Head } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';



export default function Forum() {
    const openTelegram = () => {
        window.open('https://t.me/+placeholder', '_blank');
    };

    const openFacebook = () => {
        window.open('https://facebook.com/groups/placeholder', '_blank');
    };

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
            <Head title="Forum Rakyat - Rafflesia Voice" />
            
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">💬</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Forum Rakyat</h1>
                            <p className="text-gray-600">Area diskusi terbuka untuk masyarakat Bengkulu</p>
                        </div>
                    </div>
                </div>

                {/* Coming Soon */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">🚧</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Forum Sedang Dalam Pengembangan</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Kami sedang mempersiapkan platform forum yang akan terintegrasi dengan grup Telegram dan Facebook 
                        untuk memfasilitasi diskusi antar warga Bengkulu.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left max-w-2xl mx-auto">
                        <h3 className="font-semibold text-blue-900 mb-2">✨ Fitur yang akan hadir:</h3>
                        <ul className="space-y-1 text-sm text-blue-800">
                            <li>• Diskusi topik trending Bengkulu</li>
                            <li>• Integrasi dengan grup Telegram dan Facebook</li>
                            <li>• Sistem moderasi untuk menjaga kualitas diskusi</li>
                            <li>• Kategori diskusi berdasarkan wilayah dan topik</li>
                            <li>• Notifikasi real-time untuk diskusi aktif</li>
                        </ul>
                    </div>
                </div>

                {/* Temporary Social Links */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span>🌐</span> Sementara, Bergabunglah di Platform Sosial
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Telegram */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">📱</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Telegram</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Diskusi real-time dengan notifikasi instan
                            </p>
                            <Button
                                onClick={openTelegram}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                disabled
                            >
                                🚀 Segera Hadir
                            </Button>
                        </div>

                        {/* Facebook */}
                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 text-center">
                            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">📘</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Facebook Group</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Grup diskusi dengan jangkauan yang luas
                            </p>
                            <Button
                                onClick={openFacebook}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                                disabled
                            >
                                🚀 Segera Hadir
                            </Button>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">💬</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Admin</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Chat langsung dengan admin untuk pertanyaan
                            </p>
                            <Button
                                onClick={() => openWhatsApp('081310766517', 'Halo Admin, saya ingin bergabung dalam diskusi Forum Rakyat.')}
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                            >
                                💬 Chat Admin
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Guidelines */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span>📋</span> Aturan Forum Rakyat
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                                <span>✅</span> Yang Diperbolehkan
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Diskusi konstruktif tentang isu Bengkulu</li>
                                <li>• Berbagi informasi dan pengalaman</li>
                                <li>• Memberikan saran dan solusi</li>
                                <li>• Bertukar kontak untuk kerjasama positif</li>
                                <li>• Promosi UMKM lokal Bengkulu</li>
                            </ul>
                        </div>
                        
                        <div className="bg-red-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                                <span>❌</span> Yang Dilarang
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Hoaks dan informasi yang tidak benar</li>
                                <li>• Ujaran kebencian dan SARA</li>
                                <li>• Spam dan konten tidak relevan</li>
                                <li>• Promosi produk/jasa non-Bengkulu</li>
                                <li>• Bahasa kasar dan tidak sopan</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact for Forum */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white text-center mt-8">
                    <h3 className="text-2xl font-bold mb-4">💡 Punya Ide untuk Forum?</h3>
                    <p className="text-lg mb-6 text-white/90">
                        Kami terbuka untuk saran dan masukan dari masyarakat Bengkulu tentang fitur forum yang diinginkan
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            onClick={() => openWhatsApp('081310766517', 'Saya punya ide/saran untuk Forum Rakyat di Rafflesia Voice!')}
                            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            💬 Sampaikan Ide
                        </Button>
                        <a
                            href="mailto:riokajut01@gmail.com?subject=Saran Forum Rakyat - Rafflesia Voice"
                            className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                        >
                            ✉️ Kirim Email
                        </a>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}