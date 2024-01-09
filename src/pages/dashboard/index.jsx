import React, { useState } from "react";
import { PageContainer } from "../../layout";

import AdvancedFilterDemo from "./Table";
import { TreeSelect } from "primereact/treeselect";

export default function Dashboard() {
  const [nodes, setNodes] = useState(["January"]);
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);
  const boxShadowCard = {
    boxShadow: "0 2px 6px 0 #1A181E0A",
  };
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 bg-[#fafafa]">
        {/* Overview */}
        <div className="flex flex-col gap-6">
          {/* Head */}
          <div className="flex flex-row flex-start gap-4 md:justify-between items-center md:gap-0">
            <span className="text-[20px] leading-[28px] font-medium text-[#1A181E]">
              Overview
            </span>
            <div>
              <TreeSelect
                value={selectedNodeKey}
                onChange={(e) => setSelectedNodeKey(e.value)}
                options={nodes}
                className="border border-[#D9D9D9] text-[16px] leading-[24px] text-[Last Month] text-[#4D4D4D]"
                placeholder="Last Month"
              ></TreeSelect>
            </div>
          </div>
          {/* Body */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Card One */}
            <div
              className="flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-[8px] basis-1/2"
              style={boxShadowCard}
            >
              <span className="text-[16px] text-[#4D4D4D] font-normal leading-[24px]">
                Online orders
              </span>
              <span className="text-[32px] text-[#1A181E] font-medium leading-[38px]">
                231
              </span>
            </div>
            {/* Card Two */}
            <div
              className="flex flex-col p-5 gap-4 bg-[#FFFFFF] rounded-[8px] basis-1/2"
              style={boxShadowCard}
            >
              <span className="text-[16px] text-[#4D4D4D] font-normal leading-[24px]">
                Amount received
              </span>
              <span className="text-[32px] text-[#1A181E] font-medium leading-[38px]">
                ₹23,92,312.19
              </span>
            </div>
          </div>
        </div>
        {/* Transations */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] leading-[28px] font-medium">
            Transactions | This Month
          </h3>
          <div>
            <AdvancedFilterDemo />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
