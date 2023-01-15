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
    تولید: 1629000,
  },
  {
    name: "اردیبهشت",
    تولید: 1712000,
  },
  {
    name: "خرداد",
    تولید: 1736000,
  },
  {
    name: "تیر",
    تولید: 1623000,
  },
  {
    name: "مرداد",
    تولید: 1798000,
  },
  {
    name: "شهریور",
    تولید: 1564000,
  },
  {
    name: "مهر",
    تولید: 1768000,
  },
  {
    name: "آبان",
    تولید: 1643000,
  },
  {
    name: "آذر",
    تولید: 1785000,
  },
];

const LineM = () => {
  return (
    <div>
      <div className="chart_container">
        <h2 className="h2_Reports">گزارش ماهیانه</h2>
        <ResponsiveContainer width="95%" aspect={2}>
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
              dataKey="تولید"
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
