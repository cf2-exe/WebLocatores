/* eslint-disable no-unused-vars */
import Button from "./Button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="p-[1rem] flex justify-center items-center z-50 relative w-full max-md:mb-[2rem]">
      <div className="py-[.5rem] px-[1rem] relative gap-[2rem] max-md:px-[1rem] justify-between rounded-[.75rem] border-[1px] border-[#e8e8e9] w-[90%] items-center flex">
        <h1 className="text-[1.25rem]">Weblocatores</h1>

        <div>
          <motion.ul
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className={`flex list-none gap-[2rem] text-[14px] justify-center items-center ${
              isActive ? "max-lg:flex flex-col absolute bg-[#f9fafc] w-[100%] right-0 top-[70px] rounded-[15px] p-[2rem] text-[2rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]" : "max-lg:hidden items-center"
            }`}
          >
            <li className="cursor-pointer text-light text-black mix-blend-lighten">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </motion.ul>
        </div>

        <div
          className="max-lg:block hidden"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
            <input className="hidden peer" type="checkbox" />
            <div
              className={`w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${
                isActive ? "rotate-[-45deg]" : ""
              }`}
            ></div>
            <div
              className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center ${
                isActive ? "hidden" : ""
              }`}
            ></div>
            <div
              className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${
                isActive ? "rotate-[45deg]" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
