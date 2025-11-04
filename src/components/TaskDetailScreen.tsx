import { ArrowLeft, Calendar, Clock, FileText, Tag, Edit, Trash2, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface TaskDetailScreenProps {
  onNavigate: (screen: string) => void;
}

export default function TaskDetailScreen({ onNavigate }: TaskDetailScreenProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5DADE2] to-[#85C1E9] px-6 pt-12 pb-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <button 
            onClick={() => onNavigate('schedule-list')}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white">Detail Jadwal</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-4">
          {/* Title and Category */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-gray-800 mb-2">Tugas Kalkulus</h2>
              <Badge className="bg-orange-500 text-white border-0">
                Tugas
              </Badge>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-orange-500" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            {/* Date */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-[#5DADE2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-[#5DADE2]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Tanggal</p>
                <p className="text-gray-800">Selasa, 4 November 2025</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-[#5DADE2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#5DADE2]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Waktu</p>
                <p className="text-gray-800">10:00 WIB</p>
              </div>
            </div>

            {/* Description */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-[#5DADE2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#5DADE2]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Deskripsi</p>
                <p className="text-gray-800">Mengerjakan soal latihan Bab 3 tentang integral dan turunan. Kumpulkan sebelum jam 10 pagi.</p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-[#5DADE2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-[#5DADE2]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Status</p>
                <Badge className="bg-yellow-100 text-yellow-700 border-0">
                  Belum Selesai
                </Badge>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <Button 
              variant="outline"
              className="h-12 border-[#5DADE2] text-[#5DADE2] hover:bg-[#5DADE2]/10 rounded-xl"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button 
              variant="outline"
              className="h-12 border-red-500 text-red-500 hover:bg-red-50 rounded-xl"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Hapus
            </Button>
          </div>
        </div>

        {/* Mark as Complete Button */}
        <Button 
          className="w-full h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Tandai Selesai
        </Button>
      </div>
    </div>
  );
}
