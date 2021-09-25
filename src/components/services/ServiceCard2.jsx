import React from "react";

function ServiceCard2({ flex, title, des }) {
  return (
    <div className={`flex justify-between items-center `}>
      <div
        className={`flex-1 border-6 border-blue-400 dark:border-gray-700 rounded-xl p-4  ${
          flex === "row" ? "" : "opacity-0"
        } `}
      >
        <div className="text-xl font-black dark:text-gray-200">{title}</div>
        <p className="text-sm dark:text-gray-400">{des}</p>
      </div>
      <div
        className={`w-10 h-2 bg-blue-400 dark:bg-gray-700 ${
          flex === "row" ? "" : "opacity-0"
        }`}
      ></div>
      <div className="rounded-full p-3 ring-8 ring-blue-400 dark:ring-gray-700"></div>
      <div
        className={`w-10 h-2 bg-blue-400 dark:bg-gray-700 ${
          flex === "rev" ? "" : "opacity-0"
        }`}
      ></div>
      <div
        className={`flex-1 border-6 border-blue-400 dark:border-gray-700 rounded-xl p-4  ${
          flex === "rev" ? "" : "opacity-0"
        } `}
      >
        <div className="text-xl font-black dark:text-gray-200">{title}</div>
        <p className="text-sm dark:text-gray-400">{des}</p>
      </div>
    </div>
  );
}

export default ServiceCard2;
