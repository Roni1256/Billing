import React from 'react'



const Floats = ({text,title,icon}) => {
    return (
      <div className=' w-[200px] h-fit gap-2 items-center px-8 py-4 rounded-md  dark:bg-white dark:text-slate-700 flex flex-col justify-between ring-2 ring-slate-800/20'>
              <div className='text-4xl text-center'>
                  {icon}
              </div>
          <div className='flex flex-col  gap-3 items-center justify-between'>
              <h1 className='text-xl font-bold '>{title}</h1>
              <p className='text-2xl  font-extrabold '>{text}</p>
          </div>
      </div>
    )
  }
export default Floats
