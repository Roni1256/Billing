import React from "react";
import Floats from "../components/General Components/Floats";
import { FaAngleRight, FaMoneyBillWave } from "react-icons/fa";
import Chart from "../components/Chart";
import { FaAngleLeft } from "react-icons/fa";
const DashHero = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <>
        <div className="h-screen absolute top-0 left-0 w-full flex items-center justify-center bg-white">
          <Loader />
        </div>
      </>
    );
  }
  return (
    <div>
      <section className=" mt-10 flex flex-col  gap-10 ">
        <div className="bg-purple-100 text-slate-800 p-10 rounded-lg w-full text-center shadow-lg shadow-slate-800/50">
          <h1 className="text-3xl font-bold tracking-wide ">
            Welcome to Your Dashboard !{" "}
            <span className="font-extrabold text-purple-700">{data.name}</span>
          </h1>
        </div>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4  ">
          <Floats
            text={"10000"}
            title="Total Balance"
            icon={<FaMoneyBillWave size={40} />}
          />
          <Floats
            text={"10000"}
            title="Total Balance"
            icon={<FaMoneyBillWave size={40} />}
          />
          <Floats
            text={"10000"}
            title="Total Balance"
            icon={<FaMoneyBillWave size={40} />}
          />
          <Floats
            text={"10000"}
            title="Total Balance"
            icon={<FaMoneyBillWave size={40} />}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="flex  gap-3 bg-white  max-w-[800px] xl:w-[800px] min-w-[500px]  h-[500px] rounded-lg p-5 shadow-lg shadow-slate-800/50">
            <button className="text-slate-600 hover:text-purple-500">
              <FaAngleLeft size={30} />
            </button>
            <div className="w-full h-full overflow-auto">
              <h1 className="text-2xl font-bold text-slate-600  ">
                Profit and Loss
              </h1>
              <hr className="my-5 mt-2" />
              <Chart />
            </div>
            <button className="text-slate-600 hover:text-purple-500">
              <FaAngleRight size={30} />
            </button>
          </div>
        </div>
        ``
      </section>
    </div>
  );
};

export default DashHero;
