"use client"

import { Briefcase, Calendar, Location, Profile, Shuffle, User } from "iconsax-react";
import React, { useState } from "react";
import { ReactDatePicker } from "react-datepicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OneWayComponent from "../OneWayComponent/OneWayComponent";


function Navbar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bg-white rounded-3xl fixed flex flex-col items-start justify-start gap-9 px-5 py-4 w-[60rem]">
      <div className="first w-full flex items-center justify-between">
        <div className="flex items-center w-[30rem] justify-between bg-[#e1eceb] rounded-3xl py-2 px-5 gap-6">
          <div className="flex items-center justify-center gap-5">
            <Location color="#425c5a" variant="Bold" size="20" />
            <p className="text-base flex items-center justify-center gap-1 font-normal text-[#425c5a]">
              <span>NEW</span> <span>YORK</span> <span>(JFK)</span>
            </p>
          </div>
          <div className="bg-[#425c5a] rounded-full  w-8 h-8 flex items-center justify-center">
            <Shuffle color="white" variant="Bold" size="20" />
          </div>
          <div className="flex items-center justify-center gap-5">
            <Location color="#425c5a" variant="Bold" size="20" />
            <p className="text-base flex items-center justify-center gap-1 font-normal text-[#425c5a]">
              <span>MUMBAIA</span> <span>(BOM)</span>
            </p>
          </div>
        </div>
        <div className="flex items-start bg-[#e1eceb] w-[12rem] rounded-2xl justify-start py-2 px-3">
          <Calendar variant="Bold" color="#3d5654" size={20} />
          {/* <ReactDatePicker minDate={startDate} onChange={(date) => setStartDate(date)} className="flex bg-[#e1eceb] border-none w-16" /> */}
          <p>25 July 2024</p>
        </div>
        <Select>
          <SelectTrigger className="w-[12rem] bg-[#e1eceb] rounded-2xl">
            <User variant="Bold" size={20} color="#3d5654" />
            <SelectValue className="text-[#425c5a] text-sm font-normal" placeholder="2 TRAVELERS" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">
              <p className="text-[#425c5a] font-normal text-sm">
                1 TRAVELER
              </p>
            </SelectItem>
            <SelectItem value="light">
              <p className="text-[#425c5a] font-normal text-sm">
                2 TRAVELERS
              </p>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="second w-full flex items-start justify-between">
        <Tabs defaultValue="account" className="w-[30rem] border-2 border-bl relative">
          <TabsList className="w-full bg-[#e1eceb] rounded-2xl flex items-start justify-between">
            <TabsTrigger className="rounded-2xl flex items-center justify-center text-black text-sm font-normal w-[8rem]" value="one-way">ONE WAY</TabsTrigger>
            <TabsTrigger className="rounded-2xl flex items-center justify-center text-black text-sm font-normal w-[8rem]" value="round-trip">ROUND TRIP</TabsTrigger>
            <TabsTrigger className="rounded-2xl flex items-center justify-center text-black text-sm font-normal w-[8rem]" value="multi-city">MULTI CITY</TabsTrigger>
          </TabsList>
          <TabsContent className="absolute z-30 overflow-y-scroll" value="one-way">
            <OneWayComponent />
          </TabsContent>
          <TabsContent value="round-trip">Change your password here.</TabsContent>
          <TabsContent value="multi-city">Change your password here.</TabsContent>
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

export default Navbar;
