import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import DashboardScreen from './components/DashboardScreen';
import ScheduleListScreen from './components/ScheduleListScreen';
import AddTaskScreen from './components/AddTaskScreen';
import TaskDetailScreen from './components/TaskDetailScreen';
import ProfileScreen from './components/ProfileScreen';

type Screen = 'login' | 'register' | 'dashboard' | 'schedule-list' | 'add-task' | 'task-detail' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Mobile Frame Container */}
      <div className="w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50"></div>
        
        {/* Screen Content */}
        <div className="w-full h-full overflow-y-auto">
          {currentScreen === 'login' && <LoginScreen onNavigate={handleNavigate} />}
          {currentScreen === 'register' && <RegisterScreen onNavigate={handleNavigate} />}
          {currentScreen === 'dashboard' && <DashboardScreen onNavigate={handleNavigate} />}
          {currentScreen === 'schedule-list' && <ScheduleListScreen onNavigate={handleNavigate} />}
          {currentScreen === 'add-task' && <AddTaskScreen onNavigate={handleNavigate} />}
          {currentScreen === 'task-detail' && <TaskDetailScreen onNavigate={handleNavigate} />}
          {currentScreen === 'profile' && <ProfileScreen onNavigate={handleNavigate} />}
        </div>
      </div>

      {/* Screen Navigation Helper (for development) */}
      <div className="fixed bottom-8 left-8 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
        <h3 className="text-sm text-gray-700 mb-3">📱 Navigasi Layar:</h3>
        <div className="grid grid-cols-2 gap-2">
          {(['login', 'register', 'dashboard', 'schedule-list', 'add-task', 'task-detail', 'profile'] as Screen[]).map((screen) => (
            <button
              key={screen}
              onClick={() => setCurrentScreen(screen)}
              className={`px-3 py-2 rounded-lg text-xs transition-colors ${
                currentScreen === screen 
                  ? 'bg-[#5DADE2] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {screen.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
