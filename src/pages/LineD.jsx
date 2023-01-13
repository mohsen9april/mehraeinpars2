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
    name: "۱",
    Iphone: 62185,
  },
  {
    name: "۲",
    Iphone: 57325,
  },
  {
    name: "۳",
    Iphone: 54362,
  },
  {
    name: "۴",
    Iphone: 64120,
  },
  {
    name: "۵",
    Iphone: 56854,
  },
  {
    name: "۶",
    Iphone: 42365,
  },
  {
    name: "۷",
    Iphone: 59685,
  },
  {
    name: "۸",
    Iphone: 44698,
  },
  {
    name: "۹",
    Iphone: 65320,
  },
  {
    name: "۱۰",
    Iphone: 64125,
  },
  {
    name: "۱۱",
    Iphone: 56854,
  },
  {
    name: "۱۲",
    Iphone: 58763,
  },
  {
    name: "۱۳",
    Iphone: 59685,
  },
  {
    name: "۱۴",
    Iphone: 63274,
  },
  {
    name: "۱۵",
    Iphone: 65320,
  },
  {
    name: "۱۶",
    Iphone: 54960,
  },
];

const LineD = () => {
  return (
    <div>
      <div className="chart_container">
        <h2 className="h2_Reports">گزارش روزانه</h2>
        <ResponsiveContainer width="90%" aspect={2}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 15,
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
              strokeWidth="3"
              dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 4 }}
              activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 5, r: 10 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineD;
