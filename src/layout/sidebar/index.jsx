import React from "react";
import { NavLink } from "react-router-dom";

import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { FiGrid } from "react-icons/fi";
import { FiTruck } from "react-icons/fi";
//
import { PiChartBarLight } from "react-icons/pi";
import { MdPayments } from "react-icons/md"; // Not same
import { LuMousePointer2 } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { MdOutlineColorLens } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md"; // Not same

import { Button, IconButton, Link, Skeleton } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = ({ className }) => {
  const pages = [
    { id: "0", title: "Home", reach: "/", icon: <GoHome /> },
    { id: "1", title: "Orders", reach: "/orders", icon: <LuClipboardList /> },
    { id: "2", title: "Products", reach: "/products", icon: <FiGrid /> },
    { id: "3", title: "Delivery", reach: "/delivery", icon: <FiTruck /> },
    { id: "4", title: "Marketing", reach: "/marketing", icon: <GoHome /> },
    {
      id: "5",
      title: "Analytics",
      reach: "/analytics",
      icon: <PiChartBarLight />,
    },
    { id: "6", title: "Payments", reach: "/payments", icon: <MdPayments /> },
    { id: "7", title: "Tools", reach: "/tools", icon: <LuMousePointer2 /> },
    { id: "8", title: "Discounts", reach: "/discounts", icon: <TbDiscount2 /> },
    { id: "9", title: "Audience", reach: "/audience", icon: <GoPeople /> },
    {
      id: "10",
      title: "Appearance",
      reach: "/appearance",
      icon: <MdOutlineColorLens />,
    },
    { id: "11", title: "Plugins", reach: "/plugins", icon: <MdElectricBolt /> },
  ];

  return (
    <aside
      className={`basis-1/6 flex flex-col justify-between bg-[#1e2640] ${className}`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-3 p-4">
          <Skeleton
            variant="rounded"
            width={60}
            height={60}
            sx={{ background: "#ddd" }}
          />
          <div className="flex flex-row gap-2 justify-between w-full">
            <div className="flex flex-col gap-2 justify-between">
              <span className="text-xl text-[#fff]">Nishyan</span>
              <Link sx={{ color: "#d2d4d9", "&:hover": { color: "#fff" } }}>
                Visit store
              </Link>
            </div>
            <IconButton>
              <IoIosArrowDown className="text-[#fff]" />
            </IconButton>
          </div>
        </div>
        <div className="px-2">
          {pages.map((page) => {
            return (
              <Button
                variant="text"
                key={page.id}
                sx={{
                  color: "#000000D9",
                  textTransform: "capitalize",
                  gap: "10px",
                  width: "100%",
                  justifyContent: "flex-start",
                  padding: "0",
                  borderRadius: "6px",
                }}
              >
                <NavLink
                  to={page.reach}
                  className="flex items-center gap-3 w-full"
                  style={({ isActive }) => ({
                    display: "flex",
                    fontWeight: 500,
                    padding: "12px 24px",
                    backgroundColor: isActive ? "#343c53" : "transparent",
                    color: isActive ? "#fff" : "#d2d4d9",
                    borderRadius: "6px",
                  })}
                >
                  <div className="w-4 h-4">{page.icon}</div>
                  <span>{page.title}</span>
                </NavLink>
              </Button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
