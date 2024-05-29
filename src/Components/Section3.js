import React from 'react';
import textIcon from '../icons/ArabicText.svg';

export default function Section3() {
  return (
    <div className="px-4 pt-3 flex items-center max-lg:justify-center">
      <img src={textIcon} className="w-[19px] h-[23px] mr-4" alt="Text Icon" />
      <div id="times" className="flex gap-40 max-lg:gap-2">
        <div className="flex flex-col">
          <span className="text-lg text-[#1A2B3D] font-semibold font-Murecho">DAC - DXB</span>
          <span className="text-sm text-[#5A6573] font-Murecho">12 hr 20 min</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg text-[#1A2B3D] font-semibold font-Murecho">07:30 PM</span>
          <span className="text-sm text-[#5A6573] font-Murecho">28 Mar, Friday</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg text-[#1A2B3D] font-semibold font-Murecho">08:50 AM</span>
          <span className="text-sm text-[#5A6573] font-Murecho">29 Mar, Saturday</span>
        </div>
      </div>
    </div>
  );
}
