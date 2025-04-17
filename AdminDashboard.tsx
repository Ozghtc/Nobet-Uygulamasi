import React from "react";
import { Button } from "@/components/ui/button";
import {
  HospitalIcon,
  UsersIcon,
  CalendarPlusIcon,
  CalendarIcon,
  Settings2Icon,
  ClipboardListIcon,
  FileTextIcon,
  BarChart3Icon,
  AlertCircleIcon,
  EyeIcon
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-white p-10 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Hoş Geldiniz, Yönetici</h1>
      <p className="text-gray-600 mb-8">Bu sayfa admin kullanıcılar içindir. Buradan yönetim işlemlerinize başlayabilirsiniz.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <Button className="flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-6 py-4 rounded-xl shadow">
          <HospitalIcon className="w-5 h-5" /> Serik Devlet Hastanesi
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-4 rounded-xl shadow">
          <UsersIcon className="w-5 h-5" /> Personel Ekle
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-emerald-500 text-white hover:bg-emerald-600 px-6 py-4 rounded-xl shadow">
          <ClipboardListIcon className="w-5 h-5" /> Personelleri Listele
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-4 rounded-xl shadow">
          <Settings2Icon className="w-5 h-5" /> Alan Yönetimi
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-purple-600 text-white hover:bg-purple-700 px-6 py-4 rounded-xl shadow">
          <CalendarIcon className="w-5 h-5" /> İzin ve Tercihler
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-orange-600 text-white hover:bg-orange-700 px-6 py-4 rounded-xl shadow">
          <CalendarPlusIcon className="w-5 h-5" /> Nöbet Oluştur
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-600 px-6 py-4 rounded-xl shadow">
          <EyeIcon className="w-5 h-5" /> Önceki Listeleri Görüntüle
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-orange-400 text-white hover:bg-orange-500 px-6 py-4 rounded-xl shadow">
          <ClipboardListIcon className="w-5 h-5" /> Mevcut Listeyi Düzenle
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-gray-700 text-white hover:bg-gray-800 px-6 py-4 rounded-xl shadow">
          <FileTextIcon className="w-5 h-5" /> Aylık Nöbet Raporu
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-gray-600 text-white hover:bg-gray-700 px-6 py-4 rounded-xl shadow">
          <BarChart3Icon className="w-5 h-5" /> Grup Bazlı Dağılım
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-gray-500 text-white hover:bg-gray-600 px-6 py-4 rounded-xl shadow">
          <ClipboardListIcon className="w-5 h-5" /> Şift Tipi Raporlama
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-gray-400 text-white hover:bg-gray-500 px-6 py-4 rounded-xl shadow">
          <FileTextIcon className="w-5 h-5" /> Raporları İndir
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 px-6 py-4 rounded-xl shadow">
          <AlertCircleIcon className="w-5 h-5" /> Eksik Nöbet Uyarısı
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 px-6 py-4 rounded-xl shadow">
          <BarChart3Icon className="w-5 h-5" /> Aylık Plan Doluluk Oranı
        </Button>
      </div>
    </main>
  );
}