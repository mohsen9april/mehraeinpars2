import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
const pdata = [
  {
    name: "برق و ابزار دقیق",
    کل: 25,
    صیح: 15,
    عصر: 8,
    شب: 8,
  },
  {
    name: "مکانیک",
    کل: 13,
    صیح: 15,
    عصر: 8,
    شب: 8,
  },
  {
    name: "فرایند تولید",
    کل: 13,
    صیح: 15,
    عصر: 8,
    شب: 8,
  },
  {
    name: "کنترل کیفیت",
    کل: 13,
    صیح: 15,
    عصر: 8,
    شب: 8,
  },
  {
    name: "شبکه و قطع برق",
    کل: 13,
    صیح: 15,
    عصر: 8,
    شب: 8,
  },
  {
    name: "سایر",
    کل: 13,
    صیح: 15,
    عصر: 8,
    شب: 8,
  },
];

const Barcharts = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          isAnimationActive={false}
          width={500}
          height={300}
          data={pdata}
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
          <Bar dataKey="کل" fill="#8884d8" />
          <Bar dataKey="صیح" fill="#82ca9d" />
          <Bar dataKey="عصر" fill="#8884d8" />
          <Bar dataKey="شب" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barcharts;
