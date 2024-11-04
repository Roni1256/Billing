import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import Tcard from '../components/Template/Tcard';
import Bill from '../components/Billing/Bill';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Templates = () => {
  const navigate = useNavigate()
  return (
    <div className='p-5 h-screen relative'>
        <h1 className='text-3xl font-bold my-2'>Templates</h1>
        <hr />
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
          <button className='text-slate-600 hover:text-slate-800 dark:hover:text-white h-full p-5 bg-white rounded-lg  shadow-slate-800/50 flex flex-col items-center justify-center text-xl font-bold dark:text-gray-200 dark:bg-slate-900 dark:shadow-[0px_0px_3px_1px_#edf2f7] shadow-[0px_0px_3px_2px_#4a5568]'
          onClick={()=>{navigate('/create-template')}}
          >
            Create Own Template
            <IoMdAddCircle size={100} />
          </button>  
          <Tcard />
          <Tcard />
        </div>
      <div className="flex items-center justify-center h-screen absolute top-0 left-0 w-full backdrop-blur-md text-3xl font-bold">
        <span className='bg-white text-3xl text-slate-700 p-4 shadow-md rounded-md'>Coming soon...</span>
      </div>
    
     </div>)
}

export default Templates