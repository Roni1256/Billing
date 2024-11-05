import React, { useEffect, useState } from "react";
import CustomerChart from "./CustomerChart";
const CustomerMonitoring = ({ data }) => {
  const [customers, setCustomers] = useState(data.customers);
  const [mapCustomer, setMapCustomer] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());

  const mapCustomers = () => {
    setMapCustomer([]);
    if (!customers || customers.length === 0) return;

    let tempCreation = customers[0].createdAt.slice(5, 16);
    let total = 1;
    let mappedData = [];

    for (let i = 1; i < customers.length; i++) {
      const creations = customers[i].createdAt.slice(5, 16);

      if (tempCreation === creations) {
        total++;
      } else {
        mappedData.push({
          Dates: tempCreation,
          Customers: total,
        });

        tempCreation = creations;
        total = 1;
      }
    }

    mappedData.push({
      Dates: tempCreation,
      Customers: total,
    });

    setMapCustomer(mappedData);
  };

  useEffect(() => {
    mapCustomers();
  }, []);

  return (
    <div className="p-4 md:p-10 bg-white rounded-lg w-full max-w-[800px] mx-auto mb-5 md:mb-10">
      <h1 className="text-base md:text-lg text-slate-800 font-bold mb-3 md:mb-5">
        Monitor Customers
      </h1>
      <h1 className="text-xl md:text-2xl text-slate-600 font-bold my-1 md:my-2 p-1 md:p-2">
        {year}
      </h1>
      <div className="h-fit">
        <CustomerChart data={mapCustomer} />
      </div>
    </div>
  );
};

export default CustomerMonitoring;
