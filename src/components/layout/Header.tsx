"use client";

// import { useAppSelector } from "@/store/hooks";
// import { RootState } from "@/store/store";
// import Image from "next/image";
import { MouseEventHandler } from "react";

interface HeaderProps {
  title:string;
  toggleSidebar: MouseEventHandler<HTMLButtonElement>
}

const Header: React.FC<HeaderProps> = ({title,toggleSidebar}) => {

    // const title = useAppSelector((state: RootState) => state.details.title)

    return (
      <header className="flex flex-shrink-0 items-center bg-appWhite text-appGray w-full h-[8vh] container md:items-center">
        <button className="text-[1.8rem] cursor-pointer lg:hidden" onClick={toggleSidebar}>
          &#9776;
        </button>
        <div className="font-semibold text-fsh2 text-appGray flex w-full justify-center lg:justify-start">{title}</div>
      </header>
    );
  }

export default Header;
  