import { Plus, Calendar, Clock, Home, User, Search, Filter } from 'lucide-react';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ScheduleListScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ScheduleListScreen({ onNavigate }: ScheduleListScreenProps) {
  const allTasks = [
    { id: 1, title: 'Tugas Kalkulus', time: '10:00', date: '4 Nov', category: 'Tugas', color: 'bg-orange-500', status: 'pending' },
    { id: 2, title: 'Kuliah Pemrograman Web', time: '13:00', date: '4 Nov', category: 'Kuliah', color: 'bg-blue-500', status: 'pending' },
    { id: 3, title: 'Presentasi Kelompok', time: '15:30', date: '4 Nov', category: 'Ujian', color: 'bg-red-500', status: 'pending' },
    { id: 4, title: 'Tugas Basis Data', time: '09:00', date: '5 Nov', category: 'Tugas', color: 'bg-orange-500', status: 'pending' },
    { id: 5, title: 'Kuliah Matematika Diskrit', time: '14:00', date: '5 Nov', category: 'Kuliah', color: 'bg-blue-500', status: 'pending' },
    { id: 6, title: 'Quiz Algoritma', time: '16:00', date: '6 Nov', category: 'Ujian', color: 'bg-red-500', status: 'completed' },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5DADE2] to-[#85C1E9] px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <h1 className="text-white mb-4">Semua Jadwal</h1>
        
        {/* Search and Filter */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Cari jadwal..."
              className="pl-11 h-11 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl backdrop-blur-sm"
            />
          </div>
          <button className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="px-6 py-6 pb-24">
        <div className="space-y-3">
          {allTasks.map(task => (
            <div 
              key={task.id}
              onClick={() => onNavigate('task-detail')}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className={`w-1 h-20 ${task.color} rounded-full`}></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-gray-800 mb-1">{task.title}</h3>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{task.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{task.time}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${task.color} text-white border-0`}>
                      {task.category}
                    </Badge>
                  </div>
                  {task.status === 'completed' && (
                    <div className="mt-2">
                      <Badge className="bg-green-100 text-green-700 border-0">
                        Selesai
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <button 
        onClick={() => onNavigate('add-task')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#5DADE2] hover:bg-[#4A9FD3] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 rounded-t-3xl shadow-2xl">
        <div className="flex items-center justify-around max-w-[390px] mx-auto">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button 
            onClick={() => onNavigate('schedule-list')}
            className="flex flex-col items-center gap-1 text-[#5DADE2]"
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
