import React from "react";
import PartnerSlider from "./PartnerSlider";

function Partners() {
  return (
    <div className={`flex flex-col mt-20`}>
      <div className="title-text dark:text-gray-200  width mx-auto justify-center ">
        Your key to blockchain applications
      </div>
      <div className="text-center text-gray-700 mt-2 dark:text-gray-400 width mx-auto ">
        MetaMask provides an essential utility for blockchain newcomers, token
        traders, crypto gamers, and developers. Over a million downloads and
        counting!
      </div>
      <div className="w-full   overflow-hidden width mx-auto">
        <PartnerSlider />
      </div>
    </div>
  );
}

export default Partners;
