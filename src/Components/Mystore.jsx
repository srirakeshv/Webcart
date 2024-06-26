import React, { useState } from "react";
import {
  Copy,
  StretchHorizontal,
  ArrowUpRight,
  Palette,
  Plus,
  Instagram,
  Twitter,
  Pencil,
  Music2,
  GripVertical,
  EllipsisVertical,
  Settings2,
} from "lucide-react";
import Thumbnail from "./Addnewproduct/Thumbnail";

const Mystore = () => {
  const [storeActive, setStoreActive] = useState(true);
  const [addProMenuname, setAddProMenuname] = useState(0);

  const Menu = [
    {
      menuName: "Store",
      icon: <StretchHorizontal size={15} />,
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

  const List = [
    {
      image: "/Asset/Home/dummyGift.jpg",
      itemName: "Custom Video or Product",
      Price: "$9.99",
    },
    {
      image: "/Asset/Home/dummyGift.jpg",
      itemName: "Consulting",
      Price: "$9.99",
    },
    {
      image: "/Asset/Home/dummyGift.jpg",
      itemName: "Custom Video or Product",
      Price: "$9.99",
    },
  ];

  const AddnewproductMenu = [
    {
      menuName: "Thumbnail",
      icon: <StretchHorizontal size={15} />,
    },
    {
      menuName: "Checkout Page",
      icon: <ArrowUpRight size={15} />,
    },
    {
      menuName: "Options",
      icon: <Settings2 size={15} className="rotate-90" />,
    },
  ];

  const handleClick = () => {
    setStoreActive(false);
  };

  const handleAddProductClick = (index) => {
    setAddProMenuname(index);
  };

  return (
    <div>
      <div
        className="flex justify-between items-end border-slate-100 pb-3"
        style={{ borderBottomWidth: "0.1px" }}
      >
        <h2 className={` font-semibold text-3xl flex items-center `}>
          <span
            className={`${
              storeActive ? "text-[#1A266E]" : "text-slate-400"
            } cursor-pointer`}
            onClick={() => setStoreActive(true)}
          >
            {storeActive ? "My Store" : `My Store / `}
          </span>
          <span
            className={`${storeActive ? "" : "text-[#1A266E]"} cursor-pointer`}
          >
            {storeActive ? "" : ` Add New Product`}
          </span>
        </h2>
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
          Your store isn't live yet. No worries! You can renew your subscription{" "}
          <span className="text-[#948CD8]">here.</span>
        </p>
      </div>
      <div className="flex mt-8 ">
        <div className="flex-1">
          <ul className="flex gap-7 items-center ">
            {storeActive
              ? Menu.map((item, index) => (
                  <li
                    className="flex gap-2 items-center text-violet-950 font-semibold text-sm"
                    key={index + item.menuName}
                  >
                    {item.icon} {item.menuName}
                  </li>
                ))
              : AddnewproductMenu.map((item, index) => (
                  <li
                    className="flex gap-2 items-center text-violet-950 font-semibold text-sm"
                    key={index + item.menuName}
                    onClick={() => handleAddProductClick(index)}
                  >
                    {item.icon} {item.menuName}
                  </li>
                ))}
          </ul>
          {storeActive && (
            <div className="mt-4 mr-2 flex flex-col gap-4">
              <div className="rounded-lg bg-white shadow-lg ml-4 p-3 py-5 flex items-center gap-5">
                <img
                  src={`${process.env.PUBLIC_URL}/Asset/Home/Avatar.png`}
                  alt="Avatar"
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-violet-950 font-semibold flex gap-2 items-center">
                    Name <Pencil size={15} color="grey" />
                  </p>
                  <p className="text-gray-400">@Rohit45</p>
                  <div className="flex gap-2 items-center mt-4">
                    <div className="bg-gray-200 rounded-lg text-violet-950 w-7 h-7 flex justify-center items-center">
                      <Music2 size={15} />
                    </div>
                    <div className="bg-gray-200 rounded-lg text-violet-950 w-7 h-7 flex justify-center items-center">
                      <Instagram size={15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-4 flex flex-col gap-3">
                {List.map((listItem, index) => (
                  <div className="rounded-lg shadow-lg bg-white flex justify-between items-center p-3 py-5">
                    <div className="flex gap-3 items-center">
                      <GripVertical size={20} />
                      <img
                        src={`${process.env.PUBLIC_URL}${listItem.image}`}
                        alt="images"
                        className="w-12 h-12"
                      />
                      <div>
                        <p className="text-violet-950 font-semibold">
                          {listItem.itemName}
                        </p>
                        <p className="text-gray-400">{listItem.Price}</p>
                      </div>
                    </div>
                    <EllipsisVertical size={20} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {addProMenuname === 0 && <Thumbnail />}
          {storeActive && (
            <button
              className="bg-[#6154FC] text-white rounded-md flex justify-center items-center w-full py-2 mt-3"
              onClick={handleClick}
            >
              <Plus /> Add Product
            </button>
          )}
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
  );
};

export default Mystore;
