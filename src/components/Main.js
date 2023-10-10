import React from 'react'
import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import PieComponent from './PieComponent';
import { Progress } from 'antd';
import error from "../assets/error.png"
import cartoon1 from "../assets/imabbg.png"
import Img from "../assets/images.png"




const datas = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];




const Main = () => {



    return (
        <div className='px-[25px] pt-[25px] pb-[40px]'>
           
            <div className='flex justify-between '>
          <div ><div
    class="grid  gap-2 rounded-xl bg-blue-400 text-white p-2 shadow-blue-200 ">
    <div class="flex gap-4 ">
        <div className='flex '>
        <div className='mt-4'>
    <img src={cartoon1} alt="v" className="w-10 h-10 rounded-full" />
</div>

        <div class="flex flex-col gap-1 p-2">
            <span>Monthly Revenue</span>
            <div className='flex items-center '>
            <h2 class="text-3xl tracking-tight leading-none">$3.500 </h2>
            <span className='text-blue-900 bg-white rounded-full ml-2 px-2  font-bold text-xs'>
    +2.4 %
</span>
            </div>
         <span class="text-xs font-bold text-blue-100">Previous Month $1.7k</span>
        </div>
       
        </div>
       
        <div className='flex'>
        <div className='mt-4'>
    <img src={cartoon1} alt="v" className="w-10 h-10 rounded-full" />
</div>

        <div class="flex flex-col gap-1 p-2">
            <span>Monthly Sales</span>
            <div className='flex items-center '>
            <h2 class="text-3xl tracking-tight leading-none">$6.750 </h2>
            <span className='text-violet-800 bg-white rounded-full ml-2 px-2   font-bold text-xs'>
    +4.1 %
</span>
            </div>
         <span class="text-xs font-bold text-blue-100">Previous Month $3.1k</span>
        </div>
       
        </div>
       
        <div className='flex'>
        <div className='mt-4'>
    <img src={Img} alt="v" className="w-10 h-10 rounded-full" />
</div>

        <div class="flex flex-col gap-1 p-2">
            <span>Total profit</span>
            <div className='flex items-center '>
            <h2 class="text-3xl tracking-tight leading-none">$10.900 </h2>
            <span className='text-blue-900 bg-white rounded-full ml-2 px-2   font-bold text-xs'>
    +4.3 %
</span>
            </div>
         <span class="text-xs font-bold text-blue-100">Previous year $8.9k</span>
        </div>
       
        </div>
      
    </div>
   
</div></div>
<div>
    <div className='text-gray-500 font-bold text-lg mt-2'>Premium Access</div>
    
    
        <div className='text-2xl font-extrabold'>Take Back  <br/>Your Creative</div>
        <div className="flex items-center gap-1">
        <div className='text-2xl font-extrabold'>Control</div>
        <div class="flex mb-5 -space-x-4 mt-2 ">
            
            <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={Img} alt=""/>
            <img class="w-10 h-10 border-2 border-white rounded-full " src={error} alt=""/>
            <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={Img} alt=""/>
            <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+10</a>
        </div>
    </div>
</div>

            </div>
           
          
            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Earnings Overview</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>

                    <div className="w-full">
                        {/* <canvas id="myAreaChart"></canvas> */}
                        {/* <Line options={options} data={data} /> */}
                        <LineChart
                            width={1150}
                            height={500}
                            data={datas}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </div>

                </div>
                <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Revenue Resources</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[35px]'>

                        <PieComponent />

                        {

                        }
                    </div>
                </div>
            </div>
            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Projects Overview</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='px-[25px] space-y-[15px] py-[15px]'>
                        <div>
                            <h2>Server Migration</h2>
                            <Progress percent={30} strokeColor="#E74A3B" />
                        </div>
                        <div>
                            <h2>Sales Tracking</h2>
                            <Progress percent={50} status="active" strokeColor="#F6C23E" />
                        </div>
                        <div>
                            <h2>Customer Database</h2>
                            <Progress percent={70} status="active" strokeColor="#4E73DF" />
                        </div>
                        <div>
                            <h2>Payout Details</h2>
                            <Progress percent={100} strokeColor="#36B9CC" />
                        </div>
                        <div>
                            <h2>Account Setup</h2>
                            <Progress percent={50} status="exception" strokeColor="#1CC88A" />
                        </div>
                    </div>





                </div>
                <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'> Resources</h2>
                        {/* <FaEllipsisV color="gray" className='cursor-pointer' /> */}
                    </div>
                    <div className='pl-[35px] flex items-center justify-center h-[100%]'>
                        <div>
                            <img src={error} alt="" className='transform scale-[135%]' />
                            <p className='mt-[15px] text-semibold text-gray-500'>No data available</p>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Main   