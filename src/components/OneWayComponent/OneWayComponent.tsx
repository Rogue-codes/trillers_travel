import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import BookingCard from '../BookingCard/BookingCard';
import { Logo } from '@/assets';
import MapCard from '../MapCard/MapCard';

function OneWayComponent() {
    return (
        <div className='w-[60rem] overflow-y-scroll pr-5 mt-9 ml-4 bg-[#e1eceb] flex flex-col items-start justify-start'>
            <div className='w-full flex items-center justify-between mt-5'>
                <p className='text-[#425c5a] text-base font-normal'>RESULT (25)</p>
                <div className='flex items-start justify-center gap-6'>
                    <div className="flex gap-3 items-center justify-center bg-[white] py-2 px-5 rounded-2xl w-[7rem] text-white">
                        <p className="flex text-[#425c5a]">FILTER</p>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[12rem] bg-white rounded-2xl">
                            <SelectValue className="text-[#425c5a] text-sm font-normal" placeholder="TICKET OF CLASS" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">
                                <p className="text-[#425c5a] font-normal text-sm">
                                    ECONOMY
                                </p>
                            </SelectItem>
                            <SelectItem value="light">
                                <p className="text-[#425c5a] font-normal text-sm">
                                    BUSINESS
                                </p>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='flex mt-5 mb-24 w-full items-start justify-between'>
                <div className='flex flex-col '>
                    <BookingCard
                        avatarSrc={Logo}
                        origin="JFK"
                        departureTime="13:00"
                        airline="EMIRATES"
                        duration="11H 20M"
                        destination="BOOM"
                        arrivalTime="14:20"
                        price="1,572" />

                    <BookingCard
                        avatarSrc={Logo}
                        origin="JFK"
                        departureTime="13:00"
                        airline="QATAR AIRWAYS"
                        duration="11H 20M"
                        destination="BOOM"
                        arrivalTime="14:20"
                        price="1,572" />

                    <BookingCard
                        avatarSrc={Logo}
                        origin="JFK"
                        departureTime="13:00"
                        airline="LUFTHANSA"
                        duration="11H 20M"
                        destination="BOOM"
                        arrivalTime="14:20"
                        price="1,572" />

                    <BookingCard
                        avatarSrc={Logo}
                        origin="JFK"
                        departureTime="13:00"
                        airline="EMIRATES"
                        duration="11H 20M"
                        destination="BOOM"
                        arrivalTime="14:20"
                        price="1,572" />
                </div>
                <div>
                    <MapCard />
                </div>
            </div>
        </div>
    )
}

export default OneWayComponent;