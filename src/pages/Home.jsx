import React, { useState } from 'react'
import Button from '../components/General Components/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate=useNavigate()
  const [isAuth,setAuth]=useState(false)
  return (
    <>
    <div className="p-10  flex h-screen items-center justify-center w-full lg:px-32  flex-col lg:flex-row">
        <div className="flex flex-col lg:px-20 h-full  items-center justify-center text-center lg:text-left z-30">
            <h1 className='text-3xl font-bold  w-full '>Effortless Billing & Invoice Management</h1>
            <p className='text-md  w-full mt-5'>
            The ultimate solution for all your invoicing and billing needs. Whether you're a freelancer, small business owner, or enterprise, our platform is designed to simplify your financial workflow.</p>
            <div className="w-full items-start mt-10 z-30 ">

            <Button label={"Get Started"} click={()=>{Navigate(isAuth?"/profile":"/auth")}} />
            </div>
        </div>
        <div className="w-full h-full self-center justify-center items-center flex absolute lg:relative z-0">
            <div className="w-[300px] h-[300px] rounded-full bg-purple-400/50 filter blur-3xl" />
        </div>
    </div>
    </>
  )
}

export default Home