import React, { useState } from "react";
import {
  Home,
  CircleChevronRight,
  Server,
  BarChart2,
  Wallet,
  Heart,
  Plus,
  Settings,
  MessageCircleQuestion,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SideBar = () => {
  const [active, setActive] = useState(false);

  const menus = [
    {
      icon: <Home size={20} className="text-[#676C95]" />,
      menuname: "Home",
    },
    {
      icon: <Server size={20} className="text-[#676C95]" />,
      menuname: "My Store",
    },
    {
      icon: <Wallet size={20} className="text-[#676C95]" />,
      menuname: "Income",
    },
    {
      icon: <BarChart2 size={20} className="text-[#676C95]" />,
      menuname: "Analytics",
    },
    {
      icon: <Heart size={20} className="text-[#676C95]" />,
      menuname: "Customers",
    },
    {
      icon: <Plus size={20} className="text-[#676C95]" />,
      menuname: "More",
    },
  ];

  return (
    <motion.aside
      initial={{ width: 80 }}
      animate={{ width: active ? 220 : 80 }}
      transition={{ duration: 1, type: "spring", damping: 10 }}
      className={`${
        active ? "w-44 items-start" : "w-20 items-center"
      } bg-[#EAEBFF] rounded-r-md p-4 px-5 flex flex-col  justify-between relative`}
      style={{ height: "100vh" }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: active ? 180 : 0 }}
        className="absolute top-10 -right-3"
      >
        <CircleChevronRight
          className=" bg-slate-100 rounded-full text-blue-500"
          onClick={() => setActive(!active)}
        />
      </motion.div>
      <ul
        className={`flex flex-col mt-20 gap-5 ${
          active ? "items-start" : "items-center"
        }`}
      >
        {menus.map((menu, index) => (
          <li className="flex gap-4 items-center " key={index}>
            {menu.icon}
            <AnimatePresence>
              {active && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  exit={{
                    width: 0,
                    opacity: 0,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  }}
                  className="text-[#676C95] font-semibold"
                >
                  {menu.menuname}
                </motion.span>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <MessageCircleQuestion size={20} className="text-[#676C95]" />
          <AnimatePresence>
            {active && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                exit={{
                  opacity: 0,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.1,
                  },
                }}
                className="text-[#676C95] font-semibold flex flex-col gap-2"
              >
                Ask
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-2 items-center">
          <Settings size={20} className="text-[#676C95]" />
          <AnimatePresence>
            {active && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                exit={{
                  opacity: 0,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.1,
                  },
                }}
                className="text-[#676C95] font-semibold flex flex-col gap-2"
              >
                Settings
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 rounded-full bg-slate-600"></div>
          <AnimatePresence>
            {active && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                exit={{
                  opacity: 0,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.1,
                  },
                }}
                className="text-[#676C95] font-semibold flex flex-col gap-2"
              >
                User7080
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
};

export default SideBar;
