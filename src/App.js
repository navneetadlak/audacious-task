import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Sidebar for mobile */}
      <div className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <Sidebar />
      </div>

      {/* Toggle button for mobile */}
      <button className="md:hidden p-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className="material-icons">See Menu</span>
      </button>

      {/* Main Content */}
      <div className="flex-1 p-4">
      </div>

      <div className="flex-1 flex flex-col">
      <Topbar />
      </div>

    </div>
  );
}

export default App;
