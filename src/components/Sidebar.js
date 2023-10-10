// import React ,{ useState } from 'react'
// import { FaTachometerAlt, FaRegSun, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt } from "react-icons/fa"
// import {SiZeromq } from 'react-icons/si';
//  import {BiHomeAlt2} from 'react-icons/bi'
//  import { TbBrandGoogleAnalytics} from 'react-icons/tb'
//   import {MdOutlineExplore} from 'react-icons/md'
//  import { AiOutlineShopping} from 'react-icons/ai'
//  import {AiOutlineMessage} from 'react-icons/ai'
//  import {BsFileEarmarkMinus} from 'react-icons/bs'
//  import '../App.css'
 
//  const Sidebar = () => {
//       const [open, setOpen] = useState(true);

//     const toggleSidebar = () => {
//       setIsOpen(!isOpen);
//     };
//     return (
//         <div   className={` ${
        //   open ? "w-72" : "w-20 "
        // } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
//             <div className='px-[15px] py-[40px] flex items-center justify-center gap-6'>
//                 <SiZeromq color='blue'  size={25}/>
//                 <h1 className=' text-[40px] leading-[24px] font-extrabold cursor-pointer'>Omoi</h1>
//             </div>
//             <div className='flex items-center gap-[15px] py-[16px]  cursor-pointer-blue  hover:bg-blue-500'>
//                 <BiHomeAlt2 size={25} />
//                 <p className='text-[22px] leading-[20px] font-bold '>Home</p>
//             </div>
//             <div className='flex items-center gap-[15px] py-[16px]  cursor-pointer-blue  hover:bg-blue-500'>
//                 <TbBrandGoogleAnalytics  size={25} />
//                 <p className='text-[22px] leading-[20px] font-bold '>Analytic</p>
//             </div>
//             <div className='flex items-center gap-[15px] py-[16px]  cursor-pointer-blue  hover:bg-blue-500'>
//                 <MdOutlineExplore   size={25} />
//                 <p className='text-[22px] leading-[20px] font-bold '>Explore</p>
//             </div>
//             <div className='flex items-center gap-[15px] py-[20px]   cursor-pointer-blue  hover:bg-blue-500'>
//                 <AiOutlineShopping   size={25} />
//                 <p className='text-[22px] leading-[20px] font-bold '>Shop</p>
//             </div>
//             <div className='flex items-center gap-[15px] py-[20px]  cursor-pointer-blue  hover:bg-blue-500'>
//                 <AiOutlineMessage   size={25} />
//                 <p className='text-[22px] leading-[20px] font-bold'>Inbox</p>
//             </div>
//             <div className='pt-[25px]'>
//                 <p className='text-[16px] font-extrabold leading-[16px]'> Tools</p>
//                 <div className='flex items-center justify-between gap-[10px] py-[15px]  cursor-pointer-blue  hover:bg-blue-500'>
//                     <div className='flex items-center gap-[10px]'>
//                         <FaRegSun  size={25} /> <p className='text-[22px] leading-[20px] font-bold  '>Setting</p>
//                     </div>
                   
//                 </div>
//                 <div className='flex items-center justify-between gap-[10px] py-[15px]  cursor-pointer-blue  hover:bg-blue-500'>
//                     <div className='flex items-center gap-[10px]'>
//                         <FaWrench   size={25}  /> <p className='text-[22px] leading-[20px] font-bold '>Help</p>
//                     </div>
              
//                 </div>
//             </div>
//             <div className='pt-[25px]'>
//                 <p className='text-[16px] font-extrabold leading-[16px] '> Project</p>
//                 <div className='flex items-center justify-between gap-[10px] py-[15px]  cursor-pointer-blue  hover:bg-blue-500'>
//                     <div className='flex items-center gap-[10px]'>
//                         <BsFileEarmarkMinus   size={25} /> <p className='text-[22px] leading-[20px] font-bold'>Amazon</p>
//                     </div>
                   
//                 </div>
//                 <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer-blue  hover:bg-blue-500'>
//                     <FaRegChartBar  size={25} /> <p className='text-[22px] leading-[20px] font-bold '>Invinity HQ</p>
//                 </div>
               
//             </div>

//             <div className='hamburger-icon' onClick={toggleSidebar}>
//         <div className={`line ${isOpen ? 'open' : ''}`}></div>
//         <div className={`line ${isOpen ? 'open' : ''}`}></div>
//         <div className={`line ${isOpen ? 'open' : ''}`}></div>
//       </div>
           
          
//         </div>
//     )
// }

// export default Sidebar

import { useState } from "react";
import { FaTachometerAlt, FaRegSun, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt } from "react-icons/fa"
 import {SiZeromq } from 'react-icons/si';
  import {BiHomeAlt2} from 'react-icons/bi' 
   import { TbBrandGoogleAnalytics} from 'react-icons/tb'
  import {MdOutlineExplore} from 'react-icons/md'
 import { AiOutlineShopping} from 'react-icons/ai'
 import {AiOutlineMessage} from 'react-icons/ai'
import {BsFileEarmarkMinus} from 'react-icons/bs'
import {PiNumberCircleZeroFill} from 'react-icons/pi'
  import {GrFormClose} from 'react-icons/gr'
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", icon: <BiHomeAlt2 size={25} />, type: "icon" },
    { title: "Analytic", icon:   <TbBrandGoogleAnalytics  size={25} />, gap: true, type: "icon" },
    { title: "Explore", icon:    <MdOutlineExplore   size={25} />, gap: true, type: "icon" },
    { title: "Shop", icon:   <AiOutlineShopping   size={25} />, gap: true, type: "icon" },
    { title: "Inbox", icon:  <AiOutlineMessage   size={25} />, gap: true, type: "icon" },
    { title: "Tools", type: "text" }, 
  
    { title: "Setting", icon:   <FaRegSun  size={25} /> , type: "icon" },
    { title: "Help", icon:       <FaWrench   size={25}  /> , type: "icon" },
    { title: "Projects", type: "text" }, 
    { title: "Amazon", icon:       <FaWrench   size={25}  /> , type: "icon" },
    { title: "Invinity HQ", icon:   <MdOutlineExplore   size={25} />, type: "icon" },
    
  ];
  

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div
          
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-6 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        ><GrFormClose size={25}/></div>
        <div className="flex gap-x-4 items-center ml-12">
          <div
            
            className={`
            }`}
          ><PiNumberCircleZeroFill size={28} color="blue"/></div>
          <h1
            className={`font-extrabold text-4xl duration-200 ${
              !open && "scale-0"
            }`}
          >
        Omoi
          </h1>
        </div>
        <ul className="pt-6">
  {Menus.map((Menu, index) => (
    <li
      key={index}
      className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-lg fond-extrabold items-center gap-x-4 
      ${Menu.gap ? "mt-9" : "mt-2"} ${
        index === 0 && "bg-light-white"
      } `}
    >
      {Menu.type === "icon" && Menu.icon}
      {Menu.type === "text" && <span className="font-bold">{Menu.title}</span>}
      <span className={`${!open && "hidden"} origin-left duration-200`}>
        {Menu.type === "icon" && Menu.title}
      </span>
    </li>
  ))}
</ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};
export default Sidebar;