import React from "react";
import SideBar from "./SideBar/SideBar";
import Mystore from "./Mystore";
// import {
//   Copy,
//   Server,
//   ArrowUpRight,
//   Palette,
//   Plus,
//   Instagram,
//   Twitter,
//   Pencil,
//   Music2,
//   GripVertical,
//   EllipsisVertical,
// } from "lucide-react";

const Fullscreen = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-3 px-8">
        <Mystore />
      </div>
    </div>
  );
};

export default Fullscreen;
