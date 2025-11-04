import { Mail, Lock, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface LoginScreenProps {
  onNavigate: (screen: string) => void;
}

export default function LoginScreen({ onNavigate }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5DADE2] to-[#85C1E9] flex items-center justify-center p-6">
      <div className="w-full max-w-[390px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header with illustration */}
        <div className="bg-[#5DADE2] px-8 pt-12 pb-8 text-center relative">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-white mb-1">TaskMate</h1>
          <p className="text-white/90 text-sm">Pengingat Jadwal & Tugas Mahasiswa</p>
        </div>

        {/* Form */}
        <div className="px-8 py-10">
          <h2 className="text-gray-800 mb-6 text-center">Masuk ke Akun Anda</h2>
          
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  id="email"
                  type="email" 
                  placeholder="mahasiswa@email.com"
                  className="pl-11 h-12 border-gray-200 focus:border-[#5DADE2] rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  id="password"
                  type="password" 
                  placeholder="••••••••"
                  className="pl-11 h-12 border-gray-200 focus:border-[#5DADE2] rounded-xl"
                />
              </div>
            </div>

            <Button 
              onClick={() => onNavigate('dashboard')}
              className="w-full h-12 bg-[#5DADE2] hover:bg-[#4A9FD3] text-white rounded-xl shadow-lg transition-all"
            >
              Masuk
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Belum punya akun?{' '}
              <button 
                onClick={() => onNavigate('register')}
                className="text-[#5DADE2] hover:underline"
              >
                Daftar
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
