import React from 'react'
import { GrTextAlignFull,GrTextAlignCenter,GrTextAlignLeft,GrTextAlignRight } from "react-icons/gr";
import { PiTextAlignJustifyBold } from "react-icons/pi";

const TPositions = () => {
  return (
    <div className="w-full flex items-center justify-center col-span-2">
        <div className="bg-slate-100 w-fit  rounded-md p-2">
            <div className="flex justify-center items-center gap-3  mt-2">
            <button className='  flex items-center justify-start p-3 hover:bg-slate-200   rounded-lg transition-colors '>
                <GrTextAlignFull size={20}/>
            </button>
            <button className='  flex items-center justify-start p-3 hover:bg-slate-200   rounded-lg transition-colors '>
                <GrTextAlignCenter size={20}/>
            </button>
            <button className='  flex items-center justify-start p-3 hover:bg-slate-200   rounded-lg transition-colors '>
                <GrTextAlignLeft size={20}/>
            </button>
            <button className='  flex items-center justify-start p-3 hover:bg-slate-200   rounded-lg transition-colors '>
                <GrTextAlignRight size={20}/>
            </button>
            <button className='  flex items-center justify-start p-3 hover:bg-slate-200   rounded-lg transition-colors '>
                <PiTextAlignJustifyBold size={20}/>
            </button>
            </div>
        </div>
    </div>
  )
}

export default TPositions