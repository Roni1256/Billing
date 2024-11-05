import React from 'react'

const Floats = ({text,title,icon}) => {
    return (
      <div className='w-full sm:w-[180px] md:w-[200px] h-fit gap-2 items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-md dark:bg-white dark:text-slate-700 flex flex-col justify-between ring-2 ring-slate-800/20'>
              <div className='text-2xl sm:text-3xl md:text-4xl text-center'>
                  {icon}
              </div>
          <div className='flex flex-col gap-2 sm:gap-3 items-center justify-between'>
              <h1 className='text-lg sm:text-xl font-bold'>{title}</h1>
              <p className='text-xl sm:text-2xl font-extrabold'>{text}</p>
          </div>
      </div>
    )
  }
export default Floats