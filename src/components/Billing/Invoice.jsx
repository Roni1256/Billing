import React from "react";
import { useTimeData } from "../../hooks/useTimeData";
import { useInvoiceNumber } from "../../hooks/useInvoiceNumber";
const styles = {
  header:
    "bg-gray-800 border-b p-2 md:p-4 flex flex-col md:flex-row items-center justify-between",
  headtext: "text-white text-xl md:text-2xl",
  section: "flex flex-col md:flex-row justify-between gap-4",
  main: "p-3 md:p-5",
  footer:
    "bg-gray-800 text-white p-3 md:p-4 flex flex-col md:flex-row justify-between items-center gap-2",
};

const Element = ({ label, info, style }) => {
  const labelStyle = "font-extrabold text-xs";
  const infoStyle = `text-gray-700 ${style} text-sm`;

  return (
    <div className="mb-2">
      <label className={labelStyle}>{label}</label>
      <div className={infoStyle}>{info}</div>
    </div>
  );
};

const Invoice = ({
  companyData,
  data = {
    name: "xxx",
    phone: "xxxxxxxxxx",
    address: "xyxyxyx",
    state: "xxxxxxx",
    city: "xxxxxxx",
    pincode: "xxxxxx",
  },
  invoiceno = useInvoiceNumber(),
  products = [],
  
}) => {
  console.log(products);

  const total = products.reduce(
    (sum, product) => sum + product.product.quantity * product.product.price,
    0
  );
  const [dates, time] = useTimeData();

  return (
    <div className="bg-white border rounded shadow text-slate-800 lg:max-w-[500px] overflow-x-auto" >
      <header className={styles.header}>
        <h1 className={styles.headtext}>{companyData?.company_name}</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <div>
            <Element label="Name" info={data?.name} />
            <Element label="Email Address" info={data?.email} />
            <Element label="Mobile Number" info={data?.phone} />
            <Element label="Address" info={data?.address} />
          </div>
          <div>
            <Element label="Invoice Number" info={invoiceno} />
            <Element label="Invoice Date" info={dates} />
          </div>
        </section>
        <section className="overflow-x-auto">
          <table className="w-full mt-8 border-collapse min-w-[300px]">
            <thead className="bg-gray-100 text-slate-800">
              <tr>
                <th className="p-2 text-left">Item</th>
                <th className="p-2 text-left">Quantity</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{product?.product.name}</td>
                  <td className="p-2">{product?.userquantity}</td>
                  <td className="p-2">${product?.product.price}</td>
                  <td className="p-2">
                    ${product?.product.userquantity * product?.product.price}
                  </td>
                </tr>
              ))}
              <tr className="font-bold text-sm">
                <td className="p-2" colSpan="3">
                  Total Amount
                </td>
                <td className="p-2">${total}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className="w-full">
          <strong className="text-xs">Company Address</strong>
          <p className="text-sm tracking-wide">{companyData?.address}</p>
        </div>
        <span className="text-base md:text-xl w-full text-center md:text-right">
          Thank You!
        </span>
      </footer>
    </div>
  );
};

export default Invoice;
