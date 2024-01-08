import React from "react";
import { NavLink } from "react-router-dom";

import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";

import { Button, Skeleton } from "@mui/material";

const Sidebar = ({ className }) => {
  const pages = [
    { id: "0", title: "Home", reach: "/", icon: <GoHome /> },
    { id: "1", title: "Orders", reach: "/orders", icon: <LuClipboardList /> },
    { id: "2", title: "Products", reach: "/products", icon: <GoHome /> },
    { id: "3", title: "Delivery", reach: "/delivery", icon: <GoHome /> },
    { id: "4", title: "Marketing", reach: "/marketing", icon: <GoHome /> },
    { id: "5", title: "Analytics", reach: "/analytics", icon: <GoHome /> },
    { id: "6", title: "Payments", reach: "/payments", icon: <GoHome /> },
    { id: "7", title: "Tools", reach: "/tools", icon: <GoHome /> },
    { id: "8", title: "Discounts", reach: "/discounts", icon: <GoHome /> },
    { id: "9", title: "Audience", reach: "/audience", icon: <GoHome /> },
    { id: "10", title: "Appearance", reach: "/appearance", icon: <GoHome /> },
    { id: "11", title: "Plugins", reach: "/plugins", icon: <GoHome /> },
  ];

  return (
    <aside
      className={`basis-1/6 flex flex-col justify-between pt-4 ${className}`}
      style={{ border: "1px solid #ddd" }}
    >
      <div className="flex flex-col gap-6">
        <div>
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
                }}
              >
                <NavLink
                  to={page.reach}
                  className="flex items-center gap-3 w-full"
                  style={({ isActive }) => ({
                    display: "flex",
                    fontWeight: 500,
                    padding: "12px 24px",
                    backgroundColor: isActive
                      ? "rgba(144, 202, 249, 0.08)"
                      : "#E6F7FF",
                    color: isActive ? "#1890FF" : "#1890FF",
                    borderRight: isActive
                      ? "5px solid #1890FF"
                      : "2px solid #fff",
                  })}
                >
                  {page.icon}
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
