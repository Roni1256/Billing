

import React from 'react'
import {AgCharts} from "ag-charts-react";

const { AgCharts } = agCharts;

// function formatNumber(value) {
//   value /= 1000_000;
//   return `${Math.floor(value)}M`;
// }

// const options = {
//   container: document.getElementById("myChart"),
//   data: getData(),
//   title: {
//     text: "Total Visitors to Museums and Galleries",
//   },
//   footnote: {
//     text: "Source: Department for Digital, Culture, Media & Sport",
//   },
//   series: [
//     {
//       type: "bar",
//       xKey: "year",
//       yKey: "visitors",
//       label: {
//         formatter: ({ value }) => formatNumber(value),
//       },
//       tooltip: {
//         renderer: ({ datum, xKey, yKey }) => {
//           return { title: datum[xKey], content: formatNumber(datum[yKey]) };
//         },
//       },
//     },
//   ],
//   axes: [
//     {
//       type: "category",
//       position: "bottom",
//       title: {
//         text: "Year",
//       },
//     },
//     {
//       type: "number",
//       position: "left",
//       title: {
//         text: "Total Visitors",
//       },
//       label: {
//         formatter: ({ value }) => formatNumber(value),
//       },
//     },
//   ],
// };

// AgCharts.create(options);

const Chart = () => {
  return (
    <div>Chart</div>
  )
}

export default Chart