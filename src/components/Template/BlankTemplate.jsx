import React from 'react'


const styles={
    container:'max-w-[500px] max-h-[600px] bg-[#Ffffff] text-black p-5 ring-1 ring-black h-full ',
    header:'w-full p-3 text-semibold flex flex-col gap-1',
    companyname:"text-xl font-bold",
    p:'text-sm  ',
    main:'w-full h-full flex flex-col gap-3 mt-3',
    section:'w-full h-full flex  gap-1 text-xs ',
    table:'w-full h-full text-left',
}
const BlankTemplate = ({c,h,data}) => {
  return (
    <div className={` ${styles.container} ${c?.w} ${c?.h} ${c?.bg} ${c?.textcolor}`}>
        <header className={`${styles.header} ${h?.w} ${h?.h} ${h?.bg} ${h?.textcolor}`}>
            <h1 className={`${styles.companyname} ${h?.textpos}`}>{data?.companyname}Company Title</h1>
            <p className={`${styles.p} ${h?.textpos}`}>{data?.address}Address </p>
            <p className={`${styles.p} ${h?.textpos}`}>{data?.email}Email </p>
            <p className={`${styles.p} ${h?.textpos}`}>{data?.phone}Phone </p>
        </header>
        <hr />
        <main className={`${styles.main}`}>
            <section className={`${styles.section} flex-row justify-between  `}>
                <div className="">
                    <p className={`${styles.p} ${h?.textpos} `}><b>Customer Name:</b> {data?.customername}roni </p>
                    <p className={`${styles.p} ${h?.textpos}`}><b>Customer Address:</b> {data?.customeraddress}address </p>
                    <p className={`${styles.p} ${h?.textpos}`}><b>Customer Email:</b>{data?.customeremail}email </p>
                    <p className={`${styles.p} ${h?.textpos}`}><b>Customer Phone:</b>{data?.customerphone}phone </p>
                </div>
                <div className="">
                    <p className={`${styles.p} ${h?.textpos} text-right`}><b>Bill Date:</b>{data?.website} </p>
                    <p className={`${styles.p} ${h?.textpos} text-right`}><b>Due Date:</b>{data?.website} </p>
                </div>
            </section>
            <hr />
            <section>
                <table className={`${styles.table} `}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product Name</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Total</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <hr />
            <section className={`${styles.section}`}>
                <p className={`${styles.p}  ${h?.textpos} `}><b>Total:</b> {data?.total} </p>
            </section>
        </main>
        <footer>
            <h1 className='text-lg text-center'> Thank you!</h1>
        </footer>
    </div>
  )
}

export default BlankTemplate

