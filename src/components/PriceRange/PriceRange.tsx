import React from "react";

function PriceRange() {
  return (
    <div className="mt-5 w-full">
      <p className="flex px-6 w-full text-base text-white font-normal">
        PRICE
        </p>
      <div className="flex mt-5 px-6 w-full items-start justify-start bg-[#e1eceb] h-[1px] relative">
        <div className="flex items-start justify-start gap-28 top-[-9px]  absolute">
        <div className="flex w-full flex-col items-start gap-2 ml-10 justify-center">
          <div className="flex p-2.5 rounded-full bg-[#c99c33] w-1 h-1"></div>
          <p className="text-white flex items-center justify-center text-base font-medium bg-[#c99c33] py-1.5 px-2 rounded-2xl">$500</p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <div className="flex p-2.5 rounded-full bg-[#c99c33] w-1 h-1"></div>
          <p className="text-white flex items-center justify-center text-base font-medium bg-[#c99c33] py-1.5 px-2 rounded-2xl">$2500</p>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default PriceRange;
