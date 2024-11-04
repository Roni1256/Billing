import React from 'react'
import { useTimeData } from '../../hooks/useTimeData';

const styles = {
    header: "bg-gray-800 border-b p-4 flex items-center justify-between",
    headtext: "text-white text-2xl",
    section: "flex justify-between",
    main: "p-5",
    footer: "bg-gray-800 text-white p-4 flex justify-between items-center"
}

const Element = ({ label, info, style }) => {
    const labelStyle = "font-extrabold text-xs"
    const infoStyle = `text-gray-700 ${style} text-sm`
  
    return (
      <div className="mb-2">
        <label className={labelStyle}>{label}</label>
        <div className={infoStyle}>{info}</div>
      </div>
    )
}

const Invoice = ({ companyData,data = {
    name: 'xxx',
    phone: 'xxxxxxxxxx',
    address: 'xyxyxyx',
    state: 'xxxxxxx',
    city: 'xxxxxxx',
    pincode: 'xxxxxx'
}, invoiceno = '20xxxxxxxxxxxx', products=[] }) => {
    console.log(products);
    
    const total = products.reduce((sum, product) => sum + (product.product.quantity * product.product.price), 0);
    const [dates, time] = useTimeData()

    return (
      <div className="bg-white border rounded shadow text-slate-800">
        <header className={styles.header}>
          <h1 className={styles.headtext}>{companyData.company_name}</h1>
        </header>
        <main className={styles.main}>
          <section className={styles.section}>
            <div>
              <Element label="Name" info={data.name} />
              <Element label="Email Address" info={data.email} />
              <Element label="Mobile Number" info={data.phone} />
              <Element label="Address" info={data.address} />
            </div>
            <div>
              <Element label="Invoice Number" info={invoiceno} />
              <Element label="Invoice Date" info={dates} />
            </div>
          </section>
          <section>
                      <table className="w-full mt-8 border-collapse">
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
                              <td className="p-2">{product.product.name}</td>
                              <td className="p-2">{product.userquantity}</td>
                              <td className="p-2">${product.product.price}</td>
                              <td className="p-2">${product.product.quantity * product.product.price}</td>
                            </tr>
                          ))}
                          <tr className="font-bold">
                            <td className="p-2" colSpan="3">Total Amount</td>
                            <td className="p-2">${total}</td>
                          </tr>
                        </tbody>
                      </table>
          </section>
        </main>
        <footer className={styles.footer}>
          <div className="w-full">
            <strong className='text-xs'>Company Address</strong>
            <p className='text-sm tracking-wide '>{companyData.address}</p>
          </div>
          <span className="text-xl w-full text-right">Thank You!</span>
        </footer>
      </div>
    )
}

export default Invoice