import React from "react";
import SideBar from "./SideBar/SideBar";
import {
  Copy,
  Server,
  ArrowUpRight,
  Palette,
  Plus,
  Instagram,
  Twitter,
} from "lucide-react";

const Fullscreen = () => {
  const Menu = [
    {
      menuName: "Store",
      icon: <Server size={15} />,
    },
    {
      menuName: "Landing Pages",
      icon: <ArrowUpRight size={15} />,
    },
    {
      menuName: "Edit Design",
      icon: <Palette size={15} />,
    },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-3 px-8">
        <div
          className="flex justify-between items-end border-slate-300 pb-3"
          style={{ borderBottomWidth: "0.1px" }}
        >
          <h2 className="text-[#1A266E] font-semibold text-3xl">My Store</h2>
          <div
            className="flex gap-2 items-center text-[#8E8DD0] border-[#8E8DD0] rounded-lg px-2 py-1"
            style={{ borderWidth: "0.1px" }}
          >
            <Copy size={15} />
            Copy
          </div>
        </div>
        <div
          className="border-[#FAE0AF] bg-[#FFF7E2] p-2 flex justify-center items-center mt-3 rounded-sm"
          style={{ borderWidth: "0.1px" }}
        >
          <p className="text-[#71789F] text-sm">
            Your store isn't live yet. No worries! You can renew your
            subscription <span className="text-[#948CD8]">here.</span>
          </p>
        </div>
        <div className="flex mt-8 ">
          <div className="flex-1">
            <ul className="flex gap-7 items-center ">
              {Menu.map((item, index) => (
                <li
                  className="flex gap-2 items-center text-violet-950 font-semibold text-sm"
                  key={index + item.menuName}
                >
                  {item.icon} {item.menuName}
                </li>
              ))}
            </ul>
            <button className="bg-[#6154FC] text-white rounded-md flex justify-center items-center w-full py-2 mt-3">
              <Plus /> Add Product
            </button>
          </div>
          <div className="relative flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/Asset/Home/phone_035.jpg`}
              alt="PhoneView"
              className="w-[420px] absolute top-0 left-0"
              style={{ zIndex: -1 }}
            />
            <div className="bg-black w-96 ml-2 self-center">
              <p className="text-white">Name</p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, nemo.
              </p>
              <div className="flex gap-2 items-center">
                <div
                  className="border-slate-200 rounded-lg text-slate-200"
                  style={{ borderWidth: "0.1px" }}
                >
                  <Instagram size={15} />
                </div>
                <div
                  className="border-slate-200 rounded-lg text-slate-200"
                  style={{ borderWidth: "0.1px" }}
                >
                  <Twitter size={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fullscreen;
