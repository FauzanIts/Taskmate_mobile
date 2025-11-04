import { ArrowLeft, Calendar, Clock, FileText, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface AddTaskScreenProps {
  onNavigate: (screen: string) => void;
}

export default function AddTaskScreen({ onNavigate }: AddTaskScreenProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5DADE2] to-[#85C1E9] px-6 pt-12 pb-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white">Tambah Jadwal</h1>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="space-y-5">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-700 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#5DADE2]" />
                Judul Tugas
              </Label>
              <Input 
                id="title"
                type="text" 
                placeholder="Contoh: Tugas Kalkulus Bab 3"
                className="h-12 border-gray-200 focus:border-[#5DADE2] rounded-xl"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-700 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#5DADE2]" />
                Deskripsi
              </Label>
              <Textarea 
                id="description"
                placeholder="Tambahkan catatan atau deskripsi..."
                className="min-h-24 border-gray-200 focus:border-[#5DADE2] rounded-xl resize-none"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#5DADE2]" />
                  Tanggal
                </Label>
                <Input 
                  id="date"
                  type="date" 
                  className="h-12 border-gray-200 focus:border-[#5DADE2] rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-gray-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#5DADE2]" />
                  Waktu
                </Label>
                <Input 
                  id="time"
                  type="time" 
                  className="h-12 border-gray-200 focus:border-[#5DADE2] rounded-xl"
                />
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-gray-700 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#5DADE2]" />
                Kategori
              </Label>
              <Select>
                <SelectTrigger className="h-12 border-gray-200 focus:border-[#5DADE2] rounded-xl">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kuliah">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Kuliah
                    </div>
                  </SelectItem>
                  <SelectItem value="tugas">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      Tugas
                    </div>
                  </SelectItem>
                  <SelectItem value="ujian">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      Ujian
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Save Button */}
            <Button 
              onClick={() => onNavigate('schedule-list')}
              className="w-full h-12 bg-[#5DADE2] hover:bg-[#4A9FD3] text-white rounded-xl shadow-lg mt-6"
            >
              Simpan Jadwal
            </Button>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-4 bg-blue-50 rounded-2xl p-4">
          <p className="text-sm text-gray-600">
            💡 <span className="text-gray-700">Tips:</span> Tambahkan deskripsi detail agar lebih mudah mengingat tugas
          </p>
        </div>
      </div>
    </div>
  );
}
