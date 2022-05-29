import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Chartweek from "./Chartweek";
const datamonth = [
  { name: "Tháng 0", Total:   5000},
  { name: "Tháng 1", Total:  3000+ Math.round(Math.random() * (9000 - 3000))},
  { name: "Tháng 2", Total:  3000+ Math.round(Math.random() * (9000 - 3000))},
  { name: "Tháng 3", Total:  3000+ Math.round(Math.random() * (9000 - 3000))},
  { name: "Tháng 4", Total:  3000+ Math.round(Math.random() * (9000 - 3000))},
  { name: "Tháng 5", Total:  3000+ Math.round(Math.random() * (9000 - 3000))},
  { name: "Tháng 6", Total:  3000+ Math.round(Math.random() * (9000 - 3000))},
];

const Chart = ({ aspect, title,type }) => {
  return (
    <>
    {type?
    <div className="chart">
    <div className="title">{title}</div>
      <Chartweek/>
  </div>
        
  
    :    <div className="chart">
    <div className="title">{title}</div>
    <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart
        width={730}
        height={250}
        data={datamonth}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="gray" />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
}

    </>
    );  
};

export default Chart;
