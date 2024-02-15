"use client"

import { Location, Shuffle } from "iconsax-react";
import React, { useState } from "react";

function Navbar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bg-yellow-100 rounded-2xl px-3 py-4 fixed w-[calc(100%-250px)] left-[250px] top-0">
      <div className="first flex">
        <div className="flex items-center justify-center bg-blue-200 rounded-3xl py-2 px-3 gap-6">
          <div className="flex items-center justify-center gap-3">
            <Location color="#425c5a" variant="Bold" size="20" />
            <p className="text-base flex items-center justify-center gap-1 font-normal text-[#425c5a]">
             <span>NEW</span> <span>YORK</span> <span>(JFK)</span>
              </p>
          </div> 
          <div className="bg-[#425c5a] rounded-full  w-8 h-8 flex items-center justify-center">
            <Shuffle color="white" variant="Bold" size="20" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <Location color="#425c5a" variant="Bold" size="20" />
            <p className="text-base flex items-center justify-center gap-1 font-normal text-[#425c5a]">
             <span>MUMBAIA</span> <span>(BOM)</span>
              </p>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Navbar;
