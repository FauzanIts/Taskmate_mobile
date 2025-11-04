import { Plus, Calendar, Clock, Home, User } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

export default function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const todayTasks = [
    { id: 1, title: 'Tugas Kalkulus', time: '10:00', category: 'Tugas', color: 'bg-orange-500' },
    { id: 2, title: 'Kuliah Pemrograman Web', time: '13:00', category: 'Kuliah', color: 'bg-blue-500' },
    { id: 3, title: 'Presentasi Kelompok', time: '15:30', category: 'Ujian', color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5DADE2] to-[#85C1E9] px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/90 text-sm">Selamat Datang,</p>
            <h1 className="text-white">Ahmad Ridwan</h1>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-white/90 text-sm mb-1">Hari Ini</p>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-white" />
            <p className="text-white">Selasa, 4 November 2025</p>
          </div>
        </div>
      </div>

      {/* Quick Add Button */}
      <div className="px-6 -mt-6 mb-6">
        <Button 
          onClick={() => onNavigate('add-task')}
          className="w-full h-14 bg-white hover:bg-gray-50 text-[#5DADE2] rounded-2xl shadow-lg flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Tambah Jadwal Baru
        </Button>
      </div>

      {/* Today's Schedule */}
      <div className="px-6 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800">Jadwal Hari Ini</h2>
          <button 
            onClick={() => onNavigate('schedule-list')}
            className="text-[#5DADE2] text-sm hover:underline"
          >
            Lihat Semua
          </button>
        </div>

        <div className="space-y-3">
          {todayTasks.map(task => (
            <div 
              key={task.id}
              onClick={() => onNavigate('task-detail')}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className={`w-1 h-16 ${task.color} rounded-full`}></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-gray-800">{task.title}</h3>
                    <Badge className={`${task.color} text-white border-0`}>
                      {task.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{task.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {todayTasks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Tidak ada jadwal hari ini</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 rounded-t-3xl shadow-2xl">
        <div className="flex items-center justify-around max-w-[390px] mx-auto">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex flex-col items-center gap-1 text-[#5DADE2]"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button 
            onClick={() => onNavigate('schedule-list')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xs">Jadwal</span>
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
