import React,{useState} from 'react'

const TInputs = ({label="",name="",type="text",placeholder="",values="",change}) => {
    const [value,setValue]=useState(values)
  return (
    <div className='w-full'>
        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
        <input  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-2 focus:ring-slate-800 focus:outline-none" name={name} type={type} placeholder={placeholder} required onChange={(e)=>{setValue(e.target.value);change(e)}}/>
</div>
  )
}

export default TInputs