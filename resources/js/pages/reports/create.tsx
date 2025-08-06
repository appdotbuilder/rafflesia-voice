import { Head, useForm } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectItem, SelectValue } from '@/components/ui/select';
import { useState } from 'react';



export default function CreateReport() {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        province: 'Bengkulu',
        regency: '',
        district: '',
        village: '',
        category: '',
        description: '',
        media_files: [] as File[],
    });

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const categories = [
        { value: 'infrastructure', label: 'Infrastruktur' },
        { value: 'education', label: 'Pendidikan' },
        { value: 'health', label: 'Kesehatan' },
        { value: 'public_services', label: 'Layanan Publik' },
        { value: 'environment', label: 'Lingkungan' },
        { value: 'security', label: 'Keamanan' },
        { value: 'economy', label: 'Ekonomi' },
        { value: 'others', label: 'Lainnya' },
    ];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setSelectedFiles(files);
        setData('media_files', files);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('reports.store'));
    };

    return (
        <AppShell>
            <Head title="Kirim Laporan - Rafflesia Voice" />
            
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">📝</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Kirim Suara/Laporan</h1>
                            <p className="text-gray-600">Sampaikan aspirasi Anda untuk Bengkulu yang lebih baik</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Info */}
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span>👤</span> Informasi Pelapor
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="full_name">Nama Lengkap *</Label>
                                    <Input
                                        id="full_name"
                                        type="text"
                                        value={data.full_name}
                                        onChange={(e) => setData('full_name', e.target.value)}
                                        placeholder="Masukkan nama lengkap Anda"
                                        className="mt-1"
                                        required
                                    />
                                    {errors.full_name && <p className="text-red-600 text-sm mt-1">{errors.full_name}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span>📍</span> Lokasi Kejadian
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="province">Provinsi *</Label>
                                    <Input
                                        id="province"
                                        type="text"
                                        value={data.province}
                                        onChange={(e) => setData('province', e.target.value)}
                                        className="mt-1"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="regency">Kabupaten/Kota *</Label>
                                    <Input
                                        id="regency"
                                        type="text"
                                        value={data.regency}
                                        onChange={(e) => setData('regency', e.target.value)}
                                        placeholder="Contoh: Bengkulu"
                                        className="mt-1"
                                        required
                                    />
                                    {errors.regency && <p className="text-red-600 text-sm mt-1">{errors.regency}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="district">Kecamatan *</Label>
                                    <Input
                                        id="district"
                                        type="text"
                                        value={data.district}
                                        onChange={(e) => setData('district', e.target.value)}
                                        placeholder="Contoh: Gading Cempaka"
                                        className="mt-1"
                                        required
                                    />
                                    {errors.district && <p className="text-red-600 text-sm mt-1">{errors.district}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="village">Desa/Kelurahan *</Label>
                                    <Input
                                        id="village"
                                        type="text"
                                        value={data.village}
                                        onChange={(e) => setData('village', e.target.value)}
                                        placeholder="Contoh: Pematang Gubernur"
                                        className="mt-1"
                                        required
                                    />
                                    {errors.village && <p className="text-red-600 text-sm mt-1">{errors.village}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Report Content */}
                        <div className="bg-red-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span>📋</span> Detail Laporan
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="category">Kategori Laporan *</Label>
                                    <Select 
                                        value={data.category} 
                                        onValueChange={(value) => setData('category', value)}
                                        className="mt-1"
                                        required
                                    >
                                        <SelectValue placeholder="Pilih kategori laporan" />
                                        {categories.map((category) => (
                                            <SelectItem key={category.value} value={category.value}>
                                                {category.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="description">Deskripsi Laporan *</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        placeholder="Jelaskan masalah yang ingin dilaporkan dengan detail (minimal 20 karakter)"
                                        rows={6}
                                        className="mt-1"
                                        required
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Laporan ini akan dikirim ke WhatsApp admin: 081310766517
                                    </p>
                                    {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Media Upload */}
                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span>📎</span> Media Pendukung (Opsional)
                            </h3>
                            <div>
                                <Label htmlFor="media_files">Upload File (Audio, Video, Gambar, PDF)</Label>
                                <input
                                    id="media_files"
                                    type="file"
                                    multiple
                                    accept=".jpg,.jpeg,.png,.pdf,.mp3,.mp4,.wav"
                                    onChange={handleFileChange}
                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Format yang didukung: JPG, PNG, PDF, MP3, MP4, WAV. Maksimal 10MB per file.
                                </p>
                                {selectedFiles.length > 0 && (
                                    <div className="mt-2">
                                        <p className="text-sm font-medium text-gray-700">File terpilih:</p>
                                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                                            {selectedFiles.map((file, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <span>📄</span>
                                                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {errors.media_files && <p className="text-red-600 text-sm mt-1">{errors.media_files}</p>}
                            </div>
                        </div>

                        {/* Terms Agreement */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">⚖️</span>
                                <div className="text-sm text-gray-700">
                                    <p className="font-medium mb-2">Dengan mengirim laporan ini, Anda menyetujui:</p>
                                    <ul className="space-y-1 text-xs">
                                        <li>• Data yang diisi adalah data asli dan dapat dipertanggungjawabkan</li>
                                        <li>• Tidak mengandung hoaks, ujaran kebencian, atau konten negatif lainnya</li>
                                        <li>• Admin berhak menghapus laporan yang tidak sesuai ketentuan</li>
                                        <li>• Laporan akan diteruskan ke instansi terkait melalui WhatsApp admin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4">
                            <Button
                                type="submit"
                                disabled={processing}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                            >
                                {processing ? '⏳ Mengirim...' : '🚀 Kirim Laporan'}
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => window.history.back()}
                                className="px-8 py-3 text-lg"
                            >
                                ← Kembali
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppShell>
    );
}