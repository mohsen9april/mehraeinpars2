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
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
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
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <h2>next</h2>
    </div>
  );
};

export default Barcharts;
