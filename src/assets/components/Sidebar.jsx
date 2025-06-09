import React from 'react';
import { Settings } from 'lucide-react'; // <-- import the icon


const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-4 text-xl font-bold">🏛️ Inkwell-Hall</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-400 cursor-pointer">Collections</li>
          <li className="hover:text-blue-400 cursor-pointer">Books</li>
          <li className="hover:text-blue-400 cursor-pointer">Users</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>
      </nav>
     <button className="p-4 text-white hover:underline text-left">Log Out
    </button>
    </aside>
  );
};

export default Sidebar;