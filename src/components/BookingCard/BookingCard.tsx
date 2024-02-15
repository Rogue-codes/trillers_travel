import Image, { StaticImageData } from "next/image";
import React from 'react';

interface BookingCardProps {
  avatarSrc: StaticImageData;
  origin: string;
  departureTime: string;
  airline: string;
  duration: string;
  destination: string;
  arrivalTime: string;
  price: string;
}

const BookingCard: React.FC<BookingCardProps> = ({
  avatarSrc,
  origin,
  departureTime,
  airline,
  duration,
  destination,
  arrivalTime,
  price,
}) => {
  return (
    <div className='bg-white border-b-2 border-dashed flex font-normal text-[#425c5a] items-start justify-between py-6 px-6 w-[34rem] rounded-xl'>
      <div className="w-[50px] h-[50px] flex items-center justify-center">
        <Image className="rounded-full w-full h-full" src={avatarSrc} alt='' />
      </div>
      <div className="flex flex-col  items-center justify-center gap-3">
        <p className="flex font-semi-bold text-xl">{origin}</p>
        <p>{departureTime}</p>
      </div>
      <div className="flex flex-col  gap-2 items-center justify-center">
        <p className="flex text-xs font-bold">{airline}</p>
        <p className='text-sm'>{duration}</p>
        <p className='text-sm'>NON-STOP</p>
      </div>
      <div className="flex flex-col  items-center justify-center">
        <p className="font-semi-bold text-xl">{destination}</p>
        <p className='ml-4 text-sm'>{arrivalTime}</p>
      </div>
      <div className="flex flex-col items-end justify-end">
        <p className="flex flex-end font-semibold text-base">${price}</p>
        <button className="flex  gap-3 items-center justify-center bg-[#c99c33] py-2 px-5 rounded-2xl w-[7rem] text-white">
          <p className="flex">SEARCH</p>
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
