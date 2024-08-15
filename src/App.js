import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SidebarDesk from './components/SidebarDesktop';
import SidebarAndro from './components/SidebarAndro';

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 561, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 560 });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {isDesktop && <SidebarDesk isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      
      {isTablet && !isMobile && <SidebarDesk isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

      {isMobile && <SidebarAndro />}
    </div>
  );
};

export default App;