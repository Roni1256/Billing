
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
 
   {
     name: '2023-01-01',
     Amount: 4000,
   },
   {
     name: '2023-02-01',
     Amount: 3000,
   },
   {
     name: '2023-03-01',
     Amount: 2000,
   },
   {
     name: '2023-04-01',
     Amount: 2780,
   },
   {
     name: '2023-05-01',
     Amount: 1890,
   },
   {
     name: '2023-06-01',
     Amount: 2390,
   },
   {
     name: '2023-07-01',
     Amount: 3490,
   } 
];

export default class Chart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Amount" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}