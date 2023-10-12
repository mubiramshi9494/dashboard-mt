import {React, useState } from "react";
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import av from "../assets/av.png";
import { Button, Dropdown, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";
const Dashboardview = () => {
  const [open, setOpen] = useState(false);

  const showProfile = () => {
    setOpen(!open);
  };
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Logout
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
          Another Account
        </a>
      ),
    },
  ];

  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 ">
        <div className="mb-4 md:mb-0 flex items-center">
          <div class="relative">
            <img class="w-12 h-12 rounded-full" src={av} alt="" />
            <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>

          <div className="ml-6">
            <div className="text-2xl  font-extrabold mb-1">
              Good Evening Team!
            </div>
            <div className="text-xs">
              Have an in-depth look at all the metrics within your dashboard.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8  ">
          <div className="order-first md:order-none flex items-center gap-12 mb-4 md:mb-0">
            <BsSearch size={42} className="bg-gray-200 rounded-full p-3" />
            <MdNotificationsNone size={35} className="gray-700" />
          </div>

          <div className=" flex items-center gap-4 relative">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
            >
              <Button className="flex gap-2 flex gap-2 items-center rounded-lg shadow-lg p-2">
                <img className="w-4 h-4 rounded-full" src={av} alt="" />
                <div className="font-bold">Johnson</div>
                <div className="mt-1">
                  <IoIosArrowDown />
                </div>
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;
