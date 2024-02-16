"use client";
import { Avatar } from "@/assets";
import { Activity, Airplane, Box1, Setting, Wallet } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { sideBarArr } from "@/utils";

function SidebarComponent() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-[250px] cursor-pointer flex flex-col py-12 gap-6 items-start justify-start h-screen rounded-r-3xl bg-[#3d5654] left-0 top-0 fixed">
      <div className="flex flex-col items-center text-white justify-center ml-4">
        <div className="w-[50px] h-[50px] flex items-center justify-center">
          <Image className="rounded-full w-full h-full" src={Avatar} alt="" />
        </div>
        <p className="text-base font-bold">CHIDERA ADU-BARNABAS</p>
        <p className="text-sm font-medium">Adu.deraj@gmail.com</p>
      </div>
      <div className="flex text-white text-base font-medium flex-col items-start justify-start gap-5 w-full">
        {sideBarArr.map((element, index) => (
          <div
            className={`${index === 1 && "bg-[#e2eceb] px-5 text-black rounded-l-3xl w-full relative "} flex items-start justify-start py-3 px-5 gap-4`}
            onClick={() => router.push(element.link)}
            key={index}
          >
            {index === 0 ? (
              <Box1 variant="Linear" color="#c99c33" size={24} />
            ) : index === 1 ? (
              <Airplane variant="Linear" color="#c99c33" size={24} />
            ) : index === 2 ? (
              <Wallet variant="Linear" color="#c99c33" size={24} />
            ) : index === 3 ? (
              <Box1 variant="Linear" color="#c99c33" size={24} />
            ) : index === 4 ? (
              <Activity variant="Linear" color="#c99c33" size={24} />
            ) : (
              <Setting variant="Linear" color="#c99c33" size={24} />
            )}
            <p className="flex">{element.label}</p>
            {
              index === 1 && <div className="curved-side"></div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarComponent;
