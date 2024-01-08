import React from "react";
import { NavLink, Link } from "react-router-dom";

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

import { Button, IconButton } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import AvatarImage from "../../assets/images/avatar.png";
import AvatarTwoImage from "../../assets/images/avatarTwo.svg";
import MarketingLogo from "../../assets/images/marketingLogo.svg";
import PluginLogo from "../../assets/images/pluginLogo.svg";
import PaymentLogo from "../../assets/images/paymentLogo.svg";
import WalletLogo from "../../assets/images/walletLogo.svg";

const Sidebar = ({ className }) => {
  const pages = [
    {
      id: "0",
      title: "Home",
      reach: "/home",
      icon: <GoHome className="w-5 h-5" />,
    },
    {
      id: "1",
      title: "Orders",
      reach: "/orders",
      icon: <LuClipboardList className="w-5 h-5" />,
    },
    {
      id: "2",
      title: "Products",
      reach: "/products",
      icon: <FiGrid className="w-5 h-5" />,
    },
    {
      id: "3",
      title: "Delivery",
      reach: "/delivery",
      icon: <FiTruck className="w-5 h-5" />,
    },
    {
      id: "4",
      title: "Marketing",
      reach: "/marketing",
      icon: <img src={MarketingLogo} alt="marketing logo" />,
    },
    {
      id: "5",
      title: "Analytics",
      reach: "/analytics",
      icon: <PiChartBarLight className="w-5 h-5" />,
    },
    {
      id: "6",
      title: "Payments",
      reach: "/",
      icon: <img src={PaymentLogo} alt="marketing logo" />,
    },
    {
      id: "7",
      title: "Tools",
      reach: "/tools",
      icon: <LuMousePointer2 className="w-5 h-5" />,
    },
    {
      id: "8",
      title: "Discounts",
      reach: "/discounts",
      icon: <TbDiscount2 className="w-5 h-5" />,
    },
    {
      id: "9",
      title: "Audience",
      reach: "/audience",
      icon: <GoPeople className="w-5 h-5" />,
    },
    {
      id: "10",
      title: "Appearance",
      reach: "/appearance",
      icon: <MdOutlineColorLens className="w-5 h-5" />,
    },
    {
      id: "11",
      title: "Plugins",
      reach: "/plugins",
      icon: <img src={PluginLogo} alt="plugin logo" />,
    },
  ];

  return (
    <aside
      className={`basis-[224px] flex flex-col justify-between bg-[#1e2640] ${className}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-[12.5px] p-4">
          <div className="w-[42px] h-[42px] rounded-[4px] overflow-hidden items-center">
            <img
              src={AvatarTwoImage}
              alt="avatar"
              className="w-[42px] h-[42px] object-cover"
            />
          </div>
          <div className="flex flex-row gap-3 justify-between w-full">
            <div className="flex flex-col gap-1 justify-between">
              <span className="text-[15px] font-medium leading-[22px] text-[#fff]">
                Nishyan
              </span>
              <Link
                style={{
                  color: "#d2d4d9",
                  fontSize: "13px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                  opacity: "0.8",
                  borderBottom: "1px solid #fff",
                  "&:hover": { color: "#fff" },
                }}
              >
                Visit store
              </Link>
            </div>
            <IconButton>
              <IoIosArrowDown className="text-[#fff] w-5 h-5" />
            </IconButton>
          </div>
        </div>
        <div className="px-2 flex flex-col gap-1">
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
                  className=" w-full"
                  style={({ isActive }) => ({
                    display: "flex",
                    fontWeight: 500,
                    padding: "8px 16px",
                    backgroundColor: isActive ? "#343c53" : "transparent",
                    color: isActive ? "#fff" : "#d2d4d9",
                    borderRadius: "6px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    alignItems: "center",
                    gap: "12px",
                  })}
                >
                  {page.icon}
                  <div className="flex items-center">{page.title}</div>
                </NavLink>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row gap-3 rounded-md bg-[#353c53] m-3 items-center py-[6px] px-[12px]">
        <img src={WalletLogo} alt="wallet logo" />
        <div className="flex flex-col">
          <span className="text-[#FFFFFF] text-[13px] leading-[16px] font-normal opacity-80">
            Available credits
          </span>
          <span className="text-[#FFFFFF] text-[16px] leading-[24px] font-medium">
            222.10
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
