/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar } from "iconsax-react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateSelectProps {
  className?: string;
  onChange?: (e: Date | null) => any;
  placeholderText?: string;
  selected?: Date | null;
  minDate?: Date;
  style?: React.CSSProperties;
  disbaled?: boolean;
  nullValuePlaceHolder?: string;
}
export default function DateSelect({
  className = "",
  onChange,
  placeholderText,
  selected,
  minDate,
  style,
  disbaled = false,
  nullValuePlaceHolder = "",
}: DateSelectProps) {
  const CustomInput = React.forwardRef(
    ({ value, onClick, onChange }: any, ref: any) => {
      return (
        <div
          onClick={onClick}
          className={
            "flex flex-row !w-[12rem] gap-4 items-center border border-transparent  " +
            className +
            (disbaled ? " opacity-80" : " hover:border-[#B0BACA]")
          }
          style={style}
        >
          <Calendar className="" />
          <input
            className="disabled:cursor-not-allowed focus:outline-none text-sm lg:text-base !w-full placeholder:text-[#6B7280] placeholder:text-base text-blue-11 bg-transparent"
            value={value ? value : nullValuePlaceHolder}
            onChange={onChange}
            placeholder={placeholderText}
            ref={ref}
            // disabled={disbaled}
          />
        </div>
      );
    }
  );
  return (
    <div>
      <DatePicker
        onChange={(e) => onChange && onChange(e)}
        customInput={<CustomInput />}
        selected={selected}
        minDate={minDate}
        // disabled={disbaled}
        dateFormat="dd/MM/yyyy" // Setting the date format
      />
    </div>
  );
}
