import { IconButton } from "@mui/material";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import MessageLogo from "../../../assets/images/messageLogo.svg";
import DownArrowRoundedLogo from "../../../assets/images/downArrowRoundedLogo.svg";
import SearchLogo from "../../../assets/images/searchLogo.svg";
const MainHead = () => {
  return (
    <div className="flex py-3 px-8 bg-[#FFFFFF] border-b border-[#D9D9D9] flex-col gap-4 md:flex-row md:justify-between md:gap-0">
      <div className="flex flex-row gap-4 items-center">
        <h3 className="text-[15px] leading-[22px] font-normal text-[#1A181E]">
          Payments
        </h3>
        <div className="flex gap-[6px] items-center">
          <AiOutlineQuestionCircle className="w-[14px] h-[14px] text-[#4D4D4D]" />
          <span className="text-[12px] leading-[16px] font-normal text-[#4D4D4D]">
            How it works
          </span>
        </div>
      </div>
      <div className="relative">
        <img
          src={SearchLogo}
          alt="search logo"
          className="absolute py-3 pl-4"
        />

        <input
          className="bg-[#F2F2F2] rounded-[6px] py-[9px] pl-[40px] pr-[16px] sm:w-[400px] text-[15px] leading-[22px] font-normal text-[#808080]"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="flex flex-row gap-3">
        <IconButton
          sx={{ background: "#E6E6E6", width: "40px", height: "40px" }}
        >
          <img src={MessageLogo} alt="message logo" />
        </IconButton>
        <IconButton
          sx={{ background: "#E6E6E6", width: "40px", height: "40px" }}
        >
          <img src={DownArrowRoundedLogo} alt="down arrow logo" />
        </IconButton>
      </div>
    </div>
  );
};

export default MainHead;
