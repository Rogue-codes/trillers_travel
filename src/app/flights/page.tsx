"use client";

import React, { useState } from "react";
import Filter from "@/components/NavTopComponent/FilterComponent";
import OneWayComponent from "@/components/OneWayComponent/OneWayComponent";

function Flights() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabArr = ["ONE WAY", "ROUND TRIP", "MULTI CITY"];

  return (
    <div className="flex min-h-screen ml-[250px] bg-[#e1eceb] rounded-tr-xl rounded-br-xl pt-10 flex-col items-start justify-start px-10">
      <Filter
        tabArr={tabArr}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />

      <div className="w-full mt-44 py-3">
        <OneWayComponent />
      </div>
    </div>
  );
}

export default Flights;
