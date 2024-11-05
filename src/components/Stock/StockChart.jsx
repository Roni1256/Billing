  import React, { PureComponent, useEffect, useState } from 'react';
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  const StockChart=({data})=>{
  
      return (
        <div style={{ width: '100%', height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%" >
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
              <YAxis dataKey={"Sales"}/>
              <Tooltip formatter={(value, name, props) => [`${value}`, `${props.payload.Dates}`]}/>
              <Legend />
              <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>      );
    }

  export default StockChart