// import {React} from "react";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

import { Divider, Tooltip } from "antd";
import { Space, Table, Tag, Avatar, Badge } from "antd";
const columns = [
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
    render: (text) => <a>{text}</a>,
    width: 160,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <a>{text}</a>,
    width: 120,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 160,
  },
  {
    title: "Invoice",
    dataIndex: "invoice",
    key: "invoice",
  },
  // {
  //   title: 'People',
  //   key: 'people',
  //   dataIndex: 'people',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>{record.name}</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    customer: (
      <div className="flex gap-2">
        <div>
          {" "}
          <Space size={20}>
            <Badge count={1}>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </Space>
        </div>
        <div className="mb-2 ml-6 ">
          flod johnson <br />
          <span className="text-gray-400 text-xs">johnathan@gmail.com</span>
        </div>
      </div>
    ),
    status: (
      <div className="flex row gap-2">
        <div class="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
        <div className="">success</div>
      </div>
    ),
    date: "oct",
    invoice: "$100",
    name: (
      <Avatar.Group>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        <a href="https://ant.design">
          <Avatar
            style={{
              backgroundColor: "#f56a00",
            }}
          >
            K
          </Avatar>
        </a>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: "#1677ff",
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    ),
  },
  {
    key: "2",
    name: (
      <Avatar.Group>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        <a href="https://ant.design">
          <Avatar
            style={{
              backgroundColor: "#f56a00",
            }}
          >
            K
          </Avatar>
        </a>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: "#1677ff",
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    ),
    date: "oct",
    invoice: "$100",
    customer: (
      <div className="flex gap-2">
        <div>
          {" "}
          <Space size={20}>
            <Badge count={1}>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </Space>
        </div>
        <div className="mb-2 ml-6 ">
          flod johnson <br />
          <span className="text-gray-400 text-xs">johnathan@gmail.com</span>
        </div>
      </div>
    ),
    status: (
      <div className="flex row gap-2">
        <div class="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
        <div className="">pending</div>
      </div>
    ),
  },
];

const TableView = () => {
  return (
    <>
      <div className="mt-4">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default TableView;
