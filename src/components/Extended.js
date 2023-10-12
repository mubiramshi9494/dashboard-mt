import {React} from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const CustomBar = ({ fill, ...props }) => {
  return <Bar {...props} fill={fill} />;
};
const data = [
  {
    name: "1-10 aug",
    uv: 1000,
    pv: 2400,
    amt: 1400,
    asd: 20,
    color: "#FF5733",
  },
  {
    name: "11-20 aug",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    asd: 40,
    color: "#FF5733",
  },
  {
    name: "21-30 aug",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    asd: 60,
  },
  {
    name: "1-10 nov",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const getIntroOfPage = (label) => {
  if (label === "1-10 aug") {
    return "10";
  }
  if (label === "Page B") {
    return "30";
  }
  if (label === "Page C") {
    return "20";
  }
  if (label === "Page D") {
    return "60";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};
const Extended = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="ml-12 fond-extrabold ">
          Analytic <span className="text-green-400">+54%</span>
        </div>
        <button>
          Month <CaretDownOutlined />
        </button>
      </div>

      <div className="mt-4">
        <BarChart
          width={300}
          height={165}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="asd" />
          <Tooltip content={<CustomTooltip />} />
          <CustomBar dataKey="pv" barSize={20} />
          {/* <Legend /> */}
          <Bar dataKey="pv" barSize={20} fill="#8884d8" />
        </BarChart>
      </div>
    </>
  );
};

export default Extended;
