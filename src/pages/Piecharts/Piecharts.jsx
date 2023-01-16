import React from "react";
import "./Piecharts.css";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const Piecharts = () => {
  const data = [
    { name: "شیفت صبح", value: 400 },
    { name: "شیفت عصر", value: 300 },
    { name: "شیفت شب", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="piecharts_container">
      <div class="left_piecharts">
        <h3>گزارش توقفات</h3>
        <br />
        <div>
          <ResponsiveContainer width={400} height={450} className="text-center">
            <PieChart width={400} height={400}>
              <Legend layout="vertical" verticalAlign="top" align="top" />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="right_piecharts">
        <h3>مصرف مواد شیمیایی </h3>
        <br />
        <br />
        <br />
        <PieChart width={1000} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx={200}
            cy={200}
            outerRadius={150}
            // fill="#8884d8"
            label
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data02}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={100}
            fill="#82ca9d"
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Piecharts;
