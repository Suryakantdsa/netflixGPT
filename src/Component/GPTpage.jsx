import React from "react";
import { BACKGROUND_IMG } from "../utils/constant";
import GPTsearchBar from "./GPTsearchBar";

const GPTpage = () => {
  return (
    <>
      <div className="absolute -z-20 ">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <GPTsearchBar/>
     
    </>
  );
};

export default GPTpage;
