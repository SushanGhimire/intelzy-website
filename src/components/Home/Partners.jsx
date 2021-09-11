import React from "react";
import PartnerSlider from "./PartnerSlider";

function Partners() {
  return (
    <div className={`flex flex-col  width mx-auto justify-center mt-20`}>
      <div className="mx-auto title-text dark:text-gray-200">
        Your key to blockchain applications
      </div>
      <div className="text-center text-gray-700 mt-2 dark:text-gray-400">
        MetaMask provides an essential utility for blockchain newcomers, token
        traders, crypto gamers, and developers. Over a million downloads and
        counting!
      </div>
      <div className="w-full relative  overflow-hidden">
        <PartnerSlider />
      </div>
    </div>
  );
}

export default Partners;
