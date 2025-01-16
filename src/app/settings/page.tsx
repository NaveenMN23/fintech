"use client";

import React, { useState } from "react";
import Card from "@/components/common/Card/Card";
import EditProfile from "./editprofile/page";
import Preferences from "./preferences/page";
import Security from "./security/page";
import ErrorBoundary from "@/components/common/ErrorBoundary/ErrorBoundary";

const navmenus = [
  {
    name: "Edit Profile",
    route: "/settings/editprofile",
    page: <EditProfile />,
    id: 1,
  },
  {
    name: "Preferences",
    route: "/settings/preferences",
    page: <Preferences />,
    id: 2,
  },
  {
    name: "Security",
    route: "/settings/security",
    page: <Security />,
    id: 3,
  },
];

const Settings = () => {
  const [active, setActive] = useState(navmenus[0]);

  const activeTab = (
    menu: React.SetStateAction<{
      name: string;
      route: string;
      page: React.JSX.Element;
      id: number;
    }>,
  ) => {
    setActive(menu);
  };

  return (
    <div>
      <Card>
        <div className="px-6 pt-6">
          <ul className="flex flex-row">
            {navmenus.map((menu) => (
              <li key={menu.id} className="w-[8rem]">
                <div
                  className={`flex flex-col justify-left items-center cursor-pointer hover:text-appBlack ${active.id === menu.id ? "text-appBlack" : "text-appLightGray"}`}
                  onClick={() => activeTab(menu)}
                  aria-label={`Navigate to ${menu.name}`}
                  aria-selected={active.id === menu.id ? "true" : "false"}
                >
                  <div className="pb-1">{menu.name}</div>
                  <span
                    className={`w-full px-[2rem] h-[0.3rem] rounded-tr-[0.375rem] rounded-tl-[0.375rem] hover:bg-appBlack ${active.id === menu.id ? "bg-appBlack" : "text-appLightGray"}`}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
          <div className={`h-px bg-[#F4F5F7] border-0`}></div>
        </div>
        <ErrorBoundary fallback={<div>Unable to fetch user info</div>}>
          {active?.page}
        </ErrorBoundary>
      </Card>
    </div>
  );
};

export default Settings;
