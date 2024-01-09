import React from "react";
import MainHead from "./MainHead";

const Main = ({ children }) => {
  return (
    <div className="basis-full flex flex-col h-screen">
      <MainHead />
      <div className="p-8 bg-[#fafafa] h-full overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default Main;
