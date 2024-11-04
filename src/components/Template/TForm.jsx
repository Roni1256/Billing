import React,{useState} from 'react'
import TInputs from './TInputs'
import Button from '../General Components/Button'
import TPositions from './TPositions'
const TForm = () => {

  const [customField,setCustomField]=useState({})

  const handleChange=(e)=>{
    setCustomField((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(customField)
  }

  return (
   
    <form action="submit" className='bg-white rounded-md w-[400px] flex flex-col justify-center shadow-md p-5 h-fit ring-1 ring-slate-900/30'>    
        <h1 className='text-xl font-bold text-slate-700'>Add Custom Fields</h1>
        <div className="flex flex-col gap-3 mt-5   ">
            <TInputs label="Label" name='label' type="text" placeholder="label" change={handleChange} />
            <div className="">
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Field Type</label>
              <select name="fieldtype" className='w-full p-2 border rounded-lg bg-gray-100 focus:bg-white focus:outline-none shadow-sm focus:ring-2 focus:ring-slate-500 focus:border-slate-500 ' onChange={handleChange} >
                <option value="">Select Field Type</option>
                <option value="text">text</option>
                <option value="number">number</option>
                <option value="date">date</option>
                <option value="textarea">textarea</option>
                <option value="checkbox">checkbox</option>
                <option value="time">time</option>

            </select>
            </div>
            <div className="">
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Position </label>
              <select name="position" className='w-full p-2 border rounded-lg bg-gray-100 focus:bg-white focus:outline-none shadow-sm focus:ring-2 focus:ring-slate-500 focus:border-slate-500 ' onChange={handleChange} >
                <option value="">Select Position</option>
                <option value="header">Header </option>
                <option value="afterheader"> After Header</option>
                <option value="body">Body</option>
                <option value="beforefooter">Before Footer</option>
                <option value="footer">Footer</option>
            </select>
            </div>
            <TInputs label="Placeholder" name='placeholder' type="text" placeholder="Placeholder" change={handleChange} />
            <Button label={"Add Field"} type="submit" style={"bg-blue-600 hover:bg-blue-700 mt-10"}  click={onSubmit}  />
        </div>    
    </form>
  )
}

export default TForm