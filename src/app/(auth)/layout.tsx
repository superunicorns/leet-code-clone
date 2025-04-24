import Navbar from '@/components/Navbar/Navbar';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout