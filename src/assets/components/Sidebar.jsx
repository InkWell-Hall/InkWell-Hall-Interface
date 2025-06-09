import React from "react";

const Sidebar = () => (
  <aside className="w-64 bg-black text-white h-screen flex flex-col">
    <div className="p-6 font-bold text-2xl border-b border-white">
      InkWell Hall
    </div>
    <nav className="flex-1 p-4">
      <ul>
        <li className="mb-4"><a href="#" className="hover:underline">Dashboard</a></li>
        <li className="mb-4"><a href="#" className="hover:underline">Collections</a></li>
        <li className="mb-4"><a href="#" className="hover:underline">Books</a></li>
        <li className="mb-4"><a href="#" className="hover:underline">Settings</a></li>
      </ul>
    </nav>
    <div className="p-4 border-t border-white text-sm">
      &copy; 2025 InkWell Hall
    </div>
  </aside>
);

export default Sidebar;