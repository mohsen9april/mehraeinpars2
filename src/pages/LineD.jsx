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
    name: "January",
    Iphone: 4000,
  },
  {
    name: "March",
    Iphone: 1000,
  },
  {
    name: "May",
    Iphone: 4000,
  },
  {
    name: "July",
    Iphone: 800,
  },
  {
    name: "October",
    Iphone: 1500,
  },
  {
    name: "January",
    Iphone: 4000,
  },
  {
    name: "March",
    Iphone: 1000,
  },
  {
    name: "May",
    Iphone: 4000,
  },
  {
    name: "July",
    Iphone: 800,
  },
  {
    name: "October",
    Iphone: 1500,
  },
];

const LineD = () => {
  return (
    <div>
      <h2>Chart</h2>
      <div className="chart_container">
        <h2 className="h2_Reports">گزارش روزانه</h2>
        <ResponsiveContainer width="90%" aspect={2}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 15,
              right: 30,
              left: 20,
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

export default LineD;
