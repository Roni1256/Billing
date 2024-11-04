import React,{useState,useEffect } from 'react'

export const InvoiceTable = ({data}) => {

    const [total,setTotal]=useState(0)
    const handleTotal=()=>{
        let tot=0
        data.map(product=>{
            tot+=product.price*product.quantity
        })
        setTotal(tot)
    }
    useEffect(()=>handleTotal());
  return (
    <>

       
            

<div class="  mx-5 my-5 rounded-md overflow-auto h-[400px] border-slate-700/70 border-[2px]">
    <table class="w-full text-sm text-left border-slate ">
        <thead class="text-xs text-white uppercase bg-slate-800 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((products,key)=>{
                    return <>
                    <tr class="bg-gray-100  even:bg-white border-b-slate-900  " key={key}>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-black">
                   {products.name}
                </th>
                <td class="px-6 py-4 ">
                    {products.price}
                </td>
                <td class="px-6 py-4">
                    {products.quantity}
                </td>
                <td class="px-6 py-4">
                    {products.price*products.quantity}
                </td>
            </tr>
                    </>
                })
            }
            

        </tbody>
    </table>
   
</div>
<div className="flex justify-end mx-20">
        <h1 className='text-2xl font-bold '>Total Amount-{total}</h1>
    </div>
        

    </>
  )
}
