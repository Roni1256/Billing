import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Table = ({ type, data, deleteProduct, editProduct, loading, add }) => {
  const [isquantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return (
      <div className="h-screen absolute top-0 left-0 w-full flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  const filteredData = data?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className=" ring-1 dark:ring-white ring-slate-700 bg-gray-50 rounded-lg p-1 max-w-[720px] overflow-auto">
        <div className="flex items-center justify-center p-4 border-b-2 bg-white">
          <input
            type="text"
            className="w-full sm:w-2/3 md:w-1/2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="h-full max-h-[400px] overflow-y-auto max-w-fit">
          <table className="min-w-full divide-y divide-gray-200 dark:text-slate-800">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase hidden sm:table-cell"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase"
                >
                  Quantity
                </th>
                {type === "admin" && (
                  <th
                    scope="col"
                    className="px-3 sm:px-6 py-3 text-center text-xs sm:text-sm font-bold uppercase"
                  >
                    Action
                  </th>
                )}
                {type === "bill" && (
                  <>
                    <th
                      scope="col"
                      className="px-3 sm:px-6 py-3 text-center text-xs sm:text-sm font-bold uppercase"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-bold uppercase"
                    >
                      Action
                    </th>
                  </>
                )}
              </tr>
            </thead>
            {data.length > 0 ? (
              <tbody className="divide-y divide-gray-200">
                {filteredData &&
                  filteredData.map((item) => (
                    <tr key={item._id} className="dark:text-slate-800">
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm font-medium">
                        {item.name}
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm">
                        ${item.price}
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm hidden sm:table-cell">
                        {item.description}
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-center">
                        {item.quantity}
                      </td>
                      {type === "admin" && (
                        <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm flex items-center justify-center gap-2 sm:gap-5">
                          <button
                            type="button"
                            onClick={() => deleteProduct(item._id)}
                            className="inline-flex items-center p-1.5 sm:p-2 text-sm font-semibold rounded-lg border border-transparent bg-red-700 hover:bg-red-800 focus:bg-red-900 text-white"
                          >
                            <MdDelete size={16} sm:size={20} />
                          </button>
                          <button
                            type="button"
                            onClick={() => editProduct(item._id)}
                            className="inline-flex items-center p-1.5 sm:p-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-700 hover:bg-blue-800 focus:bg-blue-900 text-white"
                          >
                            <BiEdit size={16} sm:size={20} />
                          </button>
                        </td>
                      )}
                      {type === "bill" && (
                        <>
                          <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm">
                            <input
                              type="number"
                              min={1}
                              max={50}
                              step={1}
                              defaultValue={1}
                              className="w-16 sm:w-20 h-8 border-2 rounded-lg text-black p-2 text-xs sm:text-sm"
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                          </td>
                          <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1.5 sm:p-2 rounded-lg block"
                              onClick={() => {
                                add(item, isquantity);
                                setQuantity(1);
                              }}
                            >
                              <IoIosAddCircle size={16} sm:size={20} />
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="5" className="py-4">
                    <h1 className="text-lg sm:text-xl font-bold text-center">
                      No data found!
                    </h1>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
