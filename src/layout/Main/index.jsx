import React from "react";
import MainHead from "./MainHead";

const Main = ({ children }) => {
  return (
    <div className="basis-full flex flex-col h-screen overflow-y-scroll">
      <MainHead />
      <div className="p-8 bg-[#fafafa] h-full">{children}</div>
    </div>
  );
};

export default Main;
