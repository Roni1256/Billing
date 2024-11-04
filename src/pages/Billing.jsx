import React, { useEffect, useState } from "react";
import Table from "../components/General Components/Table";
import Form from "../components/General Components/Form";
import Button from "../components/General Components/Button";
import Bill from "../components/Billing/Bill";
import axios from "axios";
import API_URLS from "../constants";
import {BsArrowClockwise, BsSave, BsTrash} from 'react-icons/bs'
import { useInvoiceNumber } from "../hooks/useInvoiceNumber";
import Invoice from "../components/Billing/Invoice";
import { IoMdCloseCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Billing = ({ data, isLoading,updates }) => {
  const [isDelete,setIsDelete]=useState(false)
  const [isInvoice, setToggleInvoice] = useState(data.invoicetype === "invoice" ? true : false);
  
  const [customerData, setCustomerData] = useState({
    invoice_number: useInvoiceNumber(),
    name: "",
    email: "",
    phone: "",
    products: [],
    address:"",
    totalPrice: 0,
    totalItems: 0,
  });
  const [productData, setProductData] = useState([]);

  const formMessages = {
    initial: {
      message: "",
      color: "",
    },
    add: {
      message: "Bill Added Successfully",
      color: "text-green-500",
    },
    emptyField: {
      message: "Please fill the fields properly",
      color: "text-red-500",
    },
    delete: {
      message: "Bill Deleted Successfully",
      color: "text-red-500",
    },
    update: {
      message: "Bill Updated Successfully",
      color: "text-green-500",
    },
  };
  const [formMessage, setFormMessage] = useState(formMessages.initial);

  const handleChanges = (e) => {
    setFormMessage(formMessages.initial);
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const submitForm = async(e) => {
    e.preventDefault();
    if (customerData.products.length === 0) {
      setFormMessage(formMessages.emptyField);
      return;
    }console.log(customerData);

    if(customerData.email===""){
      setFormMessage(formMessages.emptyField);
      return;
    }

    if(isInvoice && (customerData.name==="" || customerData.email==="" || customerData.phone==="" || customerData.phone.length !== 10 || customerData.address==='')) {
      setFormMessage(formMessages.emptyField);
      return;
    }
    await axios
      .post(API_URLS.addcustomer+data._id, customerData)
      .then((res) => {
        setCustomerData({
          invoice_number:useInvoiceNumber(),
          name: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          pincode: "",
          products: [],
          totalPrice: 0,
          totalItems: 0,
        });
        setFormMessage(formMessages.add);
        updates()
      })
      .catch((err) => {
        console.log(err);
      })
  };
  const formData = [
    {
      label: "Customer",
      type: "text",
      value: customerData.name,
      name: "name",
      change: handleChanges,
    },
    {
      label: "Email",
      type: "email",
      value: customerData.email,
      name: "email",
      change: handleChanges,
    },
    {
      label: "Phone",
      type: "number",
      value: customerData.phone,
      name: "phone",
      change: handleChanges,
    },
    {
      label:"Address",
      type:"text",
      value:customerData.address,
      name:"address",
      change:handleChanges
    }
    
  ];


  const addProduct = (product, userquantity) => {
    try {
      const existingProduct = productData.find(item => item.product._id === product._id);
      
      if (existingProduct) {
        const newQuantity = existingProduct.userquantity + userquantity;
        setProductData(productData.map(item => 
          item.product._id === product._id 
            ? { ...item, userquantity: newQuantity }
            : item
        ));
        
        setCustomerData((prev) => ({
          ...prev,
          invoice_number: prev.invoice_number,
          products: prev.products.map(p => 
            p._id === product._id 
              ? { ...p, userquantity: newQuantity }
              : p
          ),
          totalPrice: prev.totalPrice + (product.price * userquantity),
          totalItems: prev.totalItems + userquantity,
        }));
      } else {
        setProductData([...productData, { product, userquantity }]);
        setCustomerData((prev) => ({
          ...prev,
          invoice_number: prev.invoice_number,
          products: [...prev.products, {
            _id: product._id,
            name: product.name,
            price: product.price,
            userquantity: userquantity
          }],
          totalPrice: prev.totalPrice + (product.price * userquantity),
          totalItems: prev.totalItems + userquantity,
        }));
      }
    } catch(error) {
      console.log(error);
    }
    console.log(customerData);
  };  
  const deleteProduct = (product) => {
    const productToDelete = productData.find(item => item.product.id === product.id);
    if (productToDelete) {
      setCustomerData(prev => ({
        ...prev,
        products: prev.products.filter(p => p.id !== product.id),
        totalPrice: prev.totalPrice - (product.price * productToDelete.userquantity),
        totalItems: prev.totalItems - productToDelete.userquantity
      }));
      setProductData(productData.filter((item) => item.product.id !== product.id));
    }
  };

  
  return (
    <>
      <h1 className=" mt-5 text-3xl font-bold  tracking-wide  ">
        Prepare your <span className="text-purple-500 text-3xl">Bill</span>{" "}
        here!
      </h1>
      <div className="w-full py-5  flex flex-col xl:flex-row gap-8 ">
        <div className="w-full flex flex-col gap-10 ">
          {isInvoice && 
            <Form
              formTitle={"Customer Details"}
              data={formData}
              message={formMessage}
              submit={submitForm}
              
            />
          }

          <>
              <Form 
                formTitle={"Customer's Email"}
                data={[{
                  label: "Email",
                  type: "text",
                  placeholder: "Enter Email",
                  name: "email",
                  value: customerData.email,
                  change: handleChanges
                }]}
                message={formMessage}
              />
              <Table
                type="bill"
                data={data.products}
                loading={isLoading}
                add={addProduct}
              />
          </>
            
          
          
        </div>

        <div className="w-full flex flex-col items-center justify-center ">
          <div className="max-h-[500px] w-full overflow-auto " >
            {isInvoice?
            <Invoice data={customerData} products={productData} companyData={data} invoiceno={customerData.invoice_number}/>:
            <Bill items={productData} billno={customerData.invoice_number} billData={customerData} data={data}/> 
            }
          </div>
          <div className="flex my-5 gap-5 ">
          <Button
              label="Reset"
              click={() =>{
                setProductData([])
                setCustomerData({
                  name: "",
                  email: "",
                  phone: "",
                  state: "",
                  city: "",
                  pincode: "",
                  products: [],
                  totalPrice: 0,
                  totalItems: 0,
                })
              }
              }
              icon={<BsArrowClockwise size={20}/>}
              style={"bg-red-500 hover:bg-red-700 focus:ring-red-300"}
            />
            <Button
              label="Save"
              click={submitForm}
              style={"bg-green-500 hover:bg-green-700 focus:ring-green-300"}
              icon={<BsSave size={20}/>}

            />
            <Button
              label="Delete Product"
              click={() => setIsDelete(true)}
              style={"bg-red-500 hover:bg-red-700 focus:ring-red-300 "}
              icon={<BsTrash size={20}/>}
            />
          </div>
         
        </div>
      </div>
      { isDelete && <div className="h-screen w-full absolute top-0 left-0 backdrop-blur-md flex items-center justify-center ">
        <div className="bg-white p-5 rounded-lg flex flex-col items-center justify-center gap-5 text-slate-700 w-[400px]">
          <header className="flex items-center justify-between w-full">
            <span>Delete Product</span>
            <button className="text-red-500 hover:text-red-700" onClick={() => setIsDelete(false)}><IoMdCloseCircle size={30} /></button>
          </header>
          <main className=" flex flex-col gap-3 w-full">
            {productData.map((product) => (  
              <div className="flex w-full items-center justify-between text-slate-800 font-semibold ring-1 ring-slate-900/40 p-2 rounded-lg">
                <span>{product.name}</span>
                <button className="text-red-500 hover:text-red-700" onClick={deleteProduct(product)}><MdDelete size={20}/></button>
              </div>
            ))}
          </main>
        </div>
      </div>}
    </>
  );
};

export default Billing;