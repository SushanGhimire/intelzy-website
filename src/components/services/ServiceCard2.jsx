import React from "react";

function ServiceCard2({ flex, title, des }) {
  return (
    <div className={`flex justify-between items-center mt-3`}>
      {/* left card  */}
      <div
        className={`flex-1 hidden md:block border-6 border-intelzy border-opacity-60 dark:border-gray-700 rounded-xl p-4 
        ${flex === "right" ? "md:opacity-0" : ""}
        `}
      >
        <div className="text-xl font-black dark:text-gray-200">{title}</div>
        <p className="text-sm dark:text-gray-400">{des}</p>
      </div>
      {/* left line  */}
      <div
        className={`w-10 h-1.5 bg-intelzy bg-opacity-60 border-opacity-60 dark:bg-gray-700 hidden md:block ${
          flex === "right" ? "md:opacity-0" : ""
        }`}
      ></div>
      {/* circle  */}
      <div className="rounded-full p-3 border-6 border-intelzy border-opacity-60 dark:ring-gray-700"></div>
      {/* right line  */}
      <div
        className={`w-10 h-1.5 bg-intelzy bg-opacity-60 border-opacity-60 dark:bg-gray-700   ${
          flex === "left" ? "md:opacity-0" : ""
        }`}
      ></div>
      {/* right card  */}
      <div
        className={`flex-1 border-6 border-intelzy border-opacity-60 dark:border-gray-700 rounded-xl p-4   
        ${flex === "left" ? "md:opacity-0" : ""}
        `}
      >
        <div className="text-xl font-black dark:text-gray-200">{title}</div>
        <p className="text-sm dark:text-gray-400">{des}</p>
      </div>
    </div>
  );
}

export default ServiceCard2;
