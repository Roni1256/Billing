import React, { useState, useEffect } from "react";
import StockChart from "./StockChart";
import API_URLS from "../../constants";
import axios from "axios";
import Button from "../General Components/Button";
import { BiRefresh } from "react-icons/bi";

const StockMonitor = ({ data }) => {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState(data.products);
  const [currentProduct, setCurrentProduct] = useState({});
  const [dataSet, setDataSet] = useState([]);
  const [title, setTitle] = useState();
  const [year, setYear] = useState(new Date().getFullYear());

  const mapData = async () => {
    if (search !== "") {
      await setCurrentProduct(
        data.products.find((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      await setCurrentProduct(data.products[0]);
    }
    console.log(currentProduct);

    setTitle(currentProduct?.name);
    console.log(title);

    setDataSet([]);
    currentProduct.sold.map((item) => {
      setDataSet((prev) => [
        ...prev,
        {
          Dates: `Date:${item.createdAt.slice(
            5,
            10
          )}Time:${item.createdAt.slice(11, 16)}`,
          Sales: item.sold,
        },
      ]);
    });
    console.log(dataSet);
  };
  useEffect(() => {
    mapData();
  }, []);

  return (
    <div className="p-4 md:p-10 bg-white rounded-lg w-full max-w-[800px]  mx-auto  ">
      <h1 className="text-base md:text-lg text-slate-800 font-bold mb-3 md:mb-5">
        Monitor Stocks
      </h1>
      <div className="h-fit w-full flex  md:flex-row gap-2 md:gap-4 items-center mb-2">
        <input
          type="text"
          placeholder="Search for Product..."
          className="w-full px-3 py-1 rounded-lg ring-2 ring-slate-700/50 text-slate-800 focus:outline-none focus:ring-slate-800/70"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="flex gap-2 w-full md:w-auto">
          <Button label={"Search"} click={mapData} style={""} />
          <button
            className="text-slate-800 bg-gray-100 hover:bg-slate-200 p-2 rounded-lg duration-300 ease-in-out"
            onClick={mapData}
          >
            <BiRefresh size={20} className="md:w-10 md:h-10" />
          </button>
        </div>
      </div>
      <h1 className="text-xl md:text-2xl text-slate-600 font-bold my-2 p-2">
        {title}-{year}
      </h1>
      <StockChart data={dataSet} />
    </div>
  );
};

export default StockMonitor;
