import React from "react";
import { useNavigate } from "react-router-dom";
import bill from "../images/bill.png";
import dash from "../images/dash.png";
import customer from "../images/customer.png";
import stock from "../images/stock.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8 z-30 overflow-hidden relative duration-300 ease-in-out transition-all">
        <section className="text-center duration-500 ease-in-out transition-opacity">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 dark:text-white">
            Simplify Your Billing Process
          </h2>
          <p className="mb-4 sm:mb-8 text-sm sm:text-base dark:text-gray-300">
            Manage your invoices and payments efficiently with our easy-to-use
            platform.
          </p>
          <img
            src={dash}
            alt="Billing Dashboard"
            className="mx-auto rounded-lg mb-4 sm:mb-6 w-full sm:w-3/4 md:w-1/2 shadow-xl ring-2 ring-slate-600/50 dark:ring-white transition-opacity"
          />
          <button
            className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 z-30 text-sm sm:text-base"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Get Started
          </button>
        </section>

        <section className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 duration-700 ease-in-out transition-opacity">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
            <img
              src={bill}
              alt="Feature 1"
              className="mb-3 sm:mb-4 w-16 sm:w-auto mx-auto"
            />
            <h3 className="text-base sm:text-lg font-bold dark:text-white">
              Easy Invoicing
            </h3>
            <p className="text-sm sm:text-base dark:text-gray-300">
              Create and send invoices in minutes.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
            <img
              src={customer}
              alt="Feature 2"
              className="mb-3 sm:mb-4 w-16 sm:w-auto mx-auto"
            />
            <h3 className="text-base sm:text-lg font-bold dark:text-white">
              Customer Tracking
            </h3>
            <p className="text-sm sm:text-base dark:text-gray-300">
              Keep track of all your customers.{" "}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
            <img
              src={stock}
              alt="Feature 3"
              className="mb-3 sm:mb-4 w-16 sm:w-auto mx-auto"
            />
            <h3 className="text-base sm:text-lg font-bold dark:text-white">
              Stock Management
            </h3>
            <p className="text-sm sm:text-base dark:text-gray-300">
              Manage your inventory with ease.
            </p>
          </div>
        </section>

        <section className="mt-12 sm:mt-16 bg-gray-50 dark:bg-gray-800 p-4 sm:p-8 rounded-lg duration-1000 ease-in-out transition-opacity">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center dark:text-white">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-blue-500 dark:bg-blue-600 p-1.5 sm:p-2 rounded-full">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg dark:text-white">
                  Secure & Reliable
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Your data is protected with enterprise-grade security
                  measures.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-blue-500 dark:bg-blue-600 p-1.5 sm:p-2 rounded-full">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg dark:text-white">
                  Fast & Efficient
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Save time with our automated billing and invoicing system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16 text-center duration-300 ease-in-out transition-opacity">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Join Us today and simplify your billing process.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 z-30 text-sm sm:text-base"
              onClick={() => {
                navigate("/auth");
              }}
            >
              Get Started
            </button>
          </div>
        </section>
        <div className="w-full overflow-hidden">
          <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-400/20 rounded-full filter blur-3xl duration-700 ease-in-out transition-all animate-circular-motion absolute bottom-0 right-5 sm:right-20" />
          <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-400/20 rounded-full filter blur-3xl ease-in-out transition-all animate-circular-motion absolute top-0 left-5 sm:left-20 duration-700" />
        </div>
      </main>
    </>
  );
};

export default Home;
