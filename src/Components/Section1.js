import React from "react";
import dotIcon from "../icons/Ellipse.svg";

export default function Section1() {
  return (
    <div
      id="section1"
      className="border-b-[1px] px-[20px] py-[16px] lg:flex max-lg:ml-10 items-center justify-between"
    >
      <div className="flex">
        <div className="flex items-center">
            <div id="circle" className="w-[24px] rounded-full bg-[#1882FF] flex items-center justify-center text-white mr-[12px]">1</div>
        </div>
        <div>
            <div>
            <span className="text-[18px] text-[#1A2B3D] font-semibold font-Murecho">
                DAC → JFK
            </span>
            <div className="flex items-center">
                <span className="text-[13px] text-[#5A6573]">Round Trip</span>
                <image src={dotIcon} className="w-[12px]" />
                <span className="text-[13px] text-[#5A6573]">
                25 Mar - 4 Apr 2023
                </span>
                <image src={dotIcon} className="w-[12px]" />
                <span className="text-[13px] text-[#5A6573]">1 Stop</span>
            </div>
            </div>
        </div>
      </div>
      <div className="rounded-full bg-[#E8F3FF] py-[4px] px-[8px]">
            <div className="text-[12px] text-[#1882FF] font-medium">33h 20m</div>
      </div>
    </div>
  );
}
