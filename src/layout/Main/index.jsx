import React from "react";
import MainHead from "./MainHead";

const Main = ({ children }) => {
  return (
    <div className="basis-full flex flex-col">
      <MainHead />
      <div className="p-8">{children}</div>
    </div>
  );
};

export default Main;
