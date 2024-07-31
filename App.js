import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './components/Sidebar';
import NavbarPhone from './components/Navbar';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 561, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 560 });

  return (
    <div className='App'>
      {isDesktop && <Sidebar />}
      {isTablet && !isMobile && <Sidebar />}
      {isMobile && <NavbarPhone />}
    </div>
  );
};

export default App;