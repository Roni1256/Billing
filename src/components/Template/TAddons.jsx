import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { CgCheck } from 'react-icons/cg'
import { GrTextAlignFull,GrTextAlignCenter,GrTextAlignLeft,GrTextAlignRight } from "react-icons/gr";
import { PiTextAlignJustifyBold } from "react-icons/pi";

const TAddons = ({label,onAdd,isAdded}) => {
  return (
    <div className="  bg-white  p-3 rounded-md w-full h-fit ring-2 ring-slate-900/50">
        <div className="flex w-full items-center justify-between  p-2 ring-1 ring-slate-600/40 rounded-md">
            <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>{label}</label>
            <button onClick={onAdd} className='bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white '>{isAdded?<CgCheck size={20}/>:<IoIosAddCircle size={20}/>}</button>
        </div>

        {/* <div className="flex justify-center items-center gap-3  mt-2">
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
        </div> */}
    </div>
  )
}

export default TAddons