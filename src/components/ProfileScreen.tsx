import { Home, Calendar, User, Mail, Edit, LogOut, Settings, Bell, HelpCircle, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const menuItems = [
    { icon: Settings, label: 'Pengaturan', action: () => {} },
    { icon: Bell, label: 'Notifikasi', action: () => {} },
    { icon: HelpCircle, label: 'Bantuan & Dukungan', action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5DADE2] to-[#85C1E9] px-6 pt-12 pb-16 rounded-b-3xl shadow-lg">
        <h1 className="text-white mb-6">Profil Saya</h1>
        
        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-4 border-white/50">
              <AvatarFallback className="bg-white text-[#5DADE2] text-2xl">
                AR
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-white mb-1">Ahmad Ridwan</h2>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <Mail className="w-4 h-4" />
                <span>ahmad.ridwan@student.ac.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-8 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl text-[#5DADE2] mb-1">12</div>
              <p className="text-gray-500 text-sm">Total Tugas</p>
            </div>
            <Separator orientation="vertical" className="h-12 mx-auto" />
            <div className="text-center">
              <div className="text-2xl text-green-500 mb-1">8</div>
              <p className="text-gray-500 text-sm">Selesai</p>
            </div>
            <Separator orientation="vertical" className="h-12 mx-auto" />
            <div className="text-center">
              <div className="text-2xl text-orange-500 mb-1">4</div>
              <p className="text-gray-500 text-sm">Pending</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button 
                onClick={item.action}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5DADE2]/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#5DADE2]" />
                  </div>
                  <span className="text-gray-800">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              {index < menuItems.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-24 space-y-3">
        <Button 
          variant="outline"
          className="w-full h-12 border-[#5DADE2] text-[#5DADE2] hover:bg-[#5DADE2]/10 rounded-xl"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit Profil
        </Button>
        
        <Button 
          onClick={() => onNavigate('login')}
          variant="outline"
          className="w-full h-12 border-red-500 text-red-500 hover:bg-red-50 rounded-xl"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Keluar
        </Button>
      </div>

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
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xs">Jadwal</span>
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-[#5DADE2]"
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
