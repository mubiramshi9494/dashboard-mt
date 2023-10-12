import {  useState } from "react";
import computer from "../assets/computer.jpg";

import {
  DownOutlined,
  ArrowRightOutlined,
  VideoCameraOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import {
  Dropdown,
  Space,
  Divider,
  Button,
  theme,
  message,
  DatePicker,
} from "antd";

const CalenderDetail = () => {
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (cellNumber) => {
    setSelectedCell(cellNumber);
  };
  return (
    <div>
      <div class="">
        <div class="max-w-sm w-full ">
          <div class="rounded-t mr-12 mt-12">
            <div class="flex justify-between">
              <span
                tabindex="0"
                class="focus:outline-none  text-base font-bold text-gray-800"
              >
                October 2023
              </span>
              <div class="flex items-center">
                <div class="rounded-full border border-gray-300">
                  <button
                    aria-label="calendar backward"
                    class="focus:text-gray-400 hover:text-gray-400 text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-chevron-left"
                      width="24"
                      height="24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                </div>
                <div class="ml-3 rounded-full border border-gray-300">
                  <button
                    aria-label="calendar forward"
                    class="focus:text-gray-400 hover:text-gray-400 text-gray-800 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler  icon-tabler-chevron-right"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between pt-12 overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-600">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-600 ">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-600">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-600">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-600">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-600 ">
                          Sa
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-600 ">
                          Su
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                  <tr>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p
                          onClick={() => handleCellClick(11)}
                          class="text-base text-gray-500 font-medium"
                        >
                          11
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p
                          onClick={() => handleCellClick(12)}
                          class="text-base text-gray-500  font-medium"
                        >
                          12
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p
                          onClick={() => handleCellClick(13)}
                          class="text-base text-gray-500 font-medium"
                        >
                          13
                        </p>
                      </div>
                    </td>

                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p
                          onClick={() => handleCellClick(14)}
                          class="text-base text-gray-500 font-medium"
                        >
                          14
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p
                          onClick={() => handleCellClick(15)}
                          class="text-base text-gray-500  font-medium"
                        >
                          15
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p
                          onClick={() => handleCellClick(16)}
                          class="text-base text-gray-500 "
                        >
                          16
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p
                          onClick={() => (handleCellClick = 17)}
                          class="text-base text-gray-500 "
                        >
                          17
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {selectedCell === 11 && (
            <div className="py-5  px-2 ">
              <div class="md:py-8 ">
                <div class="">
                  <div className="flex justify-beteen gap-10">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Meeting With Client
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-beteen gap-10 mt-4">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Hire new Lead
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-beteen gap-10 mt-4">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Meeting With boss
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedCell === 12 && (
            <div className="py-5  px-2 ">
              <div class="md:py-8 ">
                <div class="">
                  <div className="flex justify-beteen gap-10">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Party With Client
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-beteen gap-10 mt-4">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Boss Birthday{" "}
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-beteen gap-10 mt-4">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Outing
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCell === 13 && (
            <div className="py-5  px-2 ">
              <div class="md:py-8 ">
                <div class="">
                  <div className="flex justify-beteen gap-10">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        new Office party
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-beteen gap-10 mt-4">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Training to interns{" "}
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-beteen gap-10 mt-4">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Outing
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedCell === 14 && (
            <div className="py-5  px-2 ">
              <div class="md:py-8 ">
                <div class="">
                  <div className="flex justify-beteen gap-10">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Party With Client
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-beteen gap-10 mt-4">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Boss Birthday{" "}
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-beteen gap-10 mt-4">
                    <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={computer}
                        alt=""
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div class="border-b pb-4 border-gray-400 border-dashed">
                      <a
                        tabindex="0"
                        class="focus:outline-none text-lg font-medium leading-5 mt-2"
                      >
                        Outing
                      </a>
                      <div className="flex gap-2 justify-between">
                        <div class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                          {" "}
                          <VideoCameraOutlined color="gray" size="12" />
                          Google Meet{" "}
                        </div>{" "}
                        <div className="mt-1 text-gray-600">
                          {" "}
                          <ClockCircleOutlined color="gray" />
                          12pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalenderDetail;
