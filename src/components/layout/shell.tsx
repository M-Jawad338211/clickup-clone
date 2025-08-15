"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import AuthButtons from "./AuthButtons";
export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { data } = useSession();
  console.log("Session Data:", data);

  return (
    <div>
      <header className="h-12 bg-blue-950 flex items-center px-4 shadow-md">
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 mt-2 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-10 py-1.5  rounded-md bg-blue-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>
        <AuthButtons />
      </header>
      <div className="h-[calc(100vh-40px)] flex">
        <Sidebar
          expanded={sidebarOpen}
          toggleSidebar={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        />
        <div id="workspace-layout" className="bg-gray-50 h-full grow">
          {children}
        </div>
      </div>
    </div>
  );
}
