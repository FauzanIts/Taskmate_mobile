import { Mail, Lock, User, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface RegisterScreenProps {
  onNavigate: (screen: string) => void;
}

export default function RegisterScreen({ onNavigate }: RegisterScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5DADE2] to-[#85C1E9] flex items-center justify-center p-6">
      <div className="w-full max-w-[390px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#5DADE2] px-8 pt-12 pb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-white mb-1">Daftar Akun Baru</h1>
          <p className="text-white/90 text-sm">Mulai kelola jadwalmu dengan mudah</p>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-gray-700">Nama Lengkap</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  id="fullname"
                  type="text" 
                  placeholder="Ahmad Ridwan"
                  className="pl-11 h-12 border-gray-200 focus:border-[#5DADE2] rounded-xl"
                />
              </div>
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-gray-700">Konfirmasi Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  id="confirm-password"
                  type="password" 
                  placeholder="••••••••"
                  className="pl-11 h-12 border-gray-200 focus:border-[#5DADE2] rounded-xl"
                />
              </div>
            </div>

            <Button 
              onClick={() => onNavigate('dashboard')}
              className="w-full h-12 bg-[#5DADE2] hover:bg-[#4A9FD3] text-white rounded-xl shadow-lg transition-all mt-6"
            >
              Daftar Sekarang
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Sudah punya akun?{' '}
              <button 
                onClick={() => onNavigate('login')}
                className="text-[#5DADE2] hover:underline"
              >
                Masuk
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
