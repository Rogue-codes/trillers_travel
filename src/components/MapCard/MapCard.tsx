import { Map } from '@/assets';
import Image from 'next/image';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PriceRange from '../PriceRange/PriceRange';

function MapCard() {
    return (
        <div className='bg-[#425c5a] py-7 flex flex-col items-center h-[30rem] justify-start w-[23rem] rounded-2xl'>
            <div className="flex px-6 w-full items-center justify-between gap-5 text-white font-normal">
                <div className="flex flex-col">
                    <p className='text-xs'>FROM</p>
                    <p className='text-xl'>JFK</p>
                </div>
                <p className='text-xs'>NON-STOP</p>
                <div className="flex flex-col">
                    <p className='text-xs'>TO</p>
                    <p className='text-xl'>BOOM</p>
                </div>
            </div>
            <div className='mb-2'>
            <Image className='w-full h-full mt-8' src={Map} alt="" />
            </div>
            <Tabs defaultValue="one-way" className="w-full  bg-[#3d5654] relative">
          <TabsList className="w-full bg-[#3d5654] flex mt-4 items-start justify-between">
            <TabsTrigger className="rounded-2xl text-white data-[state=active]:bg-[#c99c33] data-[state=active]:text-white flex  items-center justify-center text-sm font-normal w-[8rem]" data-state="active" value="one-way">ONE WAY</TabsTrigger>
            <TabsTrigger className="rounded-2xl flex items-center justify-center text-sm font-normal w-[8rem] text-white data-[state=active]:bg-[#c99c33] data-[state=active]:text-white" value="round-trip">ROUND TRIP</TabsTrigger>
            <TabsTrigger className="rounded-2xl flex items-center justify-center text-white data-[state=active]:bg-[#c99c33] data-[state=active]:text-white text-sm font-normal w-[8rem]" value="multi-city">MULTI CITY</TabsTrigger>
          </TabsList>
          <TabsContent className="" value="one-way"><PriceRange /></TabsContent>
          <TabsContent value="round-trip">Change your password here.</TabsContent>
          <TabsContent value="multi-city">Change your password here.</TabsContent>
        </Tabs>
        </div>
    )
}

export default MapCard