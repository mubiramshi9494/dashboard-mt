//  import {React} from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const recipientItems = [
  {
    label: "User A",
    key: "1",
  },
  {
    label: "User B",
    key: "2",
  },
  // Add more recipient items as needed
];
const amountItems = [
  {
    label: "$10",
    key: "10",
  },
  {
    label: "$20",
    key: "20",
  },
  // Add more amount items as needed
];
const statusItems = [
  {
    label: "Pending",
    key: "pending",
  },
  {
    label: "Completed",
    key: "completed",
  },
  // Add more status items as needed
];

const items = [
  {
    label: "january",
    key: "1",
  },
  {
    label: "February",
    key: "2",
  },
  {
    label: "March",
    key: "3",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const recipientMenuProps = {
  items: recipientItems,
  onClick: handleMenuClick,
};

const amountMenuProps = {
  items: amountItems,
  onClick: handleMenuClick,
};

const statusMenuProps = {
  items: statusItems,
  onClick: handleMenuClick,
};

const TransactionHistory = () => {
  return (
    <>
      <div className="flex justify-between mt-6">
        <div className="text-2xl font-bold">Transaction History</div>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Month
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>

      <div className="mt-4 flex gap-2">
        <Dropdown menu={recipientMenuProps} className="bg-gray-200  rounded">
          <Button>
            <Space>
              Receipient
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={amountMenuProps} className="bg-gray-200 rounded">
          <Button>
            <Space>
              Amount
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={statusMenuProps} className="bg-gray-200 rounded">
          <Button>
            <Space>
              Status
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </>
  );
};

export default TransactionHistory;
