import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Table = ({
  type,
  data,
  deleteProduct,
  editProduct,
  loading,
  add,
  quantity,
}) => {
  const [isquantity,setQuantity]=useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return (
      <div className="h-screen absolute top-0 left-0 w-full flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  const filteredData = data?.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
     <div
        className={`flex flex-col  w-full h-full ${
          type === "bill" ? "lg:w-[700px] xl:w-full" : "lg:w-[600px] xl:w-full"
        }`}
      >
        <div className=" overflow-x-auto w-full h-full ">
          <div className=" min-w-full inline-block align-middle w-full h-full">
            <div className="overflow-auto ring-1 dark:ring-white ring-slate-700   flex w-full flex-col bg-gray-50 ">
              <div className="flex items-center justify-center py-3 border-b-2 bg-white">
                <input
                  type="text"
                  className="w-1/2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <table className="w-full divide-y divide-gray-200 dark:text-slate-800 h-full ">
                <thead>
                  <tr className="bg-white">
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm  uppercase font-bold"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold  uppercase"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold uppercase"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold uppercase"
                    >
                      Quantity
                    </th>
                    {type === "admin" && (
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-sm font-bold  uppercase"
                      >
                        Action
                      </th>
                    )}
                    {type === "bill" && (
                      <>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-sm font-bold  uppercase"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-bold  uppercase"
                        >
                          Action
                        </th>
                      </>
                    )}
                  </tr>
                </thead>
                {data.length>0?<tbody className="divide-y divide-gray-200 overflow-auto h-full ">
                  {filteredData &&
                    filteredData.map((item) => {
                      return (
                        <>
                          <tr className=" dark:text-slate-800   ">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              ${item.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {item.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center ">
                              {item.quantity}
                            </td>
                            {type === "admin" && (
                              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex w-full  items-center justify-center gap-5">
                                <button
                                  type="button"
                                  onClick={() => {
                                    deleteProduct(item._id);
                                  }}
                                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  disabled:opacity-50 disabled:pointer-events-none bg-red-700 hover:bg-red-800 focus:bg-red-900 text-white p-2 "
                                >
                                  <MdDelete size={20}   />
                                </button>
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent   disabled:opacity-50 disabled:pointer-events-none bg-blue-700 hover:bg-blue-800 focus:bg-blue-900 text-white p-2 "
                                  onClick={() => {
                                    editProduct(item._id);
                                  }}
                                >
                                  <BiEdit size={20}/>
                                </button>
                              </td>
                            )}
                            {type === "bill" && (
                              <>
                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex w-full  items-center justify-center gap-5">
                                  <input
                                    type="number"
                                    min={1}
                                    max={50}
                                    step={1}
                                    defaultValue={1}
                                    className="w-full max-w-20 h-8 border-2 rounded-lg text-black p-2"
                                    onChange={(e) => {
                                      setQuantity(e.target.value);
                                    }}
                                  />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm w-fit  ">
                                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ">
                                    <IoIosAddCircle
                                      size={20}
                                      onClick={() => {
                                        add(item,isquantity);
                                        setQuantity(1);
                                      }}
                                    />
                                  </button>
                                </td>
                              </>
                            )}
                          </tr>
                        </>
                      );
                    })}
                </tbody>
                :
                <tbody className="  w-full flex items-center justify-center  ">
                  <h1 className="w-full text-xl font-bold my-5 text-center ">No data found!</h1>
                </tbody>
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;