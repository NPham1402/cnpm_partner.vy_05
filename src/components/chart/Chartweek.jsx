import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataweek = [
  {
    week: 'Tuần 1',
    T1:3000+ Math.round(Math.random() * (9000 - 3000)),
    T2:3000+ Math.round(Math.random() * (9000 - 3000)),
    T3:3000+ Math.round(Math.random() * (9000 - 3000)),
    T4:3000+ Math.round(Math.random() * (9000 - 3000)),
    T5:3000+ Math.round(Math.random() * (9000 - 3000)),
    T6:3000+ Math.round(Math.random() * (9000 - 3000)),
    amt: 2400,
  },
  {
    week: 'Tuần 2',
    T1:3000+ Math.round(Math.random() * (9000 - 3000)),
    T2:3000+ Math.round(Math.random() * (9000 - 3000)),
    T3:3000+ Math.round(Math.random() * (9000 - 3000)),
    T4:3000+ Math.round(Math.random() * (9000 - 3000)),
    T5:3000+ Math.round(Math.random() * (9000 - 3000)),
    T6:3000+ Math.round(Math.random() * (9000 - 3000)),
    amt: 2210,
  },
  {
    week: 'Tuần 3',
    T1:3000+ Math.round(Math.random() * (9000 - 3000)),
    T2:3000+ Math.round(Math.random() * (9000 - 3000)),
    T3:3000+ Math.round(Math.random() * (9000 - 3000)),
    T4:3000+ Math.round(Math.random() * (9000 - 3000)),
    T5:3000+ Math.round(Math.random() * (9000 - 3000)),
    T6:3000+ Math.round(Math.random() * (9000 - 3000)),
    amt: 2290,
  },
  {
    week: 'Tuần 4',
    T1:3000+ Math.round(Math.random() * (9000 - 3000)),
    T2:3000+ Math.round(Math.random() * (9000 - 3000)),
    T3:3000+ Math.round(Math.random() * (9000 - 3000)),
    T4:3000+ Math.round(Math.random() * (9000 - 3000)),
    T5:3000+ Math.round(Math.random() * (9000 - 3000)),
    T6:3000+ Math.round(Math.random() * (9000 - 3000)),
    amt: 2000,
  },
];

export default class Chartweek extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart
          width={500}
          height={300}
          data={dataweek}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="T1" stroke="#FF3333 " activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="T2" stroke="#FFC300" />
          <Line type="monotone" dataKey="T3" stroke="#8884d8" />
          <Line type="monotone" dataKey="T4" stroke="#BBFF33" />
          <Line type="monotone" dataKey="T5" stroke="#900C3F" />
          <Line type="monotone" dataKey="T6" stroke="#33FFB5" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
