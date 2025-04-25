import Navbar from '@/components/Navbar/Navbar';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[calc(100vh - 5rem)] pointer-events-none select-none">
          {children}
          <img src="/hero.png" alt="Hero section" />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout