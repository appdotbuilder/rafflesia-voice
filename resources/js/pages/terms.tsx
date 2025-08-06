import { Head } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';



export default function Terms() {
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
            <Head title="Syarat & Ketentuan - Rafflesia Voice" />
            
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">⚖️</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Syarat & Ketentuan</h1>
                            <p className="text-gray-600">Aturan penggunaan Rafflesia Voice</p>
                        </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                        <p className="text-sm text-yellow-800">
                            <strong>Terakhir diperbarui:</strong> 1 Januari 2024 | 
                            <strong> Berlaku efektif:</strong> 1 Januari 2024
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Introduction */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span>📋</span> Pendahuluan
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Selamat datang di <strong>Rafflesia Voice</strong>, platform partisipasi publik untuk masyarakat Bengkulu. 
                            Dengan menggunakan aplikasi ini, Anda setuju untuk mematuhi seluruh syarat dan ketentuan yang berlaku.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Platform ini dikembangkan oleh <strong>PT Sahabat Kajut Group</strong> dengan tujuan menciptakan 
                            komunikasi dua arah yang efektif antara rakyat dan pemerintah Bengkulu.
                        </p>
                    </div>

                    {/* User Registration */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>👤</span> Pendaftaran & Akun Pengguna
                        </h2>
                        
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-blue-900 mb-3">📝 Jenis Akun</h3>
                                <div className="space-y-3 text-sm text-blue-800">
                                    <div className="flex items-start gap-3">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                                        <div>
                                            <p className="font-medium">Pengguna (Rakyat)</p>
                                            <p>Dapat mendaftar dengan email dan password valid</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                                        <div>
                                            <p className="font-medium">Admin</p>
                                            <p>Akun khusus dengan kredensial tetap yang tidak dapat diduplikasi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-3">✅ Kewajiban Pengguna</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Mengisi data registrasi dengan informasi yang benar dan akurat</li>
                                    <li>• Menjaga kerahasiaan password dan informasi akun</li>
                                    <li>• Tidak membuat akun palsu atau duplikasi akun</li>
                                    <li>• Bertanggung jawab atas segala aktivitas yang dilakukan melalui akun</li>
                                    <li>• Memberitahu admin jika terjadi penyalahgunaan akun</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Content Guidelines */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>📝</span> Aturan Konten & Laporan
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                                    <span>✅</span> Konten yang Diperbolehkan
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Laporan masalah infrastruktur yang faktual</li>
                                    <li>• Aspirasi konstruktif untuk perbaikan daerah</li>
                                    <li>• Dokumentasi kondisi nyata (foto/video)</li>
                                    <li>• Saran dan kritik yang membangun</li>
                                    <li>• Diskusi berdasarkan data dan fakta</li>
                                    <li>• Informasi yang bermanfaat untuk masyarakat</li>
                                </ul>
                            </div>
                            
                            <div className="bg-red-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                                    <span>❌</span> Konten yang Dilarang
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Hoaks dan informasi yang tidak benar</li>
                                    <li>• Ujaran kebencian dan diskriminasi SARA</li>
                                    <li>• Konten pornografi atau tidak pantas</li>
                                    <li>• Fitnah dan pencemaran nama baik</li>
                                    <li>• Spam dan konten komersial berlebihan</li>
                                    <li>• Ancaman dan intimidasi</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-yellow-50 p-6 rounded-lg mt-6">
                            <h3 className="font-semibold text-yellow-800 mb-3">⚠️ Konsekuensi Pelanggaran</h3>
                            <div className="space-y-2 text-sm text-yellow-800">
                                <p>• <strong>Peringatan pertama:</strong> Konten akan dihapus dengan notifikasi</p>
                                <p>• <strong>Pelanggaran berulang:</strong> Akun dapat dinonaktifkan sementara</p>
                                <p>• <strong>Pelanggaran serius:</strong> Akun dapat diblokir permanen</p>
                                <p>• <strong>Tindak pidana:</strong> Laporan ke pihak berwenang</p>
                            </div>
                        </div>
                    </div>

                    {/* Admin Rights */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>🛡️</span> Hak & Kewenangan Admin
                        </h2>
                        
                        <div className="bg-indigo-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-4">👨‍💼 Admin berhak untuk:</h3>
                            <div className="space-y-3 text-sm text-indigo-800">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Meninjau, memoderasi, dan menghapus laporan yang tidak valid atau melanggar aturan</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Memblokir atau menonaktifkan akun pengguna yang melanggar ketentuan</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Mengelola konten tanggapan pemerintah dan iklan UMKM</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Mengubah syarat dan ketentuan dengan pemberitahuan kepada pengguna</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Meneruskan laporan ke pihak berwenang melalui WhatsApp (081310766517)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Privacy & Data */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>🔒</span> Privasi & Perlindungan Data
                        </h2>
                        
                        <div className="space-y-6">
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-green-700 mb-3">🛡️ Komitmen Privasi</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Data pribadi pengguna akan dijaga kerahasiaannya</li>
                                    <li>• Informasi kontak hanya digunakan untuk komunikasi resmi</li>
                                    <li>• Laporan dapat dibagikan ke pihak berwenang untuk tindak lanjut</li>
                                    <li>• Tidak ada penjualan data kepada pihak ketiga</li>
                                </ul>
                            </div>
                            
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-blue-700 mb-3">📊 Penggunaan Data</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Laporan akan dikirim ke WhatsApp admin untuk koordinasi</li>
                                    <li>• Data lokasi digunakan untuk memetakan masalah daerah</li>
                                    <li>• Statistik anonim dapat digunakan untuk laporan publik</li>
                                    <li>• Media yang diunggah akan disimpan untuk dokumentasi</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Premium Features */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>⭐</span> Fitur Premium (Opsional)
                        </h2>
                        
                        <div className="bg-purple-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-purple-700 mb-4">🚀 Rencana Fitur Premium:</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-white rounded-full"></span>
                                        </span>
                                        <p>Upload laporan tanpa batas</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-white rounded-full"></span>
                                        </span>
                                        <p>Prioritas tampil di beranda</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-white rounded-full"></span>
                                        </span>
                                        <p>Iklan usaha lebih besar</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-white rounded-full"></span>
                                        </span>
                                        <p>Notifikasi langsung ke pengguna sekitar</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-white rounded-full"></span>
                                        </span>
                                        <p>Sistem verifikasi (centang biru)</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-white rounded-full"></span>
                                        </span>
                                        <p>Support prioritas</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-purple-700 mt-4">
                                <strong>Catatan:</strong> Fitur premium akan diaktifkan di masa mendatang dengan sistem berlangganan yang adil dan terjangkau.
                            </p>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span>⚠️</span> Disclaimer & Batasan Tanggung Jawab
                        </h2>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>
                                        <strong>Rafflesia Voice</strong> adalah platform perantara dan tidak bertanggung jawab 
                                        atas tindak lanjut dari pemerintah terhadap laporan yang disampaikan
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>
                                        Pengguna bertanggung jawab penuh atas keakuratan informasi yang dilaporkan
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>
                                        Platform dapat mengalami gangguan teknis dan tidak menjamin ketersediaan 100%
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>
                                        PT Sahabat Kajut Group tidak bertanggung jawab atas kerugian akibat penggunaan platform
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact for Terms */}
                    <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-8 rounded-xl text-white">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span>📞</span> Pertanyaan tentang Syarat & Ketentuan?
                        </h3>
                        <p className="text-lg mb-6 text-white/90">
                            Jika Anda memiliki pertanyaan atau butuh klarifikasi mengenai syarat dan ketentuan ini, 
                            jangan ragu untuk menghubungi kami.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => openWhatsApp('081310766517', 'Halo Admin, saya ingin bertanya tentang Syarat & Ketentuan Rafflesia Voice.')}
                                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                💬 WhatsApp Admin
                            </button>
                            <a
                                href="mailto:riokajut01@gmail.com?subject=Pertanyaan Syarat & Ketentuan - Rafflesia Voice"
                                className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                            >
                                ✉️ Email
                            </a>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-white/20 text-center text-white/80 text-sm">
                            <p>© 2024 PT Sahabat Kajut Group - Rafflesia Voice</p>
                            <p className="mt-1">Dokumen ini dapat diperbarui sewaktu-waktu dengan pemberitahuan kepada pengguna</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}