"use client";

import { JSX, useState } from 'react';
import Image from 'next/image';
import { TiHome } from "react-icons/ti";
import { RiSettings5Fill } from "react-icons/ri";
import Link from 'next/link';

const Sidebar: React.FC<any> = ({isOpen, toggleSidebar, sidebarRef, currentPage}) => {
  
  const [active, setActive] = useState(currentPage);

  const activeTab = (menu: { icon?: JSX.Element; name: string; route: string; id: number; }) => {
    setActive(menu.route);
  }

  const handleClick = (menu: { icon?: JSX.Element; name: string; route: string; id: number; }) => {
    activeTab(menu)
  }

  const menus = [{
    icon: <TiHome/>,
    name: 'Dashboard',
    route: "/",
    id:1
  },{
    icon: <RiSettings5Fill />,
    name: 'Settings',
    route: "/settings",
    id:2
  }] 

  // const dispatch = useAppDispatch();

  // const handleMenuClick = (menu: { icon?: JSX.Element; name: string; route?: string; id: number; }) => {
  //   dispatch(details(menu.name));
  //   activeTab(menu.id)
  // }

  return (
    <div className="flex fixed h-full">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`bg-appWhite text-appLightGray w-64 min-h-full transition-transform transform font-medium text-fsh3 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 h-full z-50 lg:translate-x-0 lg:w-64 lg:static lg:h-auto lg:flex lg:flex-col lg:bg-appWhite lg:text-appLightGray`}
      >

        {/* Sidebar Menu Items */}
        <ul>
            <li className="flex gap-x-5 justify-center items-center h-[8vh]">
                <Image src={"/applogo/task.svg"} alt="Logo" width={25} height={25}/>
                <div className="font-bold text-fslogo text-appGray">Soar Task</div> 
                <button className="text-[2rem] lg:hidden" onClick={toggleSidebar}>
                  &times;
                </button>
            </li>
            { menus.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.route}>
                  <div className={`py-[0.75rem] flex gap-x-5 justify-left items-center cursor-pointer hover:text-appBlack ${active === menu.route && "text-appBlack"}`} onClick={() => handleClick(menu)}>
                    <span className={`h-[3rem] w-[0.3rem] rounded-tr-[0.375rem] rounded-br-[0.375rem] hover:bg-appBlack ${active === menu.route && "bg-appBlack"}`}></span>
                    <div className={`${active === menu.route ? "text-appBlack" : "text-appLightGray"}`}>{menu.icon}</div>
                    <div className={`${active === menu.route ? "text-appBlack" : "text-appLightGray"}`}>{menu.name}</div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
