import React from "react";

export default function Section1() {
  return (
    <div
      id="section1"
      className="border-b-[1px] px-[20px] py-[16px] flex max-lg:justify-center items-center justify-between"
    >
      <div className="flex">
        <div className="flex items-center">
          <div
            id="circle"
            className="w-[24px] rounded-full bg-[#1882FF] flex items-center justify-center text-white mr-[12px]"
          >
            1
          </div>
        </div>
        <div>
          <div>
            <span className="text-[18px] text-[#1A2B3D] font-semibold font-Murecho">
              DAC → JFK
            </span>
            <div className="flex items-center gap-[6px]">
              <span className="text-[13px] text-[#5A6573]">Round Trip</span>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="2" r="1.5" fill="#9BA6B2" />
              </svg>
              <span className="text-[13px] text-[#5A6573]">
                25 Mar - 4 Apr 2023
              </span>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="2" r="1.5" fill="#9BA6B2" />
              </svg>
              <span className="text-[13px] text-[#5A6573]">1 Stop</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full bg-[#E8F3FF] py-[4px] px-[8px]">
        <div className="text-[12px] text-[#1882FF] font-medium" style={{width: "max-content"}}>33h 20m</div>
      </div>
    </div>
  );
}
