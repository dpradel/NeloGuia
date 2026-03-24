import { Outlet, useLocation } from 'react-router';
import { Sidebar } from './Sidebar';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { SidebarProvider } from '../context/SidebarContext';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on navigation
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-[#1a1a1a] text-white font-sans selection:bg-[#5AB0FA]/30 selection:text-white">
        {/* Top Navbar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <div className="flex relative">

          <main className="flex-1 relative min-w-0 transition-all duration-300 scroll-smooth">
            {/* Mobile Header (Hidden on Top Nav Desktop) */}
            <header className="lg:hidden flex items-center p-4 border-b border-white/5 bg-[#212121]/80 backdrop-blur-xl sticky top-0 z-30">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="text-white/70 hover:text-white p-2 -ml-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <Menu size={24} />
              </button>
              <span className="ml-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5AB0FA] to-white">
                NeloGuia
              </span>
            </header>
            
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}


