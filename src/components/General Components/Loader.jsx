import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="transition-all duration-700 ease-in-out flex justify-center items-center h-screen">
        <div className="animate-pulse flex space-x-2 sm:space-x-4">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </>
  )
}

export default Loader