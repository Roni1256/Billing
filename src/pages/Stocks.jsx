import React from "react";
import Table from "../components/General Components/Table";
import Form from "../components/General Components/Form";
import { useState } from "react";
import API_URLS from "../constants";
import axios from "axios";
import { useEffect } from "react";
import Loader from "../components/General Components/Loader";
import StockMonitor from "../components/Stock/StockMonitor";

const Stocks = ({ data, isLoading, updates }) => {
  const [resData, setResData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    quantity:1,
  });
  const [isEdit,setEdit]=useState(false)
  const [allProducts, setProducts] = useState([]);

  
  const formMessages = {
    initial: {
      message: "",
      color: "",
    },
    add: {
      message: "Product Added Successfully",
      color: "text-green-500",
    },
    emptyField: {
      message: "Please fill all the fields",
      color: "text-red-500",
    },
    delete: {
      message: "Product Deleted Successfully",
      color: "text-red-500",
    },
    update: {
      message: "Product Updated Successfully",
      color: "text-green-500",
    },
  };
  const [formMessage, setFormMessage] = useState(formMessages.initial);
  const handleChanges = (e) => {
    setFormMessage(formMessages.initial);
    setResData({ ...resData, [e.target.name]: e.target.value });
  };

  let formData = [
    {
      label: "Product Name",
      type: "text",
      value: resData.name,
      name: "name",
      change: handleChanges,
    },
    {
      label: "Description",
      type: "text",
      value: resData.description,
      name: "description",
      change: handleChanges,
    },
    {
      label: "Price",
      type: "number",
      value: resData.price,
      name: "price",
      change: handleChanges,
    },
    {
      label: "Category",
      type: "text",
      value: resData.category,
      name: "category",
      change: handleChanges,
    },
    {
      label: "Quantity",
      type: "number",
      value: resData.quantity,
      name: "quantity",
      change: handleChanges,
    }
  ];
  const submitForm = async (e) => {
    console.log(resData);
    
    e.preventDefault();
    if (
      !resData.name ||
      !resData.price ||
      !resData.category ||
      !resData.quantity ||
      !resData.description
    ) {
      setFormMessage(formMessages.emptyField);
      return;
    }
    await axios
      .post(API_URLS.addproduct + data._id, resData)
      .then((res) => {
        
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setResData({
          name: "",
          description: "",
          price: 0,
          category: "",
          quantity: 1,
        });
        setFormMessage(formMessages.add);
        getAllProducts();
      });
  };
  const getAllProducts = async (e) => {
    await axios
      .get(API_URLS.getproducts + data._id)
      .then((res) => {

        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const deleteProduct = async (id) => {
    await axios
      .delete(API_URLS.deleteproduct + data._id + "/" + id)
      .then((res) => {
        getAllProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editProduct = async (id) => {

    
    await axios.get(API_URLS.getproduct + data._id + "/" + id)
    .then((res) => {

      setResData(res.data);
      setEdit(true)
    })
    .catch((err) => {
      console.log(err);
    });
    // await axios
    //   .patch(API_URLS.updateproduct + data._id + "/" + id, resData)
    //   .then((res) => {
    //     setFormMessage(formMessages.update);
    //     getAllProducts();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  if (isLoading) {
    return (
      <>
        <div className="h-screen absolute top-0 left-0 w-full flex items-center justify-center bg-white">
          <Loader />
        </div>
      </>
    );
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className=" w-full  ">
        <h1 className="text-3xl font-bold my-10 tracking-wide xl:col-span-2">
          Manage your <span className="text-purple-500 text-3xl ">Stocks</span>{" "}
          here!
        </h1>
        <div className="my-5 flex items-center justify-center">
          <StockMonitor data={data}/>
        </div>
        <div className="flex xl:flex-row flex-col gap-8 w-full overflow-auto">

          <div className=" max-w-[500px] min-w-[400px] flex justify-center h-fit">
            <Form
              formTitle={"Add Stock"}
              data={formData}
              submit={submitForm}
              message={formMessage}
              btnLabel={"Add Stock"}
            />
          </div>
          <div className=" w-full  ">
            <Table type={"admin"} data={allProducts} deleteProduct={deleteProduct} editProduct={editProduct}/>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Stocks;