"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { usePathname } from "next/navigation";

const menus: { [key: string]: string } = {
  "/": "Dashboard",
  "/dashboard": "Dashboard",
  "/settings": "Settings",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [hydrated, setHydrated] = useState(false);

  const pathname: string = usePathname();

  const [title, setTitle] = useState<string>(menus[pathname]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current?.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (menu: {
    icon?: JSX.Element;
    name: string;
    route: string;
    id: number;
  }) => {
    setTitle(menu.name);
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className="flex h-screen gap-x-1">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebarRef={sidebarRef}
        handleMenuClick={handleMenuClick}
        currentPage={pathname}
      />
      <div className={`flex flex-col w-full lg:ml-64`}>
        <Header title={title} toggleSidebar={toggleSidebar} />
        <div className={`container py-[2rem] w-full lg:ml-64"}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
