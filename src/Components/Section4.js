import React from 'react'
import airPlan from '../icons/Airplan.svg';
import warning from "../icons/warning.svg"

export default function Section4({barHeight,show}) {
  return (
    <div className='lg:flex px-[20px] w-full'>
        <div className="flex justify-center items-center h-full mr-[20px]">
            <div className="flex flex-col items-center space-y-3">
                <div className="bg-[#D8E1EB] w-[2px]" style={{height:barHeight}}></div>
                <img src={airPlan} className="w-[13px] h-[14px]" alt="Airplane Icon" />
                <div className="bg-[#D8E1EB] w-[2px]" style={{height:barHeight}}></div>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex lg:gap-[134px] pt-[16px] max-lg:flex-col max-lg:gap-2 max-lg:items-center max-lg:justify-center'>
                <div className="flex flex-col">
                    <span className='text-[14px] text-[#3E4957] font-medium font-Murecho'>Turkish Airlines</span>
                    <span className='text-[14px] text-[#5A6573] font-Murecho'>Flight no : TUR467</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-[14px] text-[#5A6573] font-Murecho'>Airbus Industrie 737-800-738</span>
                    <span className='text-[14px] text-[#5A6573] font-Murecho'>Class : <span className='text-[14px] text-[#3E4957] font-medium font-Murecho'>ECONOMY-Y (O)</span></span>
                </div>
            </div>
            <div className='pt-[16px]' style={{display:show}}>
                <div className='bg-[#FFE1C2] rounded-md pl-[6px] pr-[5px] py-[8px] flex justify-center items-center gap-2 max-w-[764px]' style={{border:"1px solid #FFE1C2"}}>
                    <img src={warning} className="w-[17px] h-[17px]" alt="Airplane Icon" />
                    <span className='text-[12px] text-[#3E4957] font-Text/P5'>Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality</span>
                </div>
            </div>
        </div>
    </div>
  )
}
