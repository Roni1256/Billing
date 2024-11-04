import React, { useState } from 'react'
import Button from '../components/General Components/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate=useNavigate()
  const [isAuth,setAuth]=useState(false)
  return (
    <>

   <main class="max-w-7xl mx-auto px-4 py-8">
        <section class="text-center">
            <h2 class="text-2xl font-semibold mb-4">Simplify Your Billing Process</h2>
            <p class="mb-8">Manage your invoices and payments efficiently with our easy-to-use platform.</p>
            <img src="https://via.placeholder.com/600x400" alt="Billing Dashboard" class="mx-auto rounded-lg shadow-lg mb-6" />
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
        </section>

        <section class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow">
                <img src="https://via.placeholder.com/150" alt="Feature 1" class="mb-4" />
                <h3 class="text-lg font-bold">Easy Invoicing</h3>
                <p>Create and send invoices in minutes.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
                <img src="https://via.placeholder.com/150" alt="Feature 2" class="mb-4" />
                <h3 class="text-lg font-bold">Customer Tracking</h3>
                <p>Keep track of all your customers. </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
                <img src="https://via.placeholder.com/150" alt="Feature 3" class="mb-4" />
                <h3 class="text-lg font-bold">Stock Management</h3>
                <p>Manage your inventory with ease.</p>
            </div>
        </section>

        <section class="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-6 text-center">Why Choose Us?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex items-start space-x-4">
                    <div class="bg-blue-500 p-2 rounded-full">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Secure & Reliable</h3>
                        <p class="text-gray-600">Your data is protected with enterprise-grade security measures.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="bg-blue-500 p-2 rounded-full">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Fast & Efficient</h3>
                        <p class="text-gray-600">Save time with our automated billing and invoicing system.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-16 text-center">
            <h2 class="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
            <p class="mb-8 text-gray-600">Join thousands of businesses that trust us with their billing needs.</p>
            <div class="flex justify-center space-x-4">
                <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Start Free Trial</button>
                <button class="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50">Contact Sales</button>
            </div>
        </section>
    </main>


  </>
  )
}

export default Home