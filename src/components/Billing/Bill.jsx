import React, { useEffect, useState } from "react";
import { useTimeData } from "../../hooks/useTimeData";
import { useInvoiceNumber } from "../../hooks/useInvoiceNumber";

const styles = {
  box: "bg-white ring-2 ring-gray-800 px-2 sm:px-3 text-slate-900 font-mono max-w-full overflow-x-auto",
  heading: "text-lg sm:text-xl font-bold",
  header: "text-center p-2 sm:p-3",
  address: "text-xs sm:text-sm font-semibold tracking-wider my-2",
  main: "mb-4 w-full overflow-x-auto",
  billNo: "text-base sm:text-lg mr-4 sm:mr-8 text-right font-bold",
  tableStyle: "w-full mt-3 sm:mt-5 max-w-[500px] min-w-[300px] ",
  tr: "border-b-2 border-dashed border-gray-700",
  th: "text-center text-sm sm:text-base p-1",
  td: "p-1 text-center text-sm sm:text-base",
  footTxt:
    "text-base sm:text-lg font-semibold text-center underline mb-2 sm:mb-3 mt-5 sm:mt-7",
};

const Bill = ({
  items = [],
  billno = useInvoiceNumber(),
  billData = {
    name: "xxx",
    phone: "xxxxxxxxxx",
    address: "xyxyxyx",
    state: "xxxxxxx",
    city: "xxxxxxx",
    pincode: "xxxxxx",
  },
  data = {},
}) => {
  const [dates, time] = useTimeData();
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const tot = items.reduce((acc, item) => {
      return acc + (item?.product?.price * item?.userquantity || 0);
    }, 0);
    setTotal(tot);
  };

  useEffect(() => {
    calculateTotal();
  }, [items]);

  const renderCustomerInfo = () => {
    if (
      !(
        billData?.name ||
        billData?.phone ||
        billData?.address ||
        billData?.state ||
        billData?.city ||
        billData?.pincode
      )
    )
      return null;

    return (
      <div className="text-left">
        <h4 className="text-sm sm:text-md font-semibold mt-2 sm:mt-3">
          Customer Information
        </h4>
        <p className="text-xs sm:text-sm">
          Name: {billData?.name}
          <br />
          Phone: {billData?.phone}
          <br />
          Address:{" "}
          {`${billData?.state || ""},${billData?.city || ""}-${
            billData?.pincode || ""
          }`}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.box}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{data?.company_name}</h1>
        <h3 className="text-sm sm:text-md font-bold">{data?.slogan}</h3>
        <p className={styles.address}>{data?.address}</p>
        <p className="text-xs sm:text-sm">Contact:{data?.phone_number}</p>
        {renderCustomerInfo()}
      </header>

      <main className={styles.main}>
        <span className="text-sm sm:text-md font-semibold">{dates}</span>
        <br />
        <span className="text-sm sm:text-md font-semibold">{time}</span>
        <h3 className={styles.billNo}>Bill No :{billno}</h3>
        <div className="overflow-x-auto">
          <table className={styles.tableStyle}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>S.no</th>
                <th className={`${styles.th} w-[30%]`}>Dishes</th>
                <th className={styles.th}>Price</th>
                <th className={styles.th}>Quantity</th>
                <th className={styles.th}>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr className={styles.tr} key={i}>
                  <td className={styles.td}>{i + 1}.</td>
                  <td className={styles.td}>{item?.product?.name}</td>
                  <td className={styles.td}>{item?.product?.price}.rs</td>
                  <td className={styles.td}>{item?.userquantity}</td>
                  <td className={styles.td}>
                    {(item?.product?.price || 0) * (item?.userquantity || 0)}.rs
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={`${styles.tr} flex justify-between text-base sm:text-lg font-semibold p-2`}
        >
          <h2>Total Amount</h2>
          <h2>{total}.rs</h2>
        </div>
      </main>
      <footer>
        <h1 className={styles.footTxt}>Thank You ! Visit Again !</h1>
      </footer>
    </div>
  );
};

export default Bill;
