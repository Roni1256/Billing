
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';






const CustomerChart=({data})=>{
          return (
            <ResponsiveContainer width="100%" height="100%" minHeight={400}>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Dates" />
                <YAxis dataKey={"Customers"}/>
                <Tooltip formatter={(value, name, props) => [value, `Date: ${props.payload.Dates}`]} />
                <Legend />
                <Line type="monotone" dataKey="Customers" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>    );
  }


export default CustomerChart