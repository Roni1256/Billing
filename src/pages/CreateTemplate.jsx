import React, { useState } from 'react'
import { IoMdCloseCircle, IoMdExit } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import Bill from '../components/Billing/Bill'
import TSidebar from '../components/Template/TSidebar'
import TForm from '../components/Template/TForm'
import TInfos from '../components/Template/TInfos'
import TPositions from '../components/Template/TPositions'
import BlankTemplate from '../components/Template/BlankTemplate'
import Invoice from '../components/Billing/Invoice'

const CreateTemplate = () => {
  const navigate=useNavigate()
  const [tInfos,setTInfos]=useState({})

  if(tInfos) 
  {  return (
    <div className='bg-gray-200 h-screen flex items-center justify-center w-full'>
      <TInfos setInfo={setTInfos}/>      
    </div>
    )
  }

  return (
    <div className="   bg-gray-200 text-slate-800 w-full">
      <header className='flex items-center justify-between h-fit px-10 py-6 w-full  bg-white'>
        <h1 className='text-3xl font-bold'>Create Your Template</h1>
        <button className='  flex items-center justify-start p-3 hover:bg-slate-300   rounded-lg transition-colors ' onClick={()=>{navigate(-1)}}>
          <IoMdExit size={30}/>
        </button>
      </header>
      <main className='w-full h-screen flex items-center justify-center p-10 gap-4'>
        <section className='w-[60%] h-full overflow-auto bg-white rounded-md p-5 grid-cols-2 grid gap-5'>
          {/* //<TPositions/> */}
          <TSidebar/>
          <TForm/>
        </section>
        <section className='w-[40%] h-full bg-white p-5 rounded-md'>
          <h1 className='text-xl font-bold text-slate-700'>Preview</h1>
          <div className="p-10">
            <BlankTemplate/>

          </div>
        </section>


      </main>

    </div>
      )
}

export default CreateTemplate