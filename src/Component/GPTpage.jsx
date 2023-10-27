import React from "react";
import { BACKGROUND_IMG } from "../utils/constant";
import GPTsearchBar from "./GPTsearchBar";
import GPTmovieSuggestion from "./GPTmovieSuggestion";
const GPTpage = () => {
  return (
    <>
      <div className="fixed -z-20 bg-opacity-25 ">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <GPTsearchBar/>
      <GPTmovieSuggestion/>
     
    </>
  );
};

export default GPTpage;
