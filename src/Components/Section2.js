import React from 'react';
import locationIcon from '../icons/Location.svg';

export default function Section2({text1,text2Bold,text2Normal,icon,backgroundColor}) {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center max-md:block max-md:justify-center">
        <img src={icon} className="w-4 h-5 mr-5" alt="Location Icon" />
        <div className="h-10 rounded w-full px-4 py-2 flex justify-between items-center" style={{backgroundColor: backgroundColor}}>
          <span className="text-sm text-[#1A2B3D] font-medium font-Murecho">{text1}</span>
          <span className="text-sm text-[#5A6573] font-normal font-Murecho">
            <span className="font-medium">{text2Bold}</span>{text2Normal}
          </span>
        </div>
      </div>
    </div>
  );
}
