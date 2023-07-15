import React from "react";
import Content from "./DPGcomponents/Content";
import Info from "./DPGcomponents/Info";
import {Metadata} from "next";

export const metadata : 
  Metadata = {
    title : "Digital Public Goods | Code for GovTech",
  }; 

const DigitalPublicGoods = () => {
  return (
    <div className="bg-white md:px-20 px-10 min-w-[414px]">
      <Info />
      <Content />
    </div>
  );
};

export default DigitalPublicGoods;
