import { useState } from "react";
import React from "react";
import Form from "../components/General Components/Form";
import axios from "axios";
import API_URLS from "../constants";
import CustomerMonitoring from "../components/Customer/CustomerMonitoring";
import { useNavigate } from "react-router-dom";
import Button from "../components/General Components/Button";

const Customers = ({ data, isLoading, updates }) => {
  const navigate = useNavigate();
  const [eData, setEdata] = useState({
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setEdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [currentCustomer, setCurrentCustomer] = useState({});
  const [showCurrent, setCurrent] = useState(false);
  const formData = [
    {
      label: "Subject",
      name: "subject",
      type: "text",
      placeholder: "Subject",
      value: "",
      change: handleChange,
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Title",
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
    e.preventDefault();
    console.log(eData);

    await axios
      .post(API_URLS.sendNotify + data._id, eData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const showDetails = (id) => {
    return () => {
      const customer = data.customers.find((customer) => {
        if (customer._id === id) {
          return customer;
        }
      });
      setCurrentCustomer(customer);
      setCurrent(true);
    };
  };

  return (
    <div className="relative p-3">
      <header className="">
        <h1 className="text-2xl md:text-3xl font-bold mt-4">
          Customers Management
        </h1>
      </header>
      <main className="flex flex-col justify-between items-center gap-5 my-8 w-full ">
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-14 justify-between items-center">
          <Form
            data={formData}
            formTitle="Notify Customers"
            btnLabel={"Send"}
            submit={onSend}
            style={"h-fit w-full md:w-auto"}
          />
          <CustomerMonitoring data={data} />
        </div>
        <div className="w-full p-3 md:p-5 rounded-lg bg-white text-slate-700">
          <h1 className="text-lg md:text-xl font-bold my-3 md:my-5">
            Customer Records
          </h1>
          <div className="flex flex-col gap-3">
            <div className="hidden md:block">
              <CustomerCard
                name="Name"
                email="Email"
                phone="Phone"
                address="Address"
                date="Date"
                time="Time"
                style={"bg-slate-800 text-white"}
              />
            </div>
            <div className="h-full max-h-[600px] overflow-auto p-2 md:p-3">
              {data.customers.map((customer) => {
                if (customer.email)
                  return (
                    <div className="mb-3 md:mb-0">
                      <div className="block md:hidden text-xs font-semibold mb-1">
                        Customer Information
                      </div>
                      <CustomerCard
                        name={customer.name ? customer.name : "N/A"}
                        email={customer.email ? customer.email : "N/A"}
                        phone={customer.phone ? customer.phone : "N/A"}
                        address={customer.address ? customer.address : "N/A"}
                        date={
                          customer.createdAt
                            ? customer.createdAt.slice(0, 10)
                            : "N/A"
                        }
                        time={
                          customer.createdAt
                            ? customer.createdAt.slice(11, 16)
                            : "N/A"
                        }
                        style={"cursor-pointer hover:bg-slate-200"}
                        click={showDetails(customer._id)}
                      />
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
        {showCurrent && (
          <Details
            data={currentCustomer}
            closeDetails={() => setCurrent(false)}
          />
        )}
      </main>
    </div>
  );
};

export default Customers;

function CustomerCard({
  name,
  email,
  phone,
  address,
  date,
  style,
  click,
  time,
}) {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row justify-between p-3 md:p-4 font-semibold gap-2 md:gap-8 text-xs md:text-sm h-fit rounded-lg ring-1 ring-slate-500 ${style}`}
        onClick={click}
      >
        <div className="flex md:hidden justify-between w-full">
          <span className="font-bold">Name:</span>
          <span>{name}</span>
        </div>
        <div className="flex md:hidden justify-between w-full">
          <span className="font-bold">Email:</span>
          <span>{email}</span>
        </div>
        <div className="flex md:hidden justify-between w-full">
          <span className="font-bold">Phone:</span>
          <span>{phone}</span>
        </div>
        <div className="flex md:hidden justify-between w-full">
          <span className="font-bold">Address:</span>
          <span>{address}</span>
        </div>
        <div className="flex md:hidden justify-between w-full">
          <span className="font-bold">Date:</span>
          <span>{date}</span>
        </div>
        <div className="flex md:hidden justify-between w-full">
          <span className="font-bold">Time:</span>
          <span>{time}</span>
        </div>
        <h1 className="hidden md:block text-md font-bold w-full text-center">
          {name}
        </h1>
        <p className="hidden md:block w-full text-center">{email}</p>
        <p className="hidden md:block w-full text-center">{phone}</p>
        <p className="hidden md:block w-full text-center">{address}</p>
        <p className="hidden md:block w-full text-center">{date}</p>
        <p className="hidden md:block w-full text-center">{time}</p>
      </div>
    </>
  );
}

function Details({ data, closeDetails }) {
  console.log(data);

  return (
    <>
      <div className="h-full absolute w-full top-0 -left-0 backdrop-blur-md flex items-center justify-center p-2 md:p-4">
        <div className="w-full max-w-[600px] h-fit bg-white rounded-lg shadow-sm p-3 md:p-8 text-sm md:text-base">
          <h1 className="text-lg md:text-2xl font-medium mb-3 md:mb-6 text-gray-800">
            {data?.email || "N/A"}
          </h1>
          <div className="h-px w-full bg-gray-100 mb-3 md:mb-6"></div>
          <ul className="space-y-3 md:space-y-6">
            <li className="text-gray-700">Name: {data?.name || "N/A"}</li>
            <li className="text-gray-700">Phone: {data?.phone || "N/A"}</li>
            <li className="text-gray-700">Address: {data?.address || "N/A"}</li>
            <li className="text-gray-700">
              Date: {data?.createdAt?.slice(0, 10) || "N/A"}
            </li>
            <li className="text-gray-700">
              Time: {data?.createdAt?.slice(11, 16) || "N/A"}
            </li>
            <li className="text-gray-700">
              Invoice Number: {data?.invoice_number || "N/A"}
            </li>

            <div className="overflow-x-auto">
              <table className="w-full mt-3 md:mt-6 text-xs md:text-base">
                <tr className="border-b">
                  <th className="py-2 md:py-3 text-left text-gray-600 font-bold">
                    Product
                  </th>
                  <th className="py-2 md:py-3 text-left text-gray-600 font-bold">
                    Price
                  </th>
                  <th className="py-2 md:py-3 text-left text-gray-600 font-bold">
                    Quantity
                  </th>
                  <th className="py-2 md:py-3 text-left text-gray-600 font-bold">
                    Subtotal
                  </th>
                </tr>
                {data?.products?.map((item) => (
                  <tr className="border-b">
                    <td className="py-2 md:py-3 text-gray-700">
                      {item?.name || "N/A"}
                    </td>
                    <td className="py-2 md:py-3 text-gray-700">
                      {item?.price || "N/A"}
                    </td>
                    <td className="py-2 md:py-3 text-gray-700">
                      {item?.userquantity || "N/A"}
                    </td>
                    <td className="py-2 md:py-3 text-gray-700">
                      {item?.price * item?.userquantity || "N/A"}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <li className="text-gray-700">
              Total Items: {data?.totalItems || "N/A"}
            </li>
            <li className="text-gray-700">
              Total Price: {data?.totalPrice || "N/A"}
            </li>
          </ul>
          <Button
            label={"Close"}
            style={"bg-red-600 hover:bg-red-700 mt-3 md:mt-5 w-full md:w-auto"}
            click={closeDetails}
          />
        </div>
      </div>
    </>
  );
}
