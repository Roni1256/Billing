import React from 'react'
import TInputs from './TInputs'
import TAddons from './TAddons'

const TSidebar = () => {
  return (
    <div className='w-full h-full bg-slate-100 border-r py-4  overflow-auto scrollbar-none flex-col flex gap-5 col-span-1'>
      <h1 className='text-2xl text-slate-700 font-bold text-center'>Addons</h1>
      <section className='flex flex-col items-start justify-center h-full gap-2 w-full p-4 pt-2 '>
      <h1 className='text-md text-slate-700 font-bold text-center'>Company</h1>

        <TAddons label={"Company Name"} onAdd={()=>{}} isAdded={false}/>
        <TAddons label={"Company Logo"} onAdd={()=>{}} isAdded={false}/>
        <TAddons label={"Company Address"} onAdd={()=>{}} isAdded={false}/>
        <TAddons label={"Company Email"} onAdd={()=>{}} isAdded={false}/>
        <TAddons label={"Company Phone"} onAdd={()=>{}} isAdded={false}/> 
        <hr className='my-5 h-0.5 bg-black/20 w-full' />
      </section>
      <section className='flex flex-col items-start justify-center h-full gap-2 w-full p-4 pt-2  '>
      <h1 className='text-md text-slate-700 font-bold text-center'>Customers</h1>

        <TAddons label={"Customer Name"} onAdd={()=>{}} isAdded={false}/>
        <TAddons label={"Customer Address"} onAdd={()=>{}} isAdded={false}/>
        <TAddons label={"Customer Email"} onAdd={()=>{}} isAdded={false}/>
        <TAddons label={"Customer Phone"} onAdd={()=>{}} isAdded={false}/> 
        <hr className='my-5 h-0.5 bg-black/20 w-full' />
      </section>
      
    </div>
  )
}

export default TSidebar