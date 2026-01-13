'use client';

import { Search, Bell, User, HelpCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 md:left-13 h-14 bg-white border-b flex items-center justify-between px-6 z-40">
      
      {/* Left - Search */}
      <div className="hidden md:flex items-center gap-3 w-[420px]">
        <div className="flex items-center w-full bg-slate-100 rounded-lg px-3 py-2">
          <Search size={18} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search orders, shipments..."
            className="bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-5 ml-auto">
        <button className="hover:bg-slate-100 p-2 rounded-full">
          <HelpCircle size={20} />
        </button>

        <button className="hover:bg-slate-100 p-2 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            A
          </div>
          <span className="hidden md:block text-sm font-medium">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}
