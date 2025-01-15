"use client"

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const page = {
    1: 'Dashboard',
    2: 'Setting'
  }
  

const MainLayout = ({ children }: { children: React.ReactNode }) => {

    const [activeTab, setActiveTab] = useState<number>(1);
        const [title, setTitle] = useState<string>(page[activeTab])
        const [isSidebarOpen, setSidebarOpen] = useState(false);
        const sidebarRef = useRef(null);
      
      
        // Close sidebar when clicking outside
        useEffect(() => {
          const handleClickOutside = (event: any) => {
            if (sidebarRef.current && !sidebarRef.current?.contains(event.target)) {
              setSidebarOpen(false);
            }
          };
      
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }, []);
      
        const toggleSidebar = () => {
          setSidebarOpen(!isSidebarOpen);
        };
    
        const handleMenuClick = (id:number) => {
          console.log(id)
          setActiveTab(id)
        }
      
        useEffect(() => {
          setTitle(page[activeTab])
        },[activeTab])

  return (
    <div className="flex h-screen gap-x-1">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sidebarRef={sidebarRef} />
          <div className={`flex flex-col w-full lg:ml-64`}>
            <Header title={title} toggleSidebar={toggleSidebar}/>
            <div className={`container py-[2rem] w-full lg:ml-64"}`}>
              {children}
            </div>
          </div>
        </div>
  );
};

export default MainLayout;