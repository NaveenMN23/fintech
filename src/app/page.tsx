"use client";

import { useEffect, useState } from "react";
import Dashboard from "./dashboard/page";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  
  useEffect(() => {
    setHydrated(true);

    // on unMount: clean up
    return () => {};
  }, []);

  if (!hydrated) return null;
  
  return (
    <div>
      <Dashboard />
    </div>
  );
}
