import React from 'react'
import angleIcon from "../icons/Angle.svg"

export default function BreadCum() {
  return (
    <div className='flex my-4 items-center max-lg:justify-center'>
      <span className='text-[13px] text-[#5A6573]'>Home</span>
      <img src={angleIcon} className='ml-[6px]'></img>
      <span className='text-[13px] text-[#5A6573] ml-[6px]'>Booking History</span>
      <img src={angleIcon} className='ml-[6px]'></img>
      <span className='text-[13px] text-[#5A6573] ml-[6px]'>Flight</span>
      <img src={angleIcon} className='ml-[6px]'></img>
      <span className='text-[13px] text-[#1882FF] font-medium ml-[6px]'>STFL17121182045413</span>
    </div>
  )
}
