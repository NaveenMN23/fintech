"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TiHome } from "react-icons/ti";
import { RiSettings5Fill } from "react-icons/ri";

const Sidebar: React.FC<any> = ({isOpen, toggleSidebar, sidebarRef}) => {
  // const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar on mobile

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  const [activeIdx, setActiveIdx] = useState(1);

//   const router = useRouter();

  const activeTab = (id: number) => {
    setActiveIdx(id);
    // handleMenuClick(id);
    // router.push('/dashboard');
  }

  const menus = [{
    icon: <TiHome/>,
    name: 'Dashboard',
    id:1
  },{
    icon: <RiSettings5Fill />,
    name: 'Settings',
    id:2
  }] 

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
                <Image src={"/task.svg"} alt="Logo" width={25} height={25}/>
                <div className="font-bold text-fslogo text-appGray">Soar Task</div> 
                <button className="text-[2rem] lg:hidden" onClick={toggleSidebar}>
                  &times;
                </button>
            </li>
            { menus.map((menu) => (
              <li key={menu.id}>
                <div className={`py-[0.75rem] flex gap-x-5 justify-left items-center cursor-pointer hover:text-appBlack ${activeIdx === menu.id && "text-appBlack"}`} onClick={() => activeTab(menu.id)}>
                  <span className={`h-[3rem] w-[0.3rem] rounded-tr-[0.375rem] rounded-br-[0.375rem] hover:bg-appBlack ${activeIdx === menu.id && "bg-appBlack"}`}></span>
                  <div>{menu.icon}</div>
                  <div className=''>{menu.name}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
