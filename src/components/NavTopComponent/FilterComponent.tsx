"use client";

import {
  Briefcase,
  Location,
  Shuffle,
  User,
} from "iconsax-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs } from "@/components/ui/tabs";
import DateSelect from "../Date/DateSelect";

interface IFilterComponent {
  tabArr: string[];
  activeTab: number;
  handleTabChange: (index: number) => void;
}

function FilterComponent({
  tabArr,
  activeTab,
  handleTabChange,
}: IFilterComponent) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [origin, setOrigin] = useState('NEW YORK (JFK)');
  const [destination, setDestination] = useState('MUMBAI (BOM)');

  const handleShuffleClick = () => {
    // Swap origin and destination
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  return (
    <div className="bg-white z-[99] rounded-3xl fixed flex flex-col items-start justify-start gap-9 px-5 py-4 w-[60rem]">
      <div className="first w-full flex items-center justify-between">
        <div className="flex items-center w-[30rem] justify-between bg-[#e1eceb] rounded-3xl py-2 px-5 gap-6">
        <div className="flex items-center justify-center gap-5">
        <Location color="#425c5a" variant="Bold" size="20" />
        <p className="text-base flex items-center justify-center gap-1 font-normal text-[#425c5a]">
          <span>{origin}</span>
        </p>
      </div>
      <div className="bg-[#425c5a] rounded-full cursor-pointer  w-8 h-8 flex items-center justify-center" onClick={handleShuffleClick}>
        <Shuffle color="white" variant="Bold" size="20" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Location color="#425c5a" variant="Bold" size="20" />
        <p className="text-base flex items-center justify-center gap-1 font-normal text-[#425c5a]">
          <span>{destination}</span>
        </p>
      </div>

        </div>
          <DateSelect
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            placeholderText="dd/mm/yy"
            className="border bg-[#e1eceb] rounded-2xl flex item-center justify-center py-4 px-4  h-10 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          />
        <Select>
          <SelectTrigger className="w-[12rem] bg-[#e1eceb] rounded-2xl">
            <User variant="Bold" size={20} color="#3d5654" />
            <SelectValue
              className="text-[#425c5a] text-sm font-normal"
              placeholder="2 TRAVELERS"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">
              <p className="text-[#425c5a] font-normal text-sm">1 TRAVELER</p>
            </SelectItem>
            <SelectItem value="light">
              <p className="text-[#425c5a] font-normal text-sm">2 TRAVELERS</p>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="second w-full flex items-start justify-between">
        <Tabs defaultValue="account" className="w-[30rem] relative">
          <div className="w-full bg-[#e1eceb] p-1 rounded-2xl flex items-start justify-between">
            {tabArr.map((tab, index) => (
              <div
                key={index}
                className={`${
                  index === activeTab
                    ? "bg-[#425c5a] text-white"
                    : "bg-transparent text-[#425c5a]"
                } w-[30%] cursor-pointer h-full py-2 rounded-2xl flex justify-center items-center`}
                onClick={() => handleTabChange(index)}
              >
                {tab}
              </div>
            ))}
          </div>
        </Tabs>
        <div className="flex gap-3 items-center justify-center bg-[#e1eceb] py-2 px-5 rounded-2xl w-[12rem]">
          <Briefcase variant="Bold" color="#3d5654" size={20} />
          <p className="flex">FIRST CLASS</p>
        </div>
        <button className="flex gap-3 items-center justify-center bg-[#c99c33] py-2 px-5 rounded-2xl w-[12rem] text-white">
          <p className="flex">SEARCH</p>
        </button>
      </div>
    </div>
  );
}

export default FilterComponent;
