import React, { useEffect } from "react";
import Form from "../components/General Components/Form";
import Loader from "../components/General Components/Loader";
import { useState } from "react";
import Button from "../components/General Components/Button";
import { FaEdit, FaMoneyBillWave} from "react-icons/fa";
import axios from "axios";
import API_URLS from "../constants";
import Floats from "../components/General Components/Floats";
import { GoGraph, GoPeople } from "react-icons/go";
import { AiFillProduct } from "react-icons/ai";
import Bill from "../components/Billing/Bill";

const Profile = ({ data, isLoading, updates }) => {
  const [edit, setEdit] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: data.name,
    email: data.email,
    phone_number: data.phone_number,
    address: data.address
  });
  const [profit,setProfit]=useState(0)

  const getProfit=()=>{
    let total=0
    data?.customers.forEach(customer=>{
      total+=customer.totalPrice
    })
    setProfit(total)
  }
  useEffect(() => {
    getProfit()
  },[])
  const onChange = (e) => {
    const { name, value } = e.target;
    setUpdateData(prev=>({ ...prev, [name]: value }));
  };
  const [formData, setFormData] = useState([
    {
      label: "Name",
      type: "text",
      name: "name",
      value: updateData.name,
      change: onChange
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: updateData.email,
      change: onChange
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
      value: updateData.phone_number,
      change: onChange
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      value: updateData.address,
      change: onChange
    }
  ]);

  const floats=[
    {
      title:"Customers",
      text:`${data.customers.length}`,
      icon:<GoPeople size={40} />
    },
    {
      title:"Earnings",
      text:`${profit}`,
      icon:<GoGraph size={40} />
    },
    {
      title:"Sold",
      text:`${data.totalsales}`,
      icon:<AiFillProduct  size={40} />
    },
    {
      title:"Products",
      text:`${data.products.length}`,
      icon:<FaMoneyBillWave size={40} />
    }
  ]


  const updateProfile = async (e) => {
    e.preventDefault();
    console.log(updateData);
    
    try {
      await axios.patch(API_URLS.updateprofile + data._id, updateData);
      setEdit(false);
      updates();
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen absolute top-0 left-0 w-full flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center flex-col xl:grid xl:grid-cols-2 gap-4 md:gap-8 xl:justify-start">
      <div className="bg-purple-100 text-slate-800 p-4 md:p-10 rounded-lg w-full text-center shadow-lg shadow-slate-800/50 mt-5 col-span-3">
        <h1 className='text-xl md:text-3xl font-bold tracking-wide'>Welcome to Your Dashboard! <span className='font-extrabold text-purple-700'>{data.name}</span></h1>
      </div>
      
      <section className="p-3 md:p-5 h-fit ml-0 rounded-lg bg-white dark:bg-black/40 w-full max-w-[500px] xl:w-full dark:shadow-[0px_0px_5px_1px_#edf2f7] shadow-[0px_0px_6px_2px_#4a5568] ">
        <header className="text-lg md:text-xl font-bold mb-3">Personal Profile</header>
        <hr className="mb-4"/>
        {!edit && (
          <main className="flex items-center justify-between p-2 md:p-5">
            <div className="p-2 md:p-5 rounded-lg flex flex-col items-center justify-center w-full gap-3 md:gap-5">
              <div className="w-full">
                <h1 className="text-xl md:text-3xl font-bold my-2 md:my-3 text-center">{data.name}</h1>
                <p className="text-sm md:text-md text-center font-bold bg-gray-200 dark:bg-slate-800 rounded-lg my-2">{data.email}</p>
                <p className="text-sm md:text-md text-center my-2">{data.phone_number}</p>
                <p className="text-sm md:text-md text-center my-2">{data.address}</p>
              </div>
              <Button label="Update Profile" icon={<FaEdit size={20}/>} click={() => setEdit(!edit)}/>
            </div>
          </main>
        )}
        {edit && <Form data={formData} btnLabel="Update" submit={updateProfile}/>}
      </section>
      <section className="h-full w-full bg-white dark:bg-black/10 dark:shadow-[0px_0px_5px_1px_#edf2f7] shadow-[0px_0px_6px_2px_#4a5568] rounded-lg p-3 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="col-span-full">
          <header className="text-lg md:text-xl font-bold mb-3">Current Status</header>
          <hr className="mb-4"/>
        </div>
        {
          floats.map((float, index) => (
            <div className="flex justify-center" key={index}>
              <Floats text={float.text} title={float.title} icon={float.icon}/>
            </div>
          ))
        }
      </section>
      <section className="h-full w-full col-span-3 p-3 md:p-6">
          <h1 className="text-lg md:text-xl font-bold my-2 md:my-3 mb-2">Template</h1>
          <hr />
          <div className="mt-4 w-full max-w-[400px]">
            <Bill items={[]} data={data} />
          </div>
      </section>
    </div>  
    );
};

export default Profile;