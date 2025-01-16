import MaintenancePage from "@/components/common/Maintenance/Maintenance";
import { useEffect, useState } from "react";

const Preferences = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    // on unMount: clean up
    return () => {};
  }, []);

  if (!hydrated) return null;
  
  return (
    <main role="main" aria-labelledby="maintenance-page-heading">
      <MaintenancePage />
    </main>
  );
};

export default Preferences;
