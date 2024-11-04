import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import TInputs from './TInputs'
import Button from '../General Components/Button'
import { IoMdArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
const TInfos = ({setInfo}) => {
  const navigate=useNavigate()

    const [TInfos,setTInfos]=useState({})
    const handleChange=(e)=>{
        setTInfos((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const onSubmit=(e)=>{
      e.preventDefault()
      setInfo(false)
    }
  return (
    <div className='w-full h-screen flex  items-center justify-center p-5 bg-gray-200 '>
        <form action="" className='bg-gray-100 rounded-md w-[400px] flex flex-col justify-center shadow-md p-5'>    
            <h1 className='text-xl font-bold text-slate-700'>Template Information</h1>
            <div className="flex flex-col gap-3 mt-5   ">
                <TInputs label="Title" name='title' type="text" placeholder="Title" change={handleChange} />
                <TInputs label="Description" name='description' type="text" placeholder="Description" change={handleChange} />
                <TInputs label="Tags" name='tags' type="text" placeholder="comma separated" change={handleChange} />
                <TInputs label="Category" name='category' type="text" placeholder="Category" change={handleChange} />
            </div>    
            <Button label={"Create"} type="submit" style={"bg-blue-600 hover:bg-blue-700 mt-10"}  click={onSubmit}/>
        </form>
    </div>
  )
}

export default TInfos