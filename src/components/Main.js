import { React, useState } from "react";
import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Sector,
} from "recharts";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Progress } from "antd";
import error from "../assets/error.png";
import cartoon1 from "../assets/imabbg.png";
import Img from "../assets/images.png";

import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons";
import {
  Dropdown,
  Space,
  Divider,
  Button,
  theme,
  message,
  DatePicker,
} from "antd";
import CalenderDetail from "./CalenderDetail";
import BlueCard from "./BlueCard";
const { useToken } = theme;
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        platform a
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Current Platform
      </a>
    ),
    disabled: true,
  },
];

const datas = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Upgrade Successfully !",
        duration: 2,
      });
    }, 1000);
  };

  return (
    <div className="px-[25px] pt-[25px] pb-[40px]">
      <div className="flex justify-between ">
        <BlueCard />

        <div className="sm:ml-12">
          <div className="text-gray-500 font-bold text-lg mt-2">
            Premium Access
          </div>

          <div className="text-2xl font-extrabold">
            Take Back <br />
            Your Creative
          </div>
          <div className="flex items-center gap-1">
            <div className="text-2xl font-extrabold">Control</div>
            <div className="flex items-center md:-space-x-4 ">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={Img}
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full"
                src={error}
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full "
                src={Img}
                alt=""
              />
              <a
                className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                href="#"
              >
                +10
              </a>
            </div>
          </div>

          <div className="mt-6">
            <Dropdown
              menu={{
                items,
              }}
              dropdownRender={(menu) => (
                <div style={{ ...contentStyle, width: "300px" }}>
                  {React.cloneElement(menu, {
                    style: menuStyle,
                  })}
                  <Divider
                    style={{
                      margin: 0,
                    }}
                  />
                  <Space
                    style={{
                      padding: 8,
                    }}
                  >
                    <Button type="primary">Click me!</Button>
                  </Space>
                </div>
              )}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="text-xs">
                  The Professional Platform
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            {contextHolder}
            <Button
              className="p-2 text-violet-400 text-md  flex items-center justify-between border border-gray-400 rounded-md mt-8"
              onClick={openMessage}
              style={{ width: "300px" }}
            >
              <span>Upgrade Now</span>
              <ArrowRightOutlined style={{ marginLeft: "8px" }} />
            </Button>
          </Space>

          <div class="border-b pb-2 border-gray-200 pt-6"></div>
          <CalenderDetail />
        </div>
      </div>
    </div>
  );
};

export default Main;
