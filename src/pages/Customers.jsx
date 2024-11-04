import { useState } from "react";
import React from "react";
import Form from "../components/General Components/Form";
import Table from "../components/General Components/Table";
import axios from "axios";
import API_URLS from "../constants";
const Customers = ({ data, isLoading, updates }) => {
  const [eData, setEdata] = useState({
    subject:"",
    message:""
  });
  const handleChange = (e) => {
    setEdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const formData = [
    // {
    //   label: "Customer's Email",
    //   name: "customer_email",
    //   type: "email",
    //   placeholder: "Comma sepearated,",
    //   value: "",
    //   change: handleChange,
    // },
    {
      label: "Subject",
      name: "subject",
      type: "text",
      placeholder: "Subject",
      value: "",
      change: handleChange,
    },
    {
      label: "Message",
      name: "message",
      type: "textarea",
      placeholder: "Write the Message",
      value: "",
      change: handleChange,
    },
  ];

  const onSend = async (e) => {
    e.preventDefault()
    console.log(eData);
    
    await axios
      .post(API_URLS.sendNotify+data._id, eData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div className="">
      <header className="">
        <h1 className="text-3xl font-bold mt-4">Customers Management</h1>
      </header>
      <main className="flex flex-col justify-between items-center gap-5 my-8">
        <div className="max-w-[800px] w-full">
          <Form
            data={formData}
            formTitle="Notify Customers"
            btnLabel={"Send"}
            submit={onSend}
          />
        </div>
        <div className="w-full p-5 rounded-lg bg-white  text-slate-700">
          <h1 className="text-xl font-bold my-5">Customer Records</h1>
          <div className="flex flex-col gap-3">
            <CustomerCard
              name="Name"
              email="Email"
              phone="Phone"
              address="Address"
              date="Date"
              style={'bg-slate-800 text-white'}
            />
            {data.customers.map((customer) =>{ 
              if(customer.name) 
              return(
              <CustomerCard
                name={customer.name?customer.name:"N/A"}
                email={customer.email?customer.email:"N/A"}
                phone={customer.phone?customer.phone:"N/A"}
                address={customer.address?customer.address:"N/A"}
                date={customer.createdAt?customer.createdAt.slice(0,10):"N/A"}
              />
            )
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customers;

function CustomerCard({ name, email, phone, address, date,style }) {
  return (
    <>
      <div className={`flex  justify-between p-4 font-semibold gap-8 text-sm h-fit rounded-lg ring-1 ring-slate-500 ${style}`}>
        <h1 className="text-md font-bold w-full">{name}</h1>
        <p className=" w-full">{email}</p>
        <p className=" w-full ">{phone}</p>
        <p className=" w-full">{address}</p>
        <p className=" w-full">{date}</p>
      </div>
    </>
  );
}
