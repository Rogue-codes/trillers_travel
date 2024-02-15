import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import BookingCard from '../BookingCard/BookinCard';

function OneWayComponent() {
    return (
        <div className='w-[60rem] pr-5 mt-10 bg-[#f16d38] flex flex-col items-start justify-start'>
            <div className='w-full flex items-center justify-between'>
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
            <div className='flex items-start justify-between'>
                <div><BookingCard /></div>
            </div>
        </div>
    )
}

export default OneWayComponent;