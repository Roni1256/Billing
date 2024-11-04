import React from 'react'
import Bill from '../Billing/Bill'
import Button from '../General Components/Button'
const Tcard = () => {
  return (
    <button className='text-slate-600 hover:text-slate-800 dark:hover:text-white  bg-white rounded-lg  shadow-slate-800/50 flex flex-col items-center justify-center text-xl font-bold dark:text-gray-300 dark:bg-slate-900 dark:shadow-[0px_0px_3px_1px_#edf2f7] shadow-[0px_0px_3px_2px_#4a5568] gap-4 p-5'>
        <h1 className='text-center text-xl '>Reciept</h1>
        <Bill />
        <div className="flex items-center justify-center gap-4">
            <Button label={"Use"}  />
            <Button label={"Delete"} style={"bg-red-600 hover:bg-red-700"} />
        </div>
    </button>  
  )
}

export default Tcard