import React from "react";
import cartoon1 from "../assets/imabbg.png";
import Img from "../assets/images.png";
import { CaretDownOutlined } from "@ant-design/icons";
import Extended from "./Extended";
import TransactionHistory from "./TransactionHistory";
import TableView from "./TableView";
const BlueCard = () => {
  return (
    <div>
      <div class="grid gap-2 rounded-xl bg-violet-800 text-white p-2 shadow-blue-200 sm:flex sm:flex-col sm:p-4">
        <div class="flex gap-4">
          <div class="flex">
            <div class="mt-8">
              <img
                src={cartoon1}
                alt="v"
                class="w-6 h-6 rounded-full object-cover"
              />
            </div>

            <div class="flex flex-col gap-1 p-2">
              <span>Monthly Revenue</span>
              <div class="flex items-center">
                <h2 class="text-2xl tracking-tight leading-none">$3.500 </h2>
                <span class="text-blue-900 bg-white rounded-full ml-2 px-2 font-bold text-xs">
                  +2.4
                </span>
              </div>
              <span class="text-xs font-bold text-blue-100">
                Previous Month $1.7k
              </span>
            </div>
          </div>

          <div class="flex">
            <div class="mt-8">
              <img src={cartoon1} alt="v" class="w-6 h-6 rounded-full" />
            </div>

            <div class="flex flex-col gap-1 p-2">
              <span>Monthly Sales</span>
              <div class="flex items-center">
                <h2 class="text-2xl tracking-tight leading-none">$6.750 </h2>
                <span class="text-violet-800 bg-white rounded-full ml-2 px-2 font-bold text-xs">
                  +4.1
                </span>
              </div>
              <span class="text-xs font-bold text-blue-100">
                Previous Month $3.1k
              </span>
            </div>
          </div>

          <div class="flex">
            <div class="mt-8 ">
              <img src={Img} alt="v" class="w-6 h-6 rounded-full" />
            </div>

            <div class="flex flex-col gap-1 p-2">
              <span>Total profit</span>
              <div class="flex items-center">
                <h2 class="text-2xl tracking-tight leading-none">$10.900 </h2>
                <span class="text-blue-900 bg-white rounded-full ml-2 px-2 font-bold text-xs">
                  +4.3
                </span>
              </div>
              <span class="text-xs font-bold text-blue-100">
                Previous year $8.9k
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* bluecard 2 */}
      <div className="mt-6">
        <div className="flex justify-between gap-6 border border-gray-200  rounded-lg p-4 ">
          <div className="flex ">
            <div className="mt-4"></div>

            <div class="flex flex-col gap-1 p-2">
              <span className=" mt-4 fond-extrabold text-xl">
                Total Sales And Cost{" "}
              </span>
              <div className="text-xs text-gray-500 mt-2">Last 60 days</div>
              <div className="flex items-center ">
                <h2 class="text-xl text-violet-800 tracking-tight leading-none mt-8">
                  $956.82k
                </h2>
                <span className="text-blue-900 bg-green-300 rounded-full ml-2 px-2 font-bold text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm mt-6">
                  <CaretDownOutlined /> +2.4%
                </span>
              </div>
              <div class="text-xs font-bold text-gray-600 mt-2">
                {" "}
                <span className="text-green-500">+8.2k </span> vs Prev 60 days
              </div>
            </div>
          </div>
          <div>
            <Extended />
          </div>
        </div>
      </div>
      <TransactionHistory />
      <TableView />
    </div>
  );
};

export default BlueCard;
