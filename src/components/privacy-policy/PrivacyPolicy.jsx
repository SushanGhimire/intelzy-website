import React from "react";
import Policies from "./Policies";

function PrivacyPolicy() {
  return (
    <div className="flex flex-col pt-36 pb-20 ">
      <div className="w-full width mx-auto ">
        <div
          className=" text-center font-black text-gray-800 dark:text-gray-200 flex justify-center"
          style={{
            lineHeight: 1.2,
            fontSize: window.innerWidth < 1024 ? "40px" : "48px",
            fontWeight: 700,
          }}
        >
          Privacy Policies
        </div>
        <Policies />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
