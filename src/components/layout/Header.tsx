"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

interface HeaderProps {
  title: string,
  toggleSidebar: MouseEventHandler<HTMLButtonElement>
}

const Header: React.FC<HeaderProps> = ({title, toggleSidebar}) => {
    return (
      <header className="flex items-center justify-between bg-appWhite text-appGray w-full h-[8vh] container md:items-center">
        <button className="text-[1.8rem] cursor-pointer lg:hidden" onClick={toggleSidebar}>
          &#9776;
        </button>
        <div className="font-semibold text-fsh2 text-appGray">{title}</div>
      </header>
    );
  }

export default Header;
  