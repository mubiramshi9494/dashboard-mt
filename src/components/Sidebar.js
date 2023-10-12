import { React,useState } from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaWrench,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronRight,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa";
import { SiZeromq } from "react-icons/si";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFileEarmarkMinus } from "react-icons/bs";
import { PiNumberCircleZeroFill } from "react-icons/pi";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineFile } from "react-icons/ai";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", icon: <BiHomeAlt2 size={20} />, type: "icon" },
    {
      title: "Analytic",
      icon: <TbBrandGoogleAnalytics size={20} />,
      gap: true,
      type: "icon",
    },
    {
      title: "Explore",
      icon: <MdOutlineExplore size={20} />,
      gap: true,
      type: "icon",
    },
    {
      title: "Shop",
      icon: <AiOutlineShopping size={20} />,
      gap: true,
      type: "icon",
    },
    {
      title: "Inbox",
      icon: <AiOutlineMessage size={20} />,
      gap: true,
      type: "icon",
    },
    { title: <div className="text-xs text-gray-400">tools</div>, type: "text" },

    { title: "Setting", icon: <FaRegSun size={20} />, type: "icon" },
    { title: "Help", icon: <FaWrench size={20} />, type: "icon" },
    {
      title: <div className="text-xs text-gray-400">projects</div>,
      type: "text",
    },
    { title: "Amazon", icon: <AiOutlineFile size={20} />, type: "icon" },
    { title: "Invinity HQ", icon: <AiOutlineFile size={20} />, type: "icon" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300 sticky top-0`}
      >
        {/* <div
          
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-6 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        ><GrFormClose size={25}/></div> */}
        <div className="flex gap-x-2 items-center ml-12">
          <div className="mb-1">
            <PiNumberCircleZeroFill size={28} color="blue" />
          </div>
          <h1
            className={`font-extrabold text-4xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Omoi
          </h1>
        </div>
        <ul className="pt-4">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-violet-600 text-lg fond-extrabold items-center gap-x-2 
      ${Menu.gap ? "mt-1" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              {Menu.type === "icon" && Menu.icon}
              {Menu.type === "text" && (
                <span className="font-bold">{Menu.title}</span>
              )}
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
