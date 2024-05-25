import React from 'react';
import locationIcon from '../icons/Location.svg';

export default function Section2() {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center">
        <img src={locationIcon} className="w-4 h-5 mr-5" alt="Location Icon" />
        <div className="bg-[#F5F7FA] h-10 rounded w-full px-4 py-2 flex justify-between items-center">
          <span className="text-sm text-[#1A2B3D] font-medium font-Murecho">Departure from Dhaka</span>
          <span className="text-sm text-[#5A6573] font-normal font-Murecho">
            <span className="font-medium">Terminal 1:</span> Hazrat Shahjalal International Airport
          </span>
        </div>
      </div>
    </div>
  );
}
