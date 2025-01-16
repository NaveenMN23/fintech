"use client";

import React, { memo } from "react";

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Page Under Maintenance
      </h1>
      <p className="text-lg text-gray-600">
        This page is currently under maintenance. Please contact the
        Administrator for more information.
      </p>
    </div>
  );
};

export default memo(MaintenancePage);
