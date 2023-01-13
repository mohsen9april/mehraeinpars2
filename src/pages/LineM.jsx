import React from "react";
import "./LineD.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "فروردین",
    Iphone: 1629000,
  },
  {
    name: "اردیبهشت",
    Iphone: 1712000,
  },
  {
    name: "خرداد",
    Iphone: 1736000,
  },
  {
    name: "تیر",
    Iphone: 1623000,
  },
  {
    name: "مرداد",
    Iphone: 1798000,
  },
  {
    name: "شهریور",
    Iphone: 1564000,
  },
  {
    name: "مهر",
    Iphone: 1768000,
  },
  {
    name: "آبان",
    Iphone: 1643000,
  },
  {
    name: "آذر",
    Iphone: 1785000,
  },
];

const LineM = () => {
  return (
    <div>
      <div className="chart_container">
        <h2 className="h2_Reports">گزارش ماهیانه</h2>
        <ResponsiveContainer width="90%" aspect={2}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 25,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
            <XAxis dataKey="name" tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              cursor={true}
            />
            <Line
              type="monotone"
              dataKey="Iphone"
              stroke="#8884d8"
              strokeWidth="2"
              dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
              activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 5, r: 10 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineM;
