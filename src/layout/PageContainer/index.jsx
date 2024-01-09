import React, { useState } from "react";
import Main from "../Main";
import Sidebar from "../sidebar";
import { IconButton } from "@mui/material";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
import { PiSpeakerHigh } from "react-icons/pi";

import { IoIosArrowDown } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import AvatarImage from "../../assets/images/avatar.png";
import AvatarTwoImage from "../../assets/images/avatarTwo.svg";
import MarketingLogo from "../../assets/images/marketingLogo.svg";
import PluginLogo from "../../assets/images/pluginLogo.svg";
import PaymentLogo from "../../assets/images/paymentLogo.svg";
import WalletLogo from "../../assets/images/walletLogo.svg";
import { NavLink, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const PageContainer = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
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
      icon: <PiSpeakerHigh className="w-5 h-5" />,
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
      icon: <MdPayments className="w-5 h-5" />,
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
      icon: <MdElectricBolt className="w-5 h-5" />,
    },
  ];
  return (
    <div className="dark:bg-900 dark:text-50 transition-all duration-300 xl:h-screen">
      <div className="flex flex-row relative xl:h-screen">
        <Sidebar className="hidden lg:flex" />
        <div className="fixed bottom-5 left-5 flex lg:hidden z-10 bg-[#146eb4] rounded-full items-center">
          <div>
            <IconButton
              className="w-12 h-12"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                "&:hover": {
                  background: "#0ea5e9",
                },
              }}
            >
              <IoEllipsisHorizontalCircle className="w-12 h-12 text-[#fff]" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {pages.map((item) => {
                return (
                  <MenuItem onClick={handleClose} key={item.id}>
                    <Button
                      variant="text"
                      key={item.id}
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
                        to={item.reach}
                        className=" w-full"
                        style={({ isActive }) => ({
                          display: "flex",
                          fontWeight: 500,
                          padding: "8px 16px",
                          backgroundColor: isActive ? "#343c53" : "transparent",
                          color: isActive ? "#fff" : "#282828",
                          borderRadius: "6px",
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontWeight: 500,
                          alignItems: "center",
                          gap: "12px",
                        })}
                      >
                        {item.icon}
                        <div className="flex items-center">{item.title}</div>
                      </NavLink>
                    </Button>
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
          <div>
            <IconButton
              className="w-11 h-11"
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
              sx={{
                "&:hover": {
                  background: "#0ea5e9",
                },
              }}
            >
              <FaRegUserCircle className="w-7 h-7 text-[#fff]" />
            </IconButton>
            <Menu
              id="basic-menu2"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div>
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
                      <span className="text-[15px] font-medium leading-[22px] text-[#282828]">
                        Nishyan
                      </span>
                      <Link
                        style={{
                          color: "#282828",
                          fontSize: "13px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          opacity: "0.8",
                          borderBottom: "1px solid #282828",
                          "&:hover": { color: "#282828" },
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
                <div className="flex flex-row gap-3 rounded-md bg-[#fff] m-3 items-center py-[6px] px-[12px] border border-[#ddd]">
                  <div className="bg-[#ddd] rounded-[4px]">
                    <img src={WalletLogo} alt="wallet logo" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#282828] text-[13px] leading-[16px] font-normal opacity-80">
                      Available credits
                    </span>
                    <span className="text-[#282828] text-[16px] leading-[24px] font-medium">
                      222.10
                    </span>
                  </div>
                </div>
              </div>
            </Menu>
          </div>
        </div>
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default PageContainer;
