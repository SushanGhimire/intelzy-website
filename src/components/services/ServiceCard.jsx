import React from "react";

function ServiceCard({ title, des }) {
  return (
    <div className="p-5 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md h-64 flex justify-center items-center relative group cursor-pointer clip-full group">
      <span className="text-center text-xl px-7 font-medium dark:text-gray-200">
        {title}
      </span>
      <div className="absolute bg-intelzy top-0 right-0 w-full h-full rounded-md service-card-clip transition-all duration-300 ease-in-out  flex justify-center items-center">
        <div className="text-white flex justify-end ">
          {/* <span className="text-2xl pt-5 pr-7 font-black">{sn}</span> */}
        </div>
        <div className="text-white p-3 text-sm opacity-0 group-hover:opacity-100 text-justify">
          {des}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
