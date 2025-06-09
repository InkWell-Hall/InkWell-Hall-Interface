import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Users, AlertCircle, BookOpen } from "lucide-react";

const Dashboard = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col bg-gray-50">
      <Navbar />
      <main className="p-8 space-y-8">
        {/* Welcome Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to Inkwell-Hall Dashboard
          </h2>
          <p className="text-gray-600">
            This is your central hub for managing the library system.
          </p>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center bg-indigo-50 rounded-lg p-6 shadow space-x-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Users className="text-indigo-700" size={32} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Total User Base</div>
              <div className="text-2xl font-bold text-indigo-700">150</div>
            </div>
          </div>
          <div className="flex items-center bg-red-50 rounded-lg p-6 shadow space-x-4">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertCircle className="text-red-600" size={32} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Overdue Borrowers</div>
              <div className="text-2xl font-bold text-red-600">10</div>
            </div>
          </div>
          <div className="flex items-center bg-green-50 rounded-lg p-6 shadow space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <BookOpen className="text-green-700" size={32} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Total Book Count</div>
              <div className="text-2xl font-bold text-green-700">1500</div>
            </div>
          </div>
        </div>
        {/* Library Info */}
        <div className="bg-white rounded-lg shadow p-4 border border-indigo-100">
          <div className="font-semibold text-indigo-700">Inkwell-Hall Library</div>
          <div className="text-sm text-gray-500">Branch ID: 1</div>
          <div className="text-sm text-gray-500">
            Admin: Nisal Gunasekara (ID: 1)
          </div>
          <div className="text-sm text-green-600 font-bold">Active</div>
        </div>
      </main>
    </div>
  </div>
);

export default Dashboard;