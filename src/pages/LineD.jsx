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
    تولید: 62185,
  },
  {
    name: "۲",
    تولید: 57325,
  },
  {
    name: "۳",
    تولید: 54362,
  },
  {
    name: "۴",
    تولید: 64120,
  },
  {
    name: "۵",
    تولید: 56854,
  },
  {
    name: "۶",
    تولید: 42365,
  },
  {
    name: "۷",
    تولید: 59685,
  },
  {
    name: "۸",
    تولید: 44698,
  },
  {
    name: "۹",
    تولید: 65320,
  },
  {
    name: "۱۰",
    تولید: 64125,
  },
  {
    name: "۱۱",
    تولید: 56854,
  },
  {
    name: "۱۲",
    تولید: 58763,
  },
  {
    name: "۱۳",
    تولید: 59685,
  },
  {
    name: "۱۴",
    تولید: 63274,
  },
  {
    name: "۱۵",
    تولید: 65320,
  },
  {
    name: "۱۶",
    تولید: 54960,
  },
];

const LineD = () => {
  return (
    <div>
      <div className="chart_container">
        <h2 className="h2_Reports">گزارش روزانه</h2>
        <ResponsiveContainer width="95%" aspect={2}>
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
              dataKey="تولید"
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
