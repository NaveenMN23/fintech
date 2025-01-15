"use client"

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "./dashboard/page";

export default function Home({children}:React.PropsWithChildren) {

  return (
    <div>
      <Dashboard/>
    </div>
  );
}
