import React from "react";
import MainHead from "./MainHead";

const Main = ({ children }) => {
  return (
    <div className="basis-full md:basis-5/6 flex flex-col">
      <MainHead />
      {children}
    </div>
  );
};

export default Main;
