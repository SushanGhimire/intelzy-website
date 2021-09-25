import React from "react";
import PartnerSlider from "./PartnerSlider";

function Partners() {
  return (
    <div className={`flex flex-col mt-20`}>
      <div className="title-text dark:text-gray-200  width mx-auto justify-center ">
        Projects
      </div>
      <div className="text-center text-gray-700 mt-2 dark:text-gray-400 width mx-auto ">
        We provide on-time and high-quality delivery to our clients.       
      </div>
      <div className="w-full   overflow-hidden width mx-auto mt-10">
        <PartnerSlider />
      </div>
    </div>
  );
}

export default Partners;
