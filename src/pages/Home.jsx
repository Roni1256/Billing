import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bill from '../images/bill.png'
import dash from '../images/dash.png'
import customer from '../images/customer.png'
import stock from '../images/stock.png'
import company from '../images/company.png'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>

   <main className="max-w-7xl mx-auto px-4 py-8 z-30 overflow-hidden relative">
        <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Simplify Your Billing Process</h2>
            <p className="mb-8 dark:text-gray-300">Manage your invoices and payments efficiently with our easy-to-use platform.</p>
            <img src={dash} alt="Billing Dashboard" className="mx-auto rounded-lg mb-6 w-1/2 shadow-xl ring-2 ring-slate-600/50 dark:ring-white " />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 z-30" onClick={()=>{navigate('/auth')}}>Get Started</button>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <img src={bill} alt="Feature 1" className="mb-4" />
                <h3 className="text-lg font-bold dark:text-white">Easy Invoicing</h3>
                <p className="dark:text-gray-300">Create and send invoices in minutes.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <img src={customer} alt="Feature 2" className="mb-4" />
                <h3 className="text-lg font-bold dark:text-white">Customer Tracking</h3>
                <p className="dark:text-gray-300">Keep track of all your customers. </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <img src={stock} alt="Feature 3" className="mb-4" />
                <h3 className="text-lg font-bold dark:text-white">Stock Management</h3>
                <p className="dark:text-gray-300">Manage your inventory with ease.</p>
            </div>
        </section>

        <section className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center dark:text-white">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 dark:bg-blue-600 p-2 rounded-full">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 dark:text-white">Secure & Reliable</h3>
                        <p className="text-gray-600 dark:text-gray-300">Your data is protected with enterprise-grade security measures.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 dark:bg-blue-600 p-2 rounded-full">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 dark:text-white">Fast & Efficient</h3>
                        <p className="text-gray-600 dark:text-gray-300">Save time with our automated billing and invoicing system.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Ready to Get Started?</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-300">Join Us today and simplify your billing process.</p>
            <div className="flex justify-center space-x-4">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 z-30" onClick={()=>{navigate('/auth')}}>Get Started</button>
         
            </div>
        </section>
        <div className="w-full overflow-hidden  ">
      <div className="w-[500px] h-[500px] bg-purple-400/20 rounded-full  filter blur-3xl duration-700 ease-in-out transition-all  animate-circular-motion absolute bottom-0 right-20 "/>
      <div className="w-[500px] h-[500px] bg-blue-400/20 rounded-full  filter blur-3xl  ease-in-out transition-all  animate-circular-motion absolute top-0 left-20 duration-700"/>
        </div>
    </main>
    
    
  </>
  )
}

export default Home