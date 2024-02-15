import { Avatar, Logo } from '@/assets';
import Image from "next/image";
import React from 'react'

function BookingCard() {
  return (
    <div className='bg-white flex items-center w-[20rem]'>
         <div className="w-[50px] h-[50px] flex items-center justify-center">
         <Image className="rounded-full w-full h-full"  src={Avatar} alt='' /> 
         </div>
        </div>
  )
}

export default BookingCard;