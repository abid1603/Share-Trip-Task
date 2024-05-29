import React from 'react';

export default function Section2({text1,text2Bold,text2Normal,icon,backgroundColor}) {
  return (
    <div className="px-5 pt-4">
      <div className="flex max-lg:flex-col items-center">
        <img src={icon} className="w-4 h-5 mr-5 max-lg:mb-2" alt="Location Icon" />
        <div className="rounded w-full px-4 py-2 flex lg:justify-between max-lg:flex-col max-lg:mb-4 items-center" style={{backgroundColor: backgroundColor}}>
          <span className="text-sm text-[#1A2B3D] font-medium font-Murecho">{text1}</span>
          <span className="text-sm text-[#5A6573] font-normal font-Murecho">
            <span className="font-medium">{text2Bold}</span>{text2Normal}
          </span>
        </div>
      </div>
    </div>
  );
}
