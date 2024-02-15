"use client"
import { Avatar } from "@/assets";
import { Activity, Airplane, Box1, MusicDashboard, Setting, Wallet } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
 
function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-[250px] cursor-pointer flex flex-col py-12 gap-6 items-start justify-start h-screen rounded-3xl bg-[#3d5654] left-0 top-0 fixed">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[50px] h-[50px] flex items-center justify-center">
          <Image className="rounded-full w-full h-full" src={Avatar} alt="" />
        </div>
        <p className="text-base font-bold">CHIDERA ADU-BARNABAS</p>
        <p className="text-sm font-medium">Adu.deraj@gmail.com</p>
      </div>
      <div className="flex text-white text-base font-medium flex-col items-start justify-start gap-5 w-full">
        <div className="flex items-start justify-start py-3 px-5 gap-4" onClick={() => router.push("/")}>
          <Box1 variant="Linear" color="#c99c33" size={24} />
          <p className="flex">Dashboard</p>
        </div>
        <div className={`${pathname === "/flights" ? "bg-[#e2eceb] px-5 text-black rounded-l-3xl rounded-tr-3xl rounded-br-3xl" : "bg-none text-white"} py-3 px-5 w-full flex items-start justify-start gap-4 relative`} onClick={() => router.push("/flights")}>
          <Airplane variant="Linear" color="#c99c33" size={24} />
          <p className="flex">Flights</p>
          {/* <div className="absolute z-20 mt-[-30px] ml-[12rem] p-6`` bg-yellow-700 w-10 h-10 rounded-full"></div> */}
        </div>
        <div className="flex items-start justify-start py-3 px-5 gap-4">
          <Wallet variant="Linear" color="#c99c33" size={24} />
          <p className="flex">Wallet</p>
        </div>
        <div className="flex items-start justify-start py-3 px-5 gap-4">
          <Box1 variant="Linear" color="#c99c33" size={24} />
          <p className="flex">Report</p>
        </div>
        <div className="flex items-start justify-start py-3 px-5 gap-4">
          <Activity variant="Linear" color="#c99c33" size={24} />
          <p className="flex">Statistics</p>
        </div>
        <div className="flex items-start justify-start py-3 px-5 gap-4">
          <Setting variant="Linear" color="#c99c33" size={24} />
          <p className="flex">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
